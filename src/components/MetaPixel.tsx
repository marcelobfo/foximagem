import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

// Define the window interface to include fbq
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export const MetaPixel = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Facebook Pixel
    const pixelId = import.meta.env.VITE_META_PIXEL_ID;
    
    if (pixelId) {
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
    }
  }, []);

  useEffect(() => {
    // Track PageView on route change
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  return null;
};

// Utility to track events via both Pixel (Browser) and CAPI (Server)
export const trackMetaEvent = async (eventName: string, userData: any = {}, customData: any = {}) => {
  const eventId = uuidv4(); // Unique ID for deduplication
  const eventSourceUrl = window.location.href;

  // 1. Browser Side (Pixel)
  if (window.fbq) {
    window.fbq('track', eventName, customData, { eventID: eventId });
  }

  // 2. Server Side (CAPI)
  try {
    await fetch('/api/meta-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventId,
        eventSourceUrl,
        userData, // e.g., { em: 'hashed_email', ph: 'hashed_phone' } - hashing should be done if sending raw data, but CAPI accepts raw if server handles hashing or if sending securely. 
                  // Ideally, we should hash on client or server. Meta recommends SHA-256.
                  // For simplicity here, we pass data. In a real app, ensure PII is hashed before sending or handled securely.
        customData,
      }),
    });
  } catch (error) {
    console.error('Failed to send CAPI event', error);
  }
};
