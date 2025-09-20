import { useEffect, useState } from "react";
import heroSystemDiagram from "@/assets/hero-system-diagram.jpg";

const SystemDiagram = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    { id: 'assess', label: 'Assessment', x: 20, y: 50 },
    { id: 'build', label: 'Sprint', x: 50, y: 30 },
    { id: 'operate', label: 'Fractional Ops', x: 80, y: 50 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="relative w-full h-64 bg-card border border-border rounded-lg overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroSystemDiagram})` }}
      />
      
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      
      {/* System nodes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {/* Connection lines */}
        <path
          d="M 15 50 L 35 35"
          stroke="hsl(var(--border))"
          strokeWidth="0.5"
          strokeDasharray="2,2"
          className={`transition-opacity duration-500 ${activeStep >= 1 ? 'opacity-100' : 'opacity-30'}`}
        />
        <path
          d="M 45 35 L 65 45"
          stroke="hsl(var(--border))"  
          strokeWidth="0.5"
          strokeDasharray="2,2"
          className={`transition-opacity duration-500 ${activeStep >= 2 ? 'opacity-100' : 'opacity-30'}`}
        />
        
        {/* System nodes */}
        {steps.map((step, index) => (
          <g key={step.id}>
            {/* Node circle */}
            <circle
              cx={step.x}
              cy={step.y}
              r="3"
              fill={activeStep >= index ? "hsl(var(--primary))" : "hsl(var(--border))"}
              className="transition-all duration-500"
            />
            
            {/* Node pulse effect when active */}
            {activeStep === index && (
              <circle
                cx={step.x}
                cy={step.y}
                r="3"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                className="animate-ping"
              />
            )}
            
            {/* Label */}
            <text
              x={step.x}
              y={step.y - 8}
              textAnchor="middle"
              className="fill-foreground text-xs font-medium"
              style={{ fontSize: '3px' }}
            >
              {step.label}
            </text>
          </g>
        ))}
        
        {/* Measurement ticks */}
        <g stroke="hsl(var(--muted-foreground))" strokeWidth="0.3">
          <line x1="5" y1="10" x2="5" y2="90" />
          <line x1="3" y1="10" x2="7" y2="10" />
          <line x1="3" y1="90" x2="7" y2="90" />
        </g>
      </svg>
      
      {/* Animated data flow */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-2 h-2 bg-primary rounded-full opacity-70 animate-pulse"
          style={{
            left: `${steps[activeStep]?.x}%`,
            top: `${steps[activeStep]?.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </div>
  );
};

export default SystemDiagram;