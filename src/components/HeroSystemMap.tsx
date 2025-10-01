const GridPattern = () => (
  <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
    <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
  </pattern>
);

interface NodeProps {
  x: number;
  y: number;
  label: string;
  type: 'primary' | 'secondary' | 'core';
}

const Node = ({ x, y, label, type }: NodeProps) => {
  const size = type === 'core' ? 60 : 48;
  const offset = size / 2;
  
  return (
    <g>
      {type === 'core' ? (
        <>
          <circle 
            cx={x} 
            cy={y} 
            r="30" 
            fill="#0B0B0D" 
            stroke="#fff" 
            strokeWidth="1.5"
          />
          <circle 
            cx={x} 
            cy={y} 
            r="20" 
            fill="none" 
            stroke="#681038" 
            strokeWidth="1.5"
            opacity="0.4"
          >
            <animate
              attributeName="r"
              values="20;24;20"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0.2;0.4"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={x} cy={y} r="8" fill="#681038" />
        </>
      ) : type === 'primary' ? (
        <rect 
          x={x - offset} 
          y={y - offset} 
          width={size} 
          height={size} 
          rx="2" 
          fill="#0B0B0D" 
          stroke="#fff" 
          strokeWidth="1.5"
        />
      ) : (
        <polygon
          points={`${x},${y - offset} ${x + offset},${y} ${x},${y + offset} ${x - offset},${y}`}
          fill="#0B0B0D"
          stroke="#fff"
          strokeWidth="1.5"
        />
      )}
      <text
        x={x}
        y={y + size / 2 + 20}
        textAnchor="middle"
        fill="#fff"
        fontSize="11"
        fontFamily="monospace"
        letterSpacing="1.2"
        opacity="0.5"
      >
        {label.toUpperCase()}
      </text>
    </g>
  );
};

interface ConnectionProps {
  points: string;
}

const Connection = ({ points }: ConnectionProps) => (
  <g>
    <defs>
      <linearGradient id="connection-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#681038" stopOpacity="0.2" />
        <stop offset="50%" stopColor="#681038" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#681038" stopOpacity="0.2" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <polyline
      points={points}
      fill="none"
      stroke="url(#connection-grad)"
      strokeWidth="1.5"
      filter="url(#glow)"
    />
  </g>
);

const SystemMapDesktop = () => (
  <svg viewBox="0 0 1200 600" className="w-full h-full">
    <defs>
      <GridPattern />
    </defs>
    <rect width="1200" height="600" fill="#0B0B0D" />
    <rect width="1200" height="600" fill="url(#grid)" />
    
    <Connection points="250,300 400,300 600,300 800,300 950,300" />
    <Connection points="600,300 600,180" />
    <Connection points="600,300 600,420" />
    
    <circle r="4" fill="#681038">
      <animateMotion
        dur="6s"
        repeatCount="indefinite"
        path="M 250,300 L 400,300 L 600,300 L 800,300 L 950,300"
      />
    </circle>
    
    <Node x={250} y={300} label="API" type="primary" />
    <Node x={600} y={300} label="Core Engine" type="core" />
    <Node x={950} y={300} label="Storage" type="primary" />
    <Node x={600} y={180} label="Database" type="secondary" />
    <Node x={600} y={420} label="Cache" type="secondary" />
  </svg>
);

const SystemMapTablet = () => (
  <svg viewBox="0 0 1000 560" className="w-full h-full">
    <defs>
      <GridPattern />
    </defs>
    <rect width="1000" height="560" fill="#0B0B0D" />
    <rect width="1000" height="560" fill="url(#grid)" />
    
    <Connection points="200,280 350,280 500,280 650,280 800,280" />
    <Connection points="500,280 500,180" />
    <Connection points="500,280 500,380" />
    
    <circle r="4" fill="#681038">
      <animateMotion
        dur="6s"
        repeatCount="indefinite"
        path="M 200,280 L 350,280 L 500,280 L 650,280 L 800,280"
      />
    </circle>
    
    <Node x={200} y={280} label="API" type="primary" />
    <Node x={500} y={280} label="Core" type="core" />
    <Node x={800} y={280} label="Storage" type="primary" />
    <Node x={500} y={180} label="Database" type="secondary" />
    <Node x={500} y={380} label="Cache" type="secondary" />
  </svg>
);

const SystemMapMobile = () => (
  <svg viewBox="0 0 800 450" className="w-full h-full">
    <defs>
      <GridPattern />
    </defs>
    <rect width="800" height="450" fill="#0B0B0D" />
    <rect width="800" height="450" fill="url(#grid)" />
    
    <Connection points="150,225 300,225 400,225 500,225 650,225" />
    <Connection points="400,225 400,150" />
    <Connection points="400,225 400,300" />
    
    <circle r="3" fill="#681038">
      <animateMotion
        dur="6s"
        repeatCount="indefinite"
        path="M 150,225 L 300,225 L 400,225 L 500,225 L 650,225"
      />
    </circle>
    
    <Node x={150} y={225} label="API" type="primary" />
    <Node x={400} y={225} label="Core" type="core" />
    <Node x={650} y={225} label="Storage" type="primary" />
    <Node x={400} y={150} label="DB" type="secondary" />
    <Node x={400} y={300} label="Cache" type="secondary" />
  </svg>
);

const HeroSystemMap = () => {
  return (
    <div className="w-full">
      <div className="hidden lg:block aspect-[21/9] rounded-lg overflow-hidden shadow-sm">
        <SystemMapDesktop />
      </div>
      <div className="hidden md:block lg:hidden aspect-[16/9] rounded-lg overflow-hidden shadow-sm">
        <SystemMapTablet />
      </div>
      <div className="block md:hidden aspect-[16/9] rounded-lg overflow-hidden shadow-sm">
        <SystemMapMobile />
      </div>
    </div>
  );
};

export default HeroSystemMap;
