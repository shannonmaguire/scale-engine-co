import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FileText, Target, AlertTriangle, CheckCircle, TrendingUp, ArrowRight, BarChart3 } from "lucide-react";

const SampleReport = () => {
  const scorecard = [
    { category: "Technology Stack", score: 6.2, status: "warning", issues: 3 },
    { category: "Data Quality", score: 4.1, status: "critical", issues: 5 },
    { category: "Process Governance", score: 7.8, status: "good", issues: 1 },
    { category: "Pipeline Management", score: 5.5, status: "warning", issues: 4 },
    { category: "Reporting & Analytics", score: 3.9, status: "critical", issues: 6 }
  ];

  const priorities = [
    {
      priority: 1,
      title: "Data Hygiene & Deduplication",
      impact: "High",
      effort: "Medium",
      timeline: "2-3 weeks",
      description: "Clean and standardize lead data, implement deduplication rules"
    },
    {
      priority: 2,
      title: "Lead Scoring Implementation", 
      impact: "High",
      effort: "Low",
      timeline: "1 week",
      description: "Deploy automated lead scoring to prioritize sales efforts"
    },
    {
      priority: 3,
      title: "Pipeline Stage Definitions",
      impact: "Medium",
      effort: "Low", 
      timeline: "1 week",
      description: "Standardize stage criteria and exit requirements"
    },
    {
      priority: 4,
      title: "Revenue Dashboard",
      impact: "Medium",
      effort: "Medium",
      timeline: "2 weeks",
      description: "Real-time visibility into pipeline health and forecasting"
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 7) return "text-secondary";
    if (score >= 5) return "text-accent";
    return "text-primary";
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "good": return "bg-secondary/20 text-secondary";
      case "warning": return "bg-accent/20 text-accent";
      case "critical": return "bg-primary/20 text-primary";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High": return "text-primary";
      case "Medium": return "text-accent";
      case "Low": return "text-secondary";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="blueprint-line mx-auto mb-4 w-fit">
            <span className="text-sm text-muted-foreground uppercase tracking-wide">Sample Report</span>
          </div>
          <h1 className="font-mono text-4xl lg:text-5xl font-bold mb-6">
            Revenue Infrastructure Assessment
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Example of what you receive after a complete infrastructure diagnostic. 
            Scorecard, benchmarks, and prioritized roadmap.
          </p>
        </div>

        {/* Report Header */}
        <section className="mb-16">
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-mono text-2xl mb-2">TechCorp SaaS - Assessment Results</CardTitle>
                  <p className="text-muted-foreground">Series B • $15M ARR • 85 employees</p>
                </div>
                <Badge className="bg-primary/20 text-primary font-mono">
                  COMPLETED
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">5.7</div>
                  <p className="text-sm text-muted-foreground">Overall Score</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">19</div>
                  <p className="text-sm text-muted-foreground">Issues Identified</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">90</div>
                  <p className="text-sm text-muted-foreground">Day Roadmap</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Scorecard */}
        <section className="mb-16">
          <h2 className="font-mono text-2xl font-bold mb-8">Infrastructure Scorecard</h2>
          <div className="space-y-4">
            {scorecard.map((item, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <h3 className="font-mono font-bold">{item.category}</h3>
                        <Badge className={`text-xs ${getStatusBadge(item.status)}`}>
                          {item.status.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${getScoreColor(item.score)}`}>
                          {item.score}/10
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {item.issues} issue{item.issues !== 1 ? 's' : ''}
                        </p>
                      </div>
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            item.score >= 7 ? 'bg-secondary' : 
                            item.score >= 5 ? 'bg-accent' : 'bg-primary'
                          }`}
                          style={{ width: `${(item.score / 10) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Priority Roadmap */}
        <section className="mb-16">
          <h2 className="font-mono text-2xl font-bold mb-8">90-Day Priority Roadmap</h2>
          <div className="space-y-6">
            {priorities.map((item, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {item.priority}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                        <h3 className="font-mono font-bold text-lg">{item.title}</h3>
                        <div className="flex gap-2">
                          <Badge className={`text-xs ${getImpactColor(item.impact)}`}>
                            {item.impact} Impact
                          </Badge>
                          <Badge className="text-xs bg-muted text-muted-foreground">
                            {item.effort} Effort
                          </Badge>
                          <Badge className="text-xs bg-primary/20 text-primary">
                            {item.timeline}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Findings */}
        <section className="mb-16">
          <h2 className="font-mono text-2xl font-bold mb-8">Key Findings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <AlertTriangle className="w-5 h-5" />
                  Critical Issues
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-sm">47% of leads lack proper attribution data</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-sm">No automated lead scoring or qualification</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-sm">Pipeline stages lack clear exit criteria</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <CheckCircle className="w-5 h-5" />
                  Strengths
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <p className="text-sm">Strong technology stack foundation</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <p className="text-sm">Good process documentation in place</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <p className="text-sm">Team aligned on revenue goals</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-mono text-2xl font-bold mb-6">Executive Summary</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Current State:</strong> TechCorp has solid technology foundations but significant 
                data quality and process gaps that are limiting scale efficiency. The team is capable 
                but lacks clear operational frameworks.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Primary Risk:</strong> Without data hygiene improvements, continued growth will 
                compound existing inefficiencies. Sales team productivity is 40% below benchmark due to 
                manual processes and unclear lead qualification.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Recommendation:</strong> Implement the 4-phase roadmap over 90 days. Expected 
                outcome: 25-30% improvement in sales efficiency and 50% reduction in manual processes.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-card border border-border rounded-lg p-8">
            <FileText className="w-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="font-mono text-2xl font-bold mb-4">
              Get Your Own Assessment
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              This is what clarity looks like. See exactly where your revenue system 
              needs attention and get a prioritized plan to fix it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-console">
                <Link to="/contact">
                  Book Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleReport;