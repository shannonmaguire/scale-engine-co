import { useEffect, useState, useRef } from 'react';
import { trackEvent } from './usePageTracking';

interface UseExitIntentOptions {
  sensitivity?: number;
  delay?: number;
  enabled?: boolean;
  onExitIntent?: () => void;
}

/**
 * Detect when user is about to leave the page
 * Triggers on mouse movement toward browser chrome
 * Used for exit-intent popups and conversion optimization
 */
export const useExitIntent = ({
  sensitivity = 20,
  delay = 0,
  enabled = true,
  onExitIntent,
}: UseExitIntentOptions = {}) => {
  const [hasShown, setHasShown] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    if (!enabled || hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is moving toward top of viewport (browser chrome)
      if (e.clientY <= sensitivity && e.clientY < window.innerHeight) {
        // Clear any existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // Delay before triggering
        timeoutRef.current = window.setTimeout(() => {
          setIsExiting(true);
          setHasShown(true);
          onExitIntent?.();
          
          // Track exit intent event
          trackEvent('Exit Intent Triggered', {
            page: window.location.pathname,
            timestamp: new Date().toISOString(),
          });
        }, delay);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [enabled, hasShown, sensitivity, delay, onExitIntent]);

  const reset = () => {
    setHasShown(false);
    setIsExiting(false);
  };

  return { isExiting, hasShown, reset };
};
