import { useState, useEffect } from 'react';
import cwtLogoHorizontal from "@/assets/cwt-logo-horizontal.svg";

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
      className="fixed inset-0 z-[9999] overflow-hidden"
      role="dialog"
      aria-label="Loading screen"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      {/* Main content */}
      <div className={`relative h-full flex flex-col items-center justify-center transition-all duration-700 ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        
        {/* Logo with entrance animation */}
        <div className="mb-12 transform transition-all duration-1000" 
             style={{
               transform: showContent ? 'scale(1)' : 'scale(0.8)',
               opacity: showContent ? 1 : 0
             }}>
          <img 
            src={cwtLogoHorizontal} 
            alt="CWT Studio"
            width="320"
            height="107"
            loading="eager"
            decoding="async"
            className="h-24 w-auto drop-shadow-2xl"
          />
        </div>

        {/* Animated phrases with stagger effect */}
        <div className="relative h-24 flex items-center justify-center mb-8">
          {phrases.map((phrase, index) => (
            <h1
              key={index}
              className="absolute font-mono font-bold text-foreground uppercase tracking-tight leading-none select-none transition-all duration-500"
              style={{
                fontSize: 'clamp(24px, 4vw, 48px)',
                opacity: currentPhrase === index ? 1 : 0,
                transform: currentPhrase === index ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
              }}
              aria-live={currentPhrase === index ? "polite" : "off"}
            >
              {phrase}
            </h1>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Tagline */}
        <p className={`mt-8 font-mono text-sm text-muted-foreground tracking-wide transition-all duration-700 delay-300 ${
          showContent ? 'opacity-60' : 'opacity-0'
        }`}>
          Revenue Systems That Scale
        </p>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
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