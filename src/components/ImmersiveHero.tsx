import { useEffect, useRef, useState } from 'react';
import { ConversionOptimizedButton } from '@/components/ConversionOptimizedButton';
import { Award, TrendingUp, Shield } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Enhanced SVG system with atmospheric layers
const BackgroundVisual = () => {
  return (
    <svg 
      className="absolute inset-0 w-full h-full" 
      preserveAspectRatio="xMidYMid slice"
      style={{ filter: 'contrast(1.1) brightness(0.95)' }}
    >
      <defs>
        {/* Enhanced Grid Pattern */}
        <pattern id="immersive-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
        </pattern>
        
        {/* Radial Glow for Core */}
        <radialGradient id="core-radial">
          <stop offset="0%" stopColor="#681038" stopOpacity="0.4"/>
          <stop offset="50%" stopColor="#681038" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#681038" stopOpacity="0"/>
        </radialGradient>
        
        {/* Connection Gradient */}
        <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)"/>
          <stop offset="50%" stopColor="rgba(104,16,56,0.5)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.1)"/>
        </linearGradient>
        
        {/* Ambient light sweep */}
        <linearGradient id="ambient-sweep" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(104,16,56,0.08)"/>
          <stop offset="50%" stopColor="rgba(104,16,56,0.0)"/>
          <stop offset="100%" stopColor="rgba(84,134,135,0.05)"/>
        </linearGradient>
      </defs>
      
      {/* Base black */}
      <rect width="100%" height="100%" fill="#000000"/>
      
      {/* Subtle ambient gradient overlay */}
      <rect width="100%" height="100%" fill="url(#ambient-sweep)"/>
      
      {/* Grid layer */}
      <rect width="100%" height="100%" fill="url(#immersive-grid)"/>
      
      {/* Core System - Center with radial glow */}
      <g className="core-system">
        <circle cx="50%" cy="50%" r="180" fill="url(#core-radial)" opacity="0.6">
          <animate attributeName="r" values="180;200;180" dur="8s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.6;0.8;0.6" dur="8s" repeatCount="indefinite"/>
        </circle>
        
        {/* Core node */}
        <rect 
          x="calc(50% - 40px)" 
          y="calc(50% - 40px)" 
          width="80" 
          height="80" 
          fill="none" 
          stroke="#681038" 
          strokeWidth="2"
          className="core-node"
        >
          <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite"/>
        </rect>
        
        {/* Inner rotating square */}
        <rect 
          x="calc(50% - 30px)" 
          y="calc(50% - 30px)" 
          width="60" 
          height="60" 
          fill="none" 
          stroke="rgba(104,16,56,0.4)" 
          strokeWidth="1"
          transform-origin="50% 50%"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50% 50%"
            to="360 50% 50%"
            dur="60s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      
      {/* Orbital Nodes - Desktop positioning */}
      <g className="orbital-nodes hidden lg:block">
        {/* API Node - Left */}
        <g transform="translate(15%, 50%)">
          <circle r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <rect x="-25" y="-25" width="50" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
          <text x="0" y="60" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="monospace" textAnchor="middle">API</text>
        </g>
        
        {/* Database Node - Top */}
        <g transform="translate(50%, 20%)">
          <circle r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <path d="M -20,-20 L 0,-35 L 20,-20 L 0,-5 Z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
          <text x="0" y="60" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="monospace" textAnchor="middle">DATABASE</text>
        </g>
        
        {/* Storage Node - Right */}
        <g transform="translate(85%, 50%)">
          <circle r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <rect x="-25" y="-25" width="50" height="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
          <text x="0" y="60" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="monospace" textAnchor="middle">STORAGE</text>
        </g>
        
        {/* Cloud Node - Bottom */}
        <g transform="translate(50%, 80%)">
          <circle r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <path d="M -20,-20 L 0,-35 L 20,-20 L 0,-5 Z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
          <text x="0" y="60" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="monospace" textAnchor="middle">CLOUD</text>
        </g>
        
        {/* Connecting lines */}
        <line x1="15%" y1="50%" x2="calc(50% - 40px)" y2="50%" stroke="url(#connection-gradient)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5">
          <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite"/>
        </line>
        <line x1="50%" y1="20%" x2="50%" y2="calc(50% - 40px)" stroke="url(#connection-gradient)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5">
          <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite"/>
        </line>
        <line x1="85%" y1="50%" x2="calc(50% + 40px)" y2="50%" stroke="url(#connection-gradient)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5">
          <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite"/>
        </line>
        <line x1="50%" y1="80%" x2="50%" y2="calc(50% + 40px)" stroke="url(#connection-gradient)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5">
          <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite"/>
        </line>
      </g>
      
      {/* Mobile/Tablet simplified version */}
      <g className="orbital-nodes-mobile lg:hidden">
        {/* Simplified 3-node layout for mobile */}
        <g transform="translate(20%, 40%)">
          <circle r="30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <rect x="-15" y="-15" width="30" height="30" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <text x="0" y="45" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace" textAnchor="middle">API</text>
        </g>
        
        <g transform="translate(80%, 40%)">
          <circle r="30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <rect x="-15" y="-15" width="30" height="30" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <text x="0" y="45" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace" textAnchor="middle">DATA</text>
        </g>
        
        <g transform="translate(50%, 75%)">
          <circle r="30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <path d="M -12,-12 L 0,-20 L 12,-12 L 0,-4 Z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <text x="0" y="45" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace" textAnchor="middle">CLOUD</text>
        </g>
        
        <line x1="20%" y1="40%" x2="calc(50% - 30px)" y2="calc(50% - 15px)" stroke="url(#connection-gradient)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4"/>
        <line x1="80%" y1="40%" x2="calc(50% + 30px)" y2="calc(50% - 15px)" stroke="url(#connection-gradient)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4"/>
        <line x1="50%" y1="75%" x2="50%" y2="calc(50% + 30px)" stroke="url(#connection-gradient)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4"/>
      </g>
      
      {/* Animated data particles */}
      <g className="data-flow">
        <circle r="2" fill="#681038" opacity="0.8">
          <animateMotion dur="12s" repeatCount="indefinite">
            <mpath href="#flow-path-1"/>
          </animateMotion>
          <animate attributeName="opacity" values="0;0.8;0" dur="12s" repeatCount="indefinite"/>
        </circle>
        
        <circle r="2" fill="#548687" opacity="0.6">
          <animateMotion dur="15s" repeatCount="indefinite" begin="3s">
            <mpath href="#flow-path-2"/>
          </animateMotion>
          <animate attributeName="opacity" values="0;0.6;0" dur="15s" repeatCount="indefinite" begin="3s"/>
        </circle>
      </g>
      
      {/* Hidden paths for animation */}
      <path id="flow-path-1" d="M 15% 50% L 50% 50% L 85% 50%" fill="none" opacity="0"/>
      <path id="flow-path-2" d="M 50% 20% L 50% 50% L 50% 80%" fill="none" opacity="0"/>
      
      {/* Core System label */}
      <text 
        x="50%" 
        y="calc(50% + 5px)" 
        fill="rgba(255,255,255,0.9)" 
        fontSize="12" 
        fontFamily="monospace" 
        textAnchor="middle"
        fontWeight="600"
        letterSpacing="1"
      >
        CORE SYSTEM
      </text>
    </svg>
  );
};

