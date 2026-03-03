import express from 'express';
import { createServer as createViteServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Meta Conversions API Endpoint
  app.post('/api/meta-event', async (req, res) => {
    const { eventName, eventId, eventSourceUrl, userData, customData } = req.body;
    const pixelId = process.env.META_PIXEL_ID;
    const accessToken = process.env.META_API_ACCESS_TOKEN;

    if (!pixelId || !accessToken) {
      console.error('Meta Pixel ID or Access Token missing');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const currentTimestamp = Math.floor(Date.now() / 1000);

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: currentTimestamp,
          event_id: eventId,
          event_source_url: eventSourceUrl,
          action_source: 'website',
          user_data: {
            client_user_agent: req.headers['user-agent'],
            client_ip_address: req.ip,
            ...userData,
          },
          custom_data: customData,
        },
      ],
      // test_event_code: 'TEST12345', // Uncomment for testing
    };

    try {
      const response = await fetch(
        `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error('Meta CAPI Error:', data);
        return res.status(response.status).json(data);
      }

      res.json({ success: true, data });
    } catch (error) {
      console.error('Meta CAPI Request Failed:', error);
      res.status(500).json({ error: 'Failed to send event to Meta' });
    }
  });

  // API routes go here
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving
    const distPath = resolve(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));

      // SEO Injection for /imersao
      // Handle /imersao, /Imersao, /imersao/, etc. (Case insensitive)
      app.get(/^\/imersao\/?$/i, (req, res) => {
        try {
          const indexPath = resolve(distPath, 'index.html');
          let html = fs.readFileSync(indexPath, 'utf-8');
          
          const title = "Rotina de Estudos | FOX IMAGEM";
          const description = "Descubra como é a rotina de estudos de quem passa na residência veterinária. Evento gratuito e online.";
          
          // Robust replacements using regex that targets the meta tags directly
          
          // 1. Replace <title>
          html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
          
          // 2. Replace meta name="description"
          html = html.replace(
            /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
            `<meta name="description" content="${description}" />`
          );

          // 3. Replace meta property="og:title"
          html = html.replace(
            /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
            `<meta property="og:title" content="${title}" />`
          );

          // 4. Replace meta property="og:description"
          html = html.replace(
            /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
            `<meta property="og:description" content="${description}" />`
          );

          // 5. Replace meta property="twitter:title"
          html = html.replace(
            /<meta\s+property="twitter:title"\s+content="[^"]*"\s*\/?>/i,
            `<meta property="twitter:title" content="${title}" />`
          );

          // 6. Replace meta property="twitter:description"
          html = html.replace(
            /<meta\s+property="twitter:description"\s+content="[^"]*"\s*\/?>/i,
            `<meta property="twitter:description" content="${description}" />`
          );

          res.send(html);
        } catch (error) {
          console.error('Error serving /imersao:', error);
          res.sendFile(resolve(distPath, 'index.html'));
        }
      });

      app.get('*', (req, res) => {
        res.sendFile(resolve(distPath, 'index.html'));
      });
    }
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
