import { useState, useEffect } from 'react';
import cwtLogoHorizontal from "@/assets/cwt-logo-loading.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const phrases = [
    'REVENUE INFRASTRUCTURE',
    'SYSTEMATIZED GROWTH', 
    'OPERATIONAL EXCELLENCE'
  ];

  const skipIntro = () => {
    setIsVisible(false);
    setTimeout(() => onComplete(), 500);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Simple fade between phrases for reduced motion
      const interval = setInterval(() => {
        if (currentPhrase < phrases.length - 1) {
          setCurrentPhrase(prev => prev + 1);
          setDisplayText(phrases[currentPhrase + 1]);
        } else {
          setIsVisible(false);
          setTimeout(() => onComplete(), 500);
          clearInterval(interval);
        }
      }, 1600);

      setDisplayText(phrases[0]);
      return () => clearInterval(interval);
    }

    // Typewriter animation
    const typewriterEffect = () => {
      const currentText = phrases[currentPhrase];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex <= currentText.length) {
          setDisplayText(currentText.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          
          // Show cursor blinking briefly
          setShowCursor(true);
          setTimeout(() => setShowCursor(false), 100);
          
          // Wait, then fade out and move to next phrase
          setTimeout(() => {
            if (currentPhrase < phrases.length - 1) {
              setDisplayText('');
              setCurrentPhrase(prev => prev + 1);
            } else {
              // Final phrase complete, fade out overlay
              setIsVisible(false);
              setTimeout(() => onComplete(), 500);
            }
          }, 1600);
        }
      }, 80); // ~80ms per character for smooth typewriter effect
    };

    // Start typewriter after brief delay
    const startDelay = setTimeout(typewriterEffect, 200);
    
    return () => {
      clearTimeout(startDelay);
    };
  }, [currentPhrase, onComplete]);

  if (!isVisible) {
    return (
      <div 
        className="fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none"
        aria-hidden="true"
      />
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center overflow-hidden"
      role="dialog"
      aria-label="Loading screen"
    >
      <div className="text-center space-y-8">
        {/* CWT Studio Logo */}
        <div className="flex justify-center">
          <img 
            src={cwtLogoHorizontal} 
            alt="CWT Studio"
            className="h-20 w-auto animate-pulse"
            style={{ 
              animationDuration: '2s',
              filter: 'hue-rotate(0deg)'
            }}
          />
        </div>
        
        {/* Typewriter Text */}
        <h1 
          className="font-mono font-bold text-primary uppercase tracking-tight leading-none select-none"
          style={{ 
            fontSize: 'clamp(28px, 4vw, 56px)',
            color: 'hsl(var(--primary))'
          }}
          aria-live="polite"
        >
          {displayText}
          {showCursor && (
            <span 
              className="animate-pulse"
              aria-hidden="true"
            >
              |
            </span>
          )}
        </h1>
        
        {/* Subtle tagline */}
        <div className="opacity-60">
          <p className="font-mono text-sm text-muted-foreground tracking-wide">
            Revenue Systems That Scale
          </p>
        </div>
      </div>
      
      <button
        onClick={skipIntro}
        className="fixed bottom-6 right-6 text-sm text-foreground underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white rounded px-2 py-1"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            skipIntro();
          }
        }}
      >
        Skip intro
      </button>
    </div>
  );
};

export default LoadingScreen;