export const ImmersiveHero = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });
  
  return (
    <section 
      ref={ref as any}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ 
        minHeight: 'max(100vh, 700px)',
      }}
    >
      {/* Full-width background visual */}
      <div className="absolute inset-0 z-0">
        <BackgroundVisual />
      </div>
      
      {/* Vignette overlay for depth */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-20 container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content - takes up 6 columns on desktop */}
          <div 
            className={`lg:col-span-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Backdrop blur card for readability */}
            <div 
              className="bg-black/40 backdrop-blur-md border border-white/10 p-8 lg:p-10 rounded-sm"
              style={{
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
              }}
            >
              <h1 className="heading-page mb-6 leading-tight text-white">
                The Competitive Advantage Is the Backend
              </h1>
              
              <p className="text-description mb-8 text-white/90">
                In an era of fractured attention and tool overload, the real advantage belongs to operators who install systems that are simple, resilient, and actually adopted. We turn complexity into seamless flow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <ConversionOptimizedButton
                  to="/contact"
                  ctaName="Immersive Hero - Book Assessment"
                  location="Homepage Immersive Hero"
                  className="bg-[#681038] hover:bg-[#681038]/90 text-white border-0 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-all duration-150 shadow-lg hover:shadow-xl"
                >
                  Book Assessment
                </ConversionOptimizedButton>
                <ConversionOptimizedButton
                  to="#system"
                  ctaName="Immersive Hero - See System"
                  location="Homepage Immersive Hero"
                  variant="outline"
                  className="bg-transparent text-white border-2 border-white/40 hover:bg-white/10 hover:border-white/60 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-all duration-150"
                  showArrow={false}
                >
                  See the System
                </ConversionOptimizedButton>
              </div>
              
              {/* Trust signals with semi-transparent background */}
              <div className="pt-6 border-t border-white/20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all">
                    <Award className="w-5 h-5 text-[#681038] flex-shrink-0" />
                    <div>
                      <div className="font-mono text-sm font-semibold text-white">50+ Systems</div>
                      <div className="text-xs text-white/60">Deployed & Scaled</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all">
                    <TrendingUp className="w-5 h-5 text-[#681038] flex-shrink-0" />
                    <div>
                      <div className="font-mono text-sm font-semibold text-white">4x Average</div>
                      <div className="text-xs text-white/60">Efficiency Gain</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all">
                    <Shield className="w-5 h-5 text-[#681038] flex-shrink-0" />
                    <div>
                      <div className="font-mono text-sm font-semibold text-white">24hr Response</div>
                      <div className="text-xs text-white/60">Guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - visual dominates, content overlays it */}
          <div className="lg:col-span-6 hidden lg:block">
            {/* This space allows the visual to breathe and be prominent */}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
