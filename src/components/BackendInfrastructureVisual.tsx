import { useEffect, useState } from 'react';

const BackendInfrastructureVisual = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden">
      {/* Background Grid */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-border/30"
            />
          </pattern>
          
          <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Connection Lines with Flow Animation */}
        <g className="connection-lines">
          {/* Horizontal flows */}
          <line
            x1="15%"
            y1="30%"
            x2="45%"
            y2="30%"
            stroke="currentColor"
            strokeWidth="1"
            className={`text-foreground/20 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.8s ease-out' }}
          />
          <line
            x1="55%"
            y1="70%"
            x2="85%"
            y2="70%"
            stroke="currentColor"
            strokeWidth="1"
            className={`text-foreground/20 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.8s ease-out 0.2s' }}
          />
          
          {/* Diagonal flows */}
          <line
            x1="45%"
            y1="30%"
            x2="55%"
            y2="50%"
            stroke="currentColor"
            strokeWidth="1"
            className={`text-foreground/20 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.8s ease-out 0.4s' }}
          />
          <line
            x1="55%"
            y1="50%"
            x2="55%"
            y2="70%"
            stroke="currentColor"
            strokeWidth="1"
            className={`text-foreground/20 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.8s ease-out 0.6s' }}
          />
          <line
            x1="45%"
            y1="50%"
            x2="25%"
            y2="65%"
            stroke="currentColor"
            strokeWidth="1"
            className={`text-foreground/20 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.8s ease-out 0.5s' }}
          />
          
          {/* Animated flow indicators */}
          <circle r="3" fill="url(#flow-gradient)" className="flow-particle">
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M 15,30 L 45,30"
            />
          </circle>
          <circle r="3" fill="url(#flow-gradient)" className="flow-particle">
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              begin="1s"
              path="M 45,30 L 55,50"
            />
          </circle>
          <circle r="3" fill="url(#flow-gradient)" className="flow-particle">
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              begin="2s"
              path="M 55,50 L 55,70"
            />
          </circle>
        </g>

        {/* System Nodes */}
        <g className="system-nodes">
          {/* Primary Hub - Center */}
          <g className={`node ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.8s ease-out 0.3s' }}>
            <circle
              cx="55%"
              cy="50%"
              r="20"
              fill="hsl(var(--card))"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary animate-pulse"
              style={{ animationDuration: '3s' }}
            />
            <circle
              cx="55%"
              cy="50%"
              r="12"
              fill="currentColor"
              className="text-primary/20"
            />
            <circle
              cx="55%"
              cy="50%"
              r="6"
              fill="currentColor"
              className="text-primary"
            />
          </g>

          {/* Database Node - Left */}
          <g className={`node ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.8s ease-out 0.5s' }}>
            <rect
              x="calc(15% - 15)"
              y="calc(30% - 15)"
              width="30"
              height="30"
              fill="hsl(var(--card))"
              stroke="currentColor"
              strokeWidth="2"
              className="text-foreground animate-pulse"
              style={{ animationDuration: '4s', animationDelay: '0.5s' }}
            />
            <rect
              x="calc(15% - 8)"
              y="calc(30% - 8)"
              width="16"
              height="16"
              fill="currentColor"
              className="text-foreground/30"
            />
          </g>

          {/* API Gateway Node - Top */}
          <g className={`node ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.8s ease-out 0.4s' }}>
            <polygon
              points="45,15 60,25 60,45 45,55 30,45 30,25"
              transform="translate(0, -10)"
              fill="hsl(var(--card))"
              stroke="currentColor"
              strokeWidth="2"
              className="text-foreground animate-pulse"
              style={{ animationDuration: '3.5s', animationDelay: '1s' }}
            />
            <polygon
              points="45,22 54,28 54,42 45,48 36,42 36,28"
              transform="translate(0, -10)"
              fill="currentColor"
              className="text-foreground/30"
            />
          </g>

          {/* Storage Node - Right */}
          <g className={`node ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.8s ease-out 0.7s' }}>
            <circle
              cx="85%"
              cy="70%"
              r="16"
              fill="hsl(var(--card))"
              stroke="currentColor"
              strokeWidth="2"
              className="text-foreground animate-pulse"
              style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}
            />
            <circle
              cx="85%"
              cy="70%"
              r="9"
              fill="currentColor"
              className="text-foreground/30"
            />
          </g>

          {/* Processing Node - Bottom Left */}
          <g className={`node ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.8s ease-out 0.6s' }}>
            <rect
              x="calc(25% - 12)"
              y="calc(65% - 12)"
              width="24"
              height="24"
              rx="4"
              fill="hsl(var(--card))"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary animate-pulse"
              style={{ animationDuration: '3.8s', animationDelay: '0.8s' }}
            />
            <rect
              x="calc(25% - 6)"
              y="calc(65% - 6)"
              width="12"
              height="12"
              rx="2"
              fill="currentColor"
              className="text-primary/30"
            />
          </g>
        </g>
      </svg>

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/20 pointer-events-none" />
    </div>
  );
};

export default BackendInfrastructureVisual;
