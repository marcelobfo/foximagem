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
    // Track PageView on route change
    if (window.fbq) {
      window.fbq('track', 'PageView');

      // Track ViewContent for page content
      window.fbq('track', 'ViewContent', {
        content_name: 'Pagina de Conteudo',
        content_category: 'Diagnostico',
        content_type: 'product',
        currency: 'BRL',
        value: 0.00
      });
    }
  }, [location]);

  return null;
};

// Helper function for CompleteRegistration event
export const trackCompleteRegistration = () => {
  if (window.fbq) {
    window.fbq('track', 'CompleteRegistration', {
      content_name: 'Cadastro finalizado',
      status: true
    });
  }
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
        userData,
        customData,
      }),
    });
  } catch (error) {
    console.error('Failed to send CAPI event', error);
  }
};
