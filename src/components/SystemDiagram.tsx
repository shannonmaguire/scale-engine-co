const SystemDiagram = () => {
  return (
    <div className="w-full card-premium p-8">
      {/* Premium Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Revenue Impact Dashboard</h3>
          <p className="text-muted-foreground">Client success metrics across our engagements</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-success">Live Data</span>
        </div>
      </div>
      
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="text-center">
          <div className="stat-number mb-2">$2.4M</div>
          <div className="stat-label">Avg Revenue Increase</div>
        </div>
        
        <div className="text-center">
          <div className="stat-number mb-2">73%</div>
          <div className="stat-label">Process Efficiency Gain</div>
        </div>
        
        <div className="text-center">
          <div className="stat-number mb-2">18</div>
          <div className="stat-label">Days to First Value</div>
        </div>
      </div>
      
      {/* Service Impact Breakdown */}
      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="font-semibold">Salesforce Optimization</span>
          </div>
          <span className="text-primary font-bold">+156% Pipeline Velocity</span>
        </div>
        
        <div className="flex items-center justify-between py-3 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="font-semibold">Revenue Operations</span>
          </div>
          <span className="text-primary font-bold">+89% Process Automation</span>
        </div>
        
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span className="font-semibold">System Integration</span>
          </div>
          <span className="text-primary font-bold">+203% Data Accuracy</span>
        </div>
      </div>
    </div>
  );
};

export default SystemDiagram;