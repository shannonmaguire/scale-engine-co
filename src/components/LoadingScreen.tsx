import { useState, useEffect } from 'react';
import cwtSymbolBurgundy from "@/assets/cwt-symbol-burgundy.svg";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showContent, setShowContent] = useState(false);

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
    // Fade in content
    setTimeout(() => setShowContent(true), 100);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Phrase rotation with staggered timing
    const phraseDuration = prefersReducedMotion ? 1200 : 1800;
    const phraseInterval = setInterval(() => {
      setCurrentPhrase(prev => {
        if (prev < phrases.length - 1) {
          return prev + 1;
        }
        clearInterval(phraseInterval);
        return prev;
      });
    }, phraseDuration);

    // Complete loading sequence
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete(), 600);
    }, phraseDuration * phrases.length + 400);

    return () => {
      clearInterval(progressInterval);
      clearInterval(phraseInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div 
        className="fixed inset-0 z-[9999] transition-opacity duration-600 opacity-0 pointer-events-none"
        aria-hidden="true"
      />
    );
  }

  return (
    <div 
      className="fixed inset-0 z-[9999] overflow-hidden bg-background"
      role="dialog"
      aria-label="Loading screen"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      {/* Main content */}
      <div className={`relative h-full flex flex-col items-center justify-center transition-all duration-700 ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        
        {/* Logo with entrance animation */}
        <div className="mb-16 transform transition-all duration-1000 ease-out" 
             style={{
               transform: showContent ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
               opacity: showContent ? 1 : 0
             }}>
          <div className="relative">
            <div className="absolute inset-0 bg-[hsl(var(--burgundy))]/10 blur-3xl rounded-full animate-pulse" />
            <img 
              src={cwtSymbolBurgundy} 
              alt="CWT Studio"
              width="128"
              height="128"
              loading="eager"
              decoding="async"
              className="h-32 w-32 relative z-10 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Animated phrases with elegant transitions */}
        <div className="relative h-32 flex items-center justify-center mb-12">
          {phrases.map((phrase, index) => (
            <h1
              key={index}
              className="absolute font-mono font-bold text-foreground uppercase tracking-[0.2em] leading-none select-none transition-all duration-700 ease-out"
              style={{
                fontSize: 'clamp(28px, 5vw, 56px)',
                opacity: currentPhrase === index ? 1 : 0,
                transform: currentPhrase === index 
                  ? 'translateY(0) scale(1)' 
                  : currentPhrase > index 
                    ? 'translateY(-30px) scale(0.95)' 
                    : 'translateY(30px) scale(0.95)',
                filter: currentPhrase === index ? 'blur(0)' : 'blur(8px)',
              }}
              aria-live={currentPhrase === index ? "polite" : "off"}
            >
              {phrase}
            </h1>
          ))}
        </div>

        {/* Progress bar with shimmer effect */}
        <div className="relative w-80 h-1 bg-muted/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary relative transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent animate-shimmer" 
                 style={{
                   backgroundSize: '200% 100%',
                   animation: 'shimmer 2s infinite linear'
                 }} />
          </div>
        </div>

        {/* Tagline */}
        <p className={`mt-12 font-mono text-base text-muted-foreground tracking-[0.3em] uppercase transition-all duration-700 delay-500 ${
          showContent ? 'opacity-60' : 'opacity-0'
        }`}>
          Revenue Systems That Scale
        </p>
      </div>

      {/* Skip button */}
      <button
        onClick={skipIntro}
        className="fixed bottom-8 right-8 text-sm text-muted-foreground hover:text-foreground underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-3 py-2 transition-colors duration-200"
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