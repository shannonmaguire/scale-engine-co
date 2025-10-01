const GridPattern = () => <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.3" opacity="0.04" />
  </pattern>;
const CoreGlow = () => <defs>
    <radialGradient id="core-glow">
      <stop offset="0%" stopColor="#681038" stopOpacity="0.3" />
      <stop offset="50%" stopColor="#681038" stopOpacity="0.15" />
      <stop offset="100%" stopColor="#681038" stopOpacity="0" />
    </radialGradient>
    <filter id="soft-glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>;
interface NodeProps {
  x: number;
  y: number;
  label: string;
  type: 'primary' | 'secondary' | 'core';
}
const Node = ({
  x,
  y,
  label,
  type
}: NodeProps) => {
  const size = type === 'core' ? 70 : 44;
  const offset = size / 2;
  return <g>
      {type === 'core' ? <>
          {/* Outer glow pulse */}
          <circle cx={x} cy={y} r="80" fill="url(#core-glow)">
            <animate attributeName="r" values="80;100;80" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.6;1" dur="4s" repeatCount="indefinite" />
          </circle>
          
          {/* Main core circle */}
          <circle cx={x} cy={y} r="35" fill="#000" stroke="#fff" strokeWidth="1" />
          
          {/* Inner accent ring */}
          <circle cx={x} cy={y} r="26" fill="none" stroke="#681038" strokeWidth="1" opacity="0.6">
            <animate attributeName="r" values="26;30;26" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.3;0.6" dur="4s" repeatCount="indefinite" />
          </circle>
          
          {/* Center dot */}
          <circle cx={x} cy={y} r="10" fill="#681038" filter="url(#soft-glow)" />
        </> : type === 'primary' ? <>
          <rect x={x - offset} y={y - offset} width={size} height={size} rx="1" fill="#000" stroke="#fff" strokeWidth="1" />
          <rect x={x - offset + 8} y={y - offset + 8} width={size - 16} height={size - 16} rx="1" fill="none" stroke="#681038" strokeWidth="0.5" opacity="0.3" />
        </> : <>
          <polygon points={`${x},${y - offset} ${x + offset},${y} ${x},${y + offset} ${x - offset},${y}`} fill="#000" stroke="#fff" strokeWidth="1" />
          <polygon points={`${x},${y - offset + 10} ${x + offset - 10},${y} ${x},${y + offset - 10} ${x - offset + 10},${y}`} fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.2" />
        </>}
      <text x={x} y={y + size / 2 + 18} textAnchor="middle" fill="#fff" fontSize="10" fontFamily="'JetBrains Mono', monospace" letterSpacing="1.5" opacity="0.45" fontWeight="400">
        {label.toUpperCase()}
      </text>
    </g>;
};
interface ConnectionProps {
  points: string;
}
const Connection = ({
  points
}: ConnectionProps) => <g>
    <defs>
      <linearGradient id="connection-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.1" />
        <stop offset="50%" stopColor="#681038" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <polyline points={points} fill="none" stroke="url(#connection-grad)" strokeWidth="1" strokeDasharray="4 4" />
  </g>;
const SystemMapDesktop = () => (
  <svg viewBox="0 0 1200 600" className="w-full h-full">
    <defs>
      <GridPattern />
      <CoreGlow />
    </defs>
    <rect width="1200" height="600" fill="#000" />
    <rect width="1200" height="600" fill="url(#grid)" />
    
    {/* Main horizontal connections */}
    <Connection points="100,300 350,300 600,300 850,300 1100,300" />
    {/* Vertical connections from core */}
    <Connection points="600,300 600,150" />
    <Connection points="600,300 600,450" />
    
    {/* Animated data flow */}
    <circle r="3" fill="#681038" opacity="0.8">
      <animateMotion dur="8s" repeatCount="indefinite" path="M 100,300 L 350,300 L 600,300 L 850,300 L 1100,300" />
    </circle>
    
    {/* Nodes */}
    <Node x={100} y={300} label="API" type="primary" />
    <Node x={600} y={300} label="Core System" type="core" />
    <Node x={1100} y={300} label="Storage" type="primary" />
    <Node x={600} y={150} label="Database" type="secondary" />
    <Node x={600} y={450} label="Cloud" type="secondary" />
  </svg>
);
const SystemMapTablet = () => <svg viewBox="0 0 1000 560" className="w-full h-full">
    <defs>
      <GridPattern />
      <CoreGlow />
    </defs>
    <rect width="1000" height="560" fill="#000" />
    <rect width="1000" height="560" fill="url(#grid)" />
    
    <Connection points="120,280 320,280 500,280 680,280 880,280" />
    <Connection points="500,280 500,140" />
    <Connection points="500,280 500,420" />
    
    <circle r="3" fill="#681038" opacity="0.8">
      <animateMotion dur="8s" repeatCount="indefinite" path="M 120,280 L 320,280 L 500,280 L 680,280 L 880,280" />
    </circle>
    
    <Node x={120} y={280} label="API" type="primary" />
    <Node x={500} y={280} label="Core System" type="core" />
    <Node x={880} y={280} label="Storage" type="primary" />
    <Node x={500} y={140} label="Database" type="secondary" />
    <Node x={500} y={420} label="Cloud" type="secondary" />
  </svg>;
const SystemMapMobile = () => <svg viewBox="0 0 800 450" className="w-full h-full">
    <defs>
      <GridPattern />
      <CoreGlow />
    </defs>
    <rect width="800" height="450" fill="#000" />
    <rect width="800" height="450" fill="url(#grid)" />
    
    <Connection points="100,225 280,225 400,225 520,225 700,225" />
    <Connection points="400,225 400,120" />
    <Connection points="400,225 400,330" />
    
    <circle r="2.5" fill="#681038" opacity="0.8">
      <animateMotion dur="8s" repeatCount="indefinite" path="M 100,225 L 280,225 L 400,225 L 520,225 L 700,225" />
    </circle>
    
    <Node x={100} y={225} label="API" type="primary" />
    <Node x={400} y={225} label="Core System" type="core" />
    <Node x={700} y={225} label="Storage" type="primary" />
    <Node x={400} y={120} label="Database" type="secondary" />
    <Node x={400} y={330} label="Cloud" type="secondary" />
  </svg>;
const HeroSystemMap = () => {
  return (
    <div className="w-full h-full min-h-[450px] md:min-h-[560px] lg:min-h-[600px]">
      {/* Mobile: < 768px */}
      <div className="block md:hidden">
        <SystemMapMobile />
      </div>
      
      {/* Tablet: 768px - 1023px */}
      <div className="hidden md:block lg:hidden">
        <SystemMapTablet />
      </div>
      
      {/* Desktop: >= 1024px */}
      <div className="hidden lg:block">
        <SystemMapDesktop />
      </div>
    </div>
  );
};

export default HeroSystemMap;