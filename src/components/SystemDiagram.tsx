const SystemDiagram = () => {
  return (
    <div className="w-full h-64 bg-card border border-border console-card font-mono">
      {/* Console Header */}
      <div className="border-b border-border p-3 bg-muted/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs font-mono text-muted-foreground">SYSTEM STATUS</span>
          </div>
          <span className="text-xs font-mono text-muted-foreground">ONLINE</span>
        </div>
      </div>
      
      {/* Console Content */}
      <div className="p-4 space-y-4">
        {/* Process Flow */}
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground mb-3">REVENUE.SYS PROCESS FLOW:</div>
          
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div className="space-y-1">
              <div className="text-primary font-bold">01 ASSESS</div>
              <div className="text-muted-foreground">Infrastructure audit</div>
              <div className="text-muted-foreground">Diagnostic complete</div>
            </div>
            
            <div className="space-y-1">
              <div className="text-primary font-bold">02 BUILD</div>
              <div className="text-muted-foreground">System implementation</div>
              <div className="text-muted-foreground">Sprint execution</div>
            </div>
            
            <div className="space-y-1">
              <div className="text-primary font-bold">03 OPERATE</div>
              <div className="text-muted-foreground">Ongoing maintenance</div>
              <div className="text-muted-foreground">Performance monitoring</div>
            </div>
          </div>
        </div>
        
        {/* Status Indicators */}
        <div className="border-t border-border pt-3 mt-4">
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <div className="text-muted-foreground">UPTIME:</div>
              <div className="tabular-nums">99.97%</div>
            </div>
            <div className="space-y-1">
              <div className="text-muted-foreground">PIPELINE.HEALTH:</div>
              <div className="text-green-500 tabular-nums">OPTIMAL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDiagram;