import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Track page views and route changes
 * This is a placeholder for analytics integration (Google Analytics, Mixpanel, etc.)
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view
    const pageView = {
      path: location.pathname,
      search: location.search,
      timestamp: new Date().toISOString(),
      referrer: document.referrer,
    };

    // Log in development
    if (import.meta.env.DEV) {
      console.log('📊 Page View:', pageView);
    }

    // TODO: Send to analytics service in production
    // Example: window.gtag?.('event', 'page_view', { page_path: location.pathname });
    // Example: window.mixpanel?.track('Page View', pageView);

  }, [location]);
};

/**
 * Track custom events
 */
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  const event = {
    name: eventName,
    properties,
    timestamp: new Date().toISOString(),
  };

  if (import.meta.env.DEV) {
    console.log('📊 Event:', event);
  }

  // TODO: Send to analytics service in production
  // Example: window.gtag?.('event', eventName, properties);
  // Example: window.mixpanel?.track(eventName, properties);
};
