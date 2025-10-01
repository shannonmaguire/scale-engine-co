const BackendInfrastructureVisual = () => {
  return (
    <div className="relative w-full aspect-[16/9] bg-black rounded-lg overflow-hidden border border-border/50">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main Architecture Layout */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 562.5" preserveAspectRatio="xMidYMid meet">
        <defs>
          {/* Clean gradient for connection line */}
          <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#681038" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#681038" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#681038" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Animated dash pattern */}
          <linearGradient id="data-flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#681038" stopOpacity="0">
              <animate attributeName="offset" values="0;1" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#681038" stopOpacity="1">
              <animate attributeName="offset" values="0.5;1.5" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#681038" stopOpacity="0">
              <animate attributeName="offset" values="1;2" dur="2s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>

        {/* Connection Lines - Clean architecture flow */}
        <g className="connection-layer" opacity="0.6">
          <line x1="200" y1="180" x2="450" y2="180" stroke="url(#connection-gradient)" strokeWidth="2" />
          <line x1="450" y1="180" x2="500" y2="280" stroke="url(#connection-gradient)" strokeWidth="2" />
          <line x1="500" y1="280" x2="750" y2="380" stroke="url(#connection-gradient)" strokeWidth="2" />
          <line x1="500" y1="280" x2="300" y2="420" stroke="url(#connection-gradient)" strokeWidth="2" />
        </g>

        {/* Data Flow Indicator - Single clean animation */}
        <circle r="6" fill="#681038" opacity="0.8">
          <animateMotion dur="4s" repeatCount="indefinite">
            <mpath href="#data-path" />
          </animateMotion>
        </circle>
        <path id="data-path" d="M 200,180 L 450,180 L 500,280 L 750,380" fill="none" opacity="0" />

        {/* API Gateway - Left */}
        <g className="api-gateway">
          <rect x="160" y="140" width="80" height="80" rx="4" fill="#000" stroke="#fff" strokeWidth="3" />
          <rect x="175" y="155" width="50" height="50" rx="2" fill="#681038" opacity="0.2" />
          <circle cx="200" cy="180" r="8" fill="#681038" />
          <text x="200" y="235" fill="#fff" fontSize="12" textAnchor="middle" fontFamily="system-ui">API</text>
        </g>

        {/* Core Processing - Center */}
        <g className="core-processing">
          <circle cx="500" cy="280" r="50" fill="#000" stroke="#fff" strokeWidth="3" />
          <circle cx="500" cy="280" r="35" fill="#681038" opacity="0.1" />
          <circle cx="500" cy="280" r="20" fill="#681038" opacity="0.3" />
          <circle cx="500" cy="280" r="10" fill="#681038" />
          <text x="500" y="350" fill="#fff" fontSize="12" textAnchor="middle" fontFamily="system-ui">Core Engine</text>
        </g>

        {/* Database Cluster - Top Right */}
        <g className="database">
          <rect x="410" y="140" width="80" height="80" rx="4" fill="#000" stroke="#fff" strokeWidth="3" />
          <rect x="425" y="155" width="50" height="50" rx="2" fill="#fff" opacity="0.1" />
          <rect x="435" y="165" width="30" height="3" fill="#fff" opacity="0.6" />
          <rect x="435" y="175" width="30" height="3" fill="#fff" opacity="0.6" />
          <rect x="435" y="185" width="30" height="3" fill="#fff" opacity="0.6" />
          <text x="450" y="235" fill="#fff" fontSize="12" textAnchor="middle" fontFamily="system-ui">Database</text>
        </g>

        {/* Storage Layer - Bottom Right */}
        <g className="storage">
          <rect x="710" y="340" width="80" height="80" rx="4" fill="#000" stroke="#fff" strokeWidth="3" />
          <circle cx="750" cy="380" r="20" fill="#fff" opacity="0.1" />
          <circle cx="750" cy="380" r="12" fill="#681038" opacity="0.3" />
          <text x="750" y="435" fill="#fff" fontSize="12" textAnchor="middle" fontFamily="system-ui">Storage</text>
        </g>

        {/* Cache Layer - Bottom Left */}
        <g className="cache">
          <polygon points="300,380 330,395 330,425 300,440 270,425 270,395" fill="#000" stroke="#fff" strokeWidth="3" />
          <polygon points="300,395 318,404 318,424 300,433 282,424 282,404" fill="#681038" opacity="0.2" />
          <text x="300" y="460" fill="#fff" fontSize="12" textAnchor="middle" fontFamily="system-ui">Cache</text>
        </g>
      </svg>
    </div>
  );
};

export default BackendInfrastructureVisual;
