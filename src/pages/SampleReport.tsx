import { Button } from "@/components/ui/button";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle, TrendingUp, TrendingDown, DollarSign, Clock, Users, Database, Zap, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";
const SampleReport = () => {
  const scorecard = [{
    category: "Technology Stack",
    score: 6.2,
    status: "warning",
    issues: 3,
    benchmark: 7.5,
    details: "Salesforce implementation solid but underutilized. 23% of available features active.",
    subScores: [
      { name: "CRM Configuration", score: 7.2 },
      { name: "Integration Health", score: 5.8 },
      { name: "Automation Coverage", score: 5.6 }
    ]
  }, {
    category: "Data Quality",
    score: 4.1,
    status: "critical",
    issues: 5,
    benchmark: 8.2,
    details: "47% of records missing critical fields. $2.3M pipeline affected by data gaps.",
    subScores: [
      { name: "Data Completeness", score: 3.8 },
      { name: "Deduplication", score: 4.2 },
      { name: "Standardization", score: 4.4 }
    ]
  }, {
    category: "Process Governance",
    score: 7.8,
    status: "good",
    issues: 1,
    benchmark: 7.9,
    details: "Strong process documentation. Minor gaps in approval workflows.",
    subScores: [
      { name: "Documentation", score: 8.5 },
      { name: "Compliance", score: 7.8 },
      { name: "Change Management", score: 7.1 }
    ]
  }, {
    category: "Pipeline Management",
    score: 5.5,
    status: "warning",
    issues: 4,
    benchmark: 8.1,
    details: "Stage definitions unclear. 62% of deals lack proper qualification criteria.",
    subScores: [
      { name: "Stage Definition", score: 4.9 },
      { name: "Forecasting Accuracy", score: 5.7 },
      { name: "Velocity Tracking", score: 6.0 }
    ]
  }, {
    category: "Reporting & Analytics",
    score: 3.9,
    status: "critical",
    issues: 6,
    benchmark: 8.3,
    details: "Manual reporting consuming 15 hrs/week. No real-time dashboards.",
    subScores: [
      { name: "Dashboard Coverage", score: 3.2 },
      { name: "Data Accessibility", score: 4.1 },
      { name: "Insight Velocity", score: 4.4 }
    ]
  }, {
    category: "Team Enablement",
    score: 6.8,
    status: "warning",
    issues: 2,
    benchmark: 7.7,
    details: "Good training materials but inconsistent adoption across reps.",
    subScores: [
      { name: "Training Programs", score: 7.5 },
      { name: "Tool Adoption", score: 6.2 },
      { name: "Performance Support", score: 6.7 }
    ]
  }];
  const priorities = [{
    priority: 1,
    title: "Data Hygiene & Deduplication",
    impact: "High",
    effort: "Medium",
    timeline: "2-3 weeks",
    description: "Clean and standardize lead data, implement deduplication rules",
    roi: "$180K annual impact",
    metrics: ["Reduce duplicate records by 85%", "Improve data completeness to 95%", "Save 8 hrs/week in manual cleanup"]
  }, {
    priority: 2,
    title: "Lead Scoring Implementation",
    impact: "High",
    effort: "Low",
    timeline: "1 week",
    description: "Deploy automated lead scoring to prioritize sales efforts",
    roi: "$240K annual impact",
    metrics: ["Increase conversion rate by 18%", "Reduce time-to-qualification by 40%", "Focus top reps on best opportunities"]
  }, {
    priority: 3,
    title: "Pipeline Stage Definitions",
    impact: "Medium",
    effort: "Low",
    timeline: "1 week",
    description: "Standardize stage criteria and exit requirements",
    roi: "$95K annual impact",
    metrics: ["Improve forecast accuracy to 92%", "Reduce stage slippage by 35%", "Standardize qualification criteria"]
  }, {
    priority: 4,
    title: "Revenue Dashboard",
    impact: "Medium",
    effort: "Medium",
    timeline: "2 weeks",
    description: "Real-time visibility into pipeline health and forecasting",
    roi: "$125K annual impact",
    metrics: ["Eliminate 15 hrs/week of manual reporting", "Real-time alerts on at-risk deals", "Executive visibility in seconds"]
  }, {
    priority: 5,
    title: "Automated Workflow Engine",
    impact: "High",
    effort: "Medium",
    timeline: "3 weeks",
    description: "Deploy intelligent automation for repetitive tasks and handoffs",
    roi: "$210K annual impact",
    metrics: ["Automate 12 manual processes", "Reduce human error by 78%", "Free 22 hrs/week of rep time"]
  }, {
    priority: 6,
    title: "Integration Hub",
    impact: "Medium",
    effort: "High",
    timeline: "4 weeks",
    description: "Connect critical systems for seamless data flow and single source of truth",
    roi: "$165K annual impact",
    metrics: ["Connect 6 critical systems", "Eliminate double-entry", "Enable 360° customer view"]
  }];
  const getScoreColor = (score: number) => {
    if (score >= 7) return "text-secondary";
    if (score >= 5) return "text-accent";
    return "text-primary";
  };
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "good":
        return "bg-secondary/20 text-secondary";
      case "warning":
        return "bg-accent/20 text-accent";
      case "critical":
        return "bg-primary/20 text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "text-primary";
      case "Medium":
        return "text-accent";
      case "Low":
        return "text-secondary";
      default:
        return "text-muted-foreground";
    }
  };
  return <div className="min-h-screen">
      <SEOHead
        title="Sample Automation & Salesforce Assessment Report | CWT Studio"
        description="Preview a Creator Wealth Tools assessment showcasing how we evaluate business automation, Salesforce health, and product readiness across web and mobile stacks."
        keywords={[
          'business automation sample report',
          'Salesforce assessment example',
          'Creator Wealth Tools scorecard',
          'revenue operations audit template',
          'web and mobile readiness report'
        ]}
        canonicalUrl="/sample-report"
      />
      <Section>
        {/* Hero */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="system-status mb-6">
            ASSESSMENT COMPLETE
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
        <div className="mt-16">
          <StandardCard>
            <StandardCardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <StandardCardTitle className="font-mono text-2xl mb-2">TechCorp SaaS - Assessment Results</StandardCardTitle>
                  <p className="text-muted-foreground">Series B • $15M ARR • 85 employees</p>
                </div>
                <Badge className="bg-primary/20 text-primary font-mono">
                  COMPLETED
                </Badge>
              </div>
            </StandardCardHeader>
            <StandardCardContent>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">5.9</div>
                  <p className="text-sm text-muted-foreground">Overall Score</p>
                  <p className="text-xs text-primary mt-1">vs 7.9 benchmark</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">21</div>
                  <p className="text-sm text-muted-foreground">Issues Identified</p>
                  <p className="text-xs text-muted-foreground mt-1">across 6 categories</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">$1.02M</div>
                  <p className="text-sm text-muted-foreground">Annual ROI</p>
                  <p className="text-xs text-secondary mt-1">projected impact</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">90</div>
                  <p className="text-sm text-muted-foreground">Day Roadmap</p>
                  <p className="text-xs text-muted-foreground mt-1">6 priority phases</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">47%</div>
                  <p className="text-sm text-muted-foreground">Efficiency Gap</p>
                  <p className="text-xs text-primary mt-1">vs industry leaders</p>
                </div>
              </div>
            </StandardCardContent>
          </StandardCard>
        </div>

        {/* Scorecard */}
        <div className="mt-16">
          <h2 className="font-mono text-2xl font-bold mb-8">Infrastructure Scorecard</h2>
          <div className="space-y-6">
            {scorecard.map((item, index) => <StandardCard key={index}>
                <StandardCardContent className="!pt-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="font-mono font-bold text-lg">{item.category}</h3>
                        <Badge className={`text-xs ${getStatusBadge(item.status)}`}>
                          {item.status.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{item.details}</p>
                      <div className="grid grid-cols-3 gap-3">
                        {item.subScores.map((sub, idx) => <div key={idx} className="text-center p-2 bg-muted/30 rounded">
                            <div className={`text-lg font-bold ${getScoreColor(sub.score)}`}>{sub.score}</div>
                            <div className="text-xs text-muted-foreground mt-1">{sub.name}</div>
                          </div>)}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 min-w-[140px]">
                      <div className={`text-4xl font-bold ${getScoreColor(item.score)}`}>
                        {item.score}<span className="text-lg text-muted-foreground">/10</span>
                      </div>
                      <div className="text-right mb-2">
                        <p className="text-xs text-muted-foreground">Benchmark: {item.benchmark}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {item.score < item.benchmark ? <TrendingDown className="w-3 h-3 text-primary" /> : <TrendingUp className="w-3 h-3 text-secondary" />}
                          <span className={`text-xs font-medium ${item.score < item.benchmark ? 'text-primary' : 'text-secondary'}`}>
                            {Math.abs(item.benchmark - item.score).toFixed(1)} gap
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${item.score >= 7 ? 'bg-secondary' : item.score >= 5 ? 'bg-accent' : 'bg-primary'}`} style={{
                      width: `${item.score / 10 * 100}%`
                    }} />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {item.issues} issue{item.issues !== 1 ? 's' : ''} identified
                      </p>
                    </div>
                  </div>
                </StandardCardContent>
              </StandardCard>)}
          </div>
        </div>

        {/* Priority Roadmap */}
        <div className="mt-16">
          <h2 className="font-mono text-2xl font-bold mb-8">90-Day Priority Roadmap</h2>
          <div className="space-y-6">
            {priorities.map((item, index) => <StandardCard key={index}>
                <StandardCardContent className="!pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {item.priority}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-mono font-bold text-lg mb-2">{item.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            <Badge className={`text-xs ${getImpactColor(item.impact)} bg-transparent border`}>
                              {item.impact} Impact
                            </Badge>
                            <Badge className="text-xs bg-muted text-muted-foreground">
                              {item.effort} Effort
                            </Badge>
                            <Badge className="text-xs bg-primary/20 text-primary flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {item.timeline}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 lg:min-w-[140px] lg:justify-end">
                          <DollarSign className="w-4 h-4 text-secondary" />
                          <span className="font-bold text-secondary text-lg">{item.roi}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="space-y-2 pl-4 border-l-2 border-muted">
                        {item.metrics.map((metric, idx) => <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{metric}</span>
                          </div>)}
                      </div>
                    </div>
                  </div>
                </StandardCardContent>
              </StandardCard>)}
          </div>
        </div>

        {/* Financial Impact Analysis */}
        <div className="mt-16">
          <h2 className="font-mono text-2xl font-bold mb-8">Financial Impact Analysis</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <StandardCard>
              <StandardCardContent className="!pt-6 text-center">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">$2.3M</div>
                <p className="text-sm text-muted-foreground mb-1">At-Risk Pipeline</p>
                <p className="text-xs text-muted-foreground">Due to data quality issues</p>
              </StandardCardContent>
            </StandardCard>
            <StandardCard>
              <StandardCardContent className="!pt-6 text-center">
                <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="text-3xl font-bold text-secondary mb-2">$1.02M</div>
                <p className="text-sm text-muted-foreground mb-1">Annual ROI</p>
                <p className="text-xs text-muted-foreground">From implementing roadmap</p>
              </StandardCardContent>
            </StandardCard>
            <StandardCard>
              <StandardCardContent className="!pt-6 text-center">
                <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-accent mb-2">45 hrs</div>
                <p className="text-sm text-muted-foreground mb-1">Weekly Time Saved</p>
                <p className="text-xs text-muted-foreground">Across revenue team</p>
              </StandardCardContent>
            </StandardCard>
          </div>
        </div>

        {/* Technology Stack Analysis */}
        <div className="mt-16">
          <h2 className="font-mono text-2xl font-bold mb-8">Technology Stack Analysis</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <StandardCard>
              <StandardCardHeader>
                <StandardCardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary" />
                  Current Stack
                </StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Salesforce Sales Cloud</span>
                    <Badge className="text-xs bg-secondary/20 text-secondary">Active</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">Utilization: 23% • Health: Good • Version: Enterprise</div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">HubSpot Marketing</span>
                    <Badge className="text-xs bg-accent/20 text-accent">Partial</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">Utilization: 45% • Health: Warning • Integration: Limited</div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Gong.io</span>
                    <Badge className="text-xs bg-secondary/20 text-secondary">Active</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">Utilization: 78% • Health: Excellent • Data: Not synced</div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Outreach.io</span>
                    <Badge className="text-xs bg-primary/20 text-primary">Issues</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">Utilization: 34% • Health: Critical • Integration: Broken</div>
                </div>
              </StandardCardContent>
            </StandardCard>

            <StandardCard>
              <StandardCardHeader>
                <StandardCardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  Integration Gaps
                </StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Salesforce ↔ Marketing Automation</p>
                    <p className="text-xs text-muted-foreground mt-1">Manual data entry creating 18-hour weekly burden</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Gong ↔ Salesforce</p>
                    <p className="text-xs text-muted-foreground mt-1">Call insights not flowing to CRM records</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">BI Tool Connection</p>
                    <p className="text-xs text-muted-foreground mt-1">No direct reporting pipeline, manual exports</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">CPQ System</p>
                    <p className="text-xs text-muted-foreground mt-1">Quote generation disconnected from pipeline</p>
                  </div>
                </div>
              </StandardCardContent>
            </StandardCard>
          </div>
        </div>

        {/* Key Findings */}
        <div className="mt-16">
          <h2 className="font-mono text-2xl font-bold mb-8">Detailed Findings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <StandardCard>
              <StandardCardHeader>
                <StandardCardTitle className="flex items-center gap-2 text-primary">
                  <AlertTriangle className="w-5 h-5" />
                  Critical Issues (High Priority)
                </StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent className="space-y-4">
                <div className="border-l-2 border-primary pl-3">
                  <p className="text-sm font-medium mb-1">Data Quality Crisis</p>
                  <p className="text-xs text-muted-foreground">47% of leads lack proper attribution data. 12,300+ duplicate records. $2.3M pipeline affected.</p>
                </div>
                <div className="border-l-2 border-primary pl-3">
                  <p className="text-sm font-medium mb-1">No Lead Scoring</p>
                  <p className="text-xs text-muted-foreground">Reps manually evaluating every lead. 40% of time wasted on unqualified prospects.</p>
                </div>
                <div className="border-l-2 border-primary pl-3">
                  <p className="text-sm font-medium mb-1">Pipeline Stage Confusion</p>
                  <p className="text-xs text-muted-foreground">No clear exit criteria. 62% of deals lack proper qualification. Forecast accuracy at 73%.</p>
                </div>
                <div className="border-l-2 border-primary pl-3">
                  <p className="text-sm font-medium mb-1">Manual Reporting Burden</p>
                  <p className="text-xs text-muted-foreground">15 hours weekly spent on manual reports. No real-time dashboards. Insights lag by 3-5 days.</p>
                </div>
                <div className="border-l-2 border-accent pl-3">
                  <p className="text-sm font-medium mb-1">Integration Failures</p>
                  <p className="text-xs text-muted-foreground">4 broken integrations. Double-entry in 6 workflows. Data sync errors weekly.</p>
                </div>
              </StandardCardContent>
            </StandardCard>

            <StandardCard>
              <StandardCardHeader>
                <StandardCardTitle className="flex items-center gap-2 text-secondary">
                  <CheckCircle className="w-5 h-5" />
                  Strengths & Opportunities
                </StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent className="space-y-4">
                <div className="border-l-2 border-secondary pl-3">
                  <p className="text-sm font-medium mb-1">Strong Technology Foundation</p>
                  <p className="text-xs text-muted-foreground">Salesforce Enterprise properly configured. Good bones for automation expansion.</p>
                </div>
                <div className="border-l-2 border-secondary pl-3">
                  <p className="text-sm font-medium mb-1">Excellent Process Documentation</p>
                  <p className="text-xs text-muted-foreground">Well-documented workflows and SOPs. Easy to scale once tech is optimized.</p>
                </div>
                <div className="border-l-2 border-secondary pl-3">
                  <p className="text-sm font-medium mb-1">Team Alignment</p>
                  <p className="text-xs text-muted-foreground">Leadership and reps aligned on revenue goals. High adoption readiness.</p>
                </div>
                <div className="border-l-2 border-secondary pl-3">
                  <p className="text-sm font-medium mb-1">Data-Driven Culture</p>
                  <p className="text-xs text-muted-foreground">Team values metrics and wants better insights. Low resistance to change.</p>
                </div>
                <div className="border-l-2 border-secondary pl-3">
                  <p className="text-sm font-medium mb-1">Quick Win Potential</p>
                  <p className="text-xs text-muted-foreground">Several high-impact, low-effort improvements identified. Can show ROI in 30 days.</p>
                </div>
              </StandardCardContent>
            </StandardCard>
          </div>
        </div>

        {/* Risk Matrix */}
        <div className="mt-16">
          <h2 className="font-mono text-2xl font-bold mb-8">Risk Assessment</h2>
          <StandardCard>
            <StandardCardContent className="!pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <h3 className="font-mono font-bold">High Risk</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="p-3 bg-primary/10 border border-primary/20 rounded">
                      <p className="text-sm font-medium mb-1">Data Integrity</p>
                      <p className="text-xs text-muted-foreground">Poor data quality will compound with scale</p>
                    </div>
                    <div className="p-3 bg-primary/10 border border-primary/20 rounded">
                      <p className="text-sm font-medium mb-1">Rep Productivity</p>
                      <p className="text-xs text-muted-foreground">40% efficiency loss vs benchmark</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <h3 className="font-mono font-bold">Medium Risk</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="p-3 bg-accent/10 border border-accent/20 rounded">
                      <p className="text-sm font-medium mb-1">Forecast Accuracy</p>
                      <p className="text-xs text-muted-foreground">73% accuracy creates planning issues</p>
                    </div>
                    <div className="p-3 bg-accent/10 border border-accent/20 rounded">
                      <p className="text-sm font-medium mb-1">Tool Adoption</p>
                      <p className="text-xs text-muted-foreground">Low utilization of available features</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-secondary" />
                    <h3 className="font-mono font-bold">Low Risk</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="p-3 bg-secondary/10 border border-secondary/20 rounded">
                      <p className="text-sm font-medium mb-1">Team Readiness</p>
                      <p className="text-xs text-muted-foreground">High willingness to adopt changes</p>
                    </div>
                    <div className="p-3 bg-secondary/10 border border-secondary/20 rounded">
                      <p className="text-sm font-medium mb-1">Infrastructure</p>
                      <p className="text-xs text-muted-foreground">Solid foundation to build upon</p>
                    </div>
                  </div>
                </div>
              </div>
            </StandardCardContent>
          </StandardCard>
        </div>

        {/* Benchmarking */}
        <div className="mt-16">
          <h2 className="font-mono text-2xl font-bold mb-8">Industry Benchmarking</h2>
          <StandardCard>
            <StandardCardContent className="!pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-mono text-sm">Metric</th>
                      <th className="text-center py-3 px-4 font-mono text-sm">TechCorp</th>
                      <th className="text-center py-3 px-4 font-mono text-sm">Industry Avg</th>
                      <th className="text-center py-3 px-4 font-mono text-sm">Top Quartile</th>
                      <th className="text-center py-3 px-4 font-mono text-sm">Gap</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-sm">Lead Response Time</td>
                      <td className="text-center py-3 px-4 text-sm">4.2 hrs</td>
                      <td className="text-center py-3 px-4 text-sm">2.1 hrs</td>
                      <td className="text-center py-3 px-4 text-sm text-secondary font-medium">0.5 hrs</td>
                      <td className="text-center py-3 px-4 text-sm text-primary">-87%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-sm">Data Completeness</td>
                      <td className="text-center py-3 px-4 text-sm">53%</td>
                      <td className="text-center py-3 px-4 text-sm">82%</td>
                      <td className="text-center py-3 px-4 text-sm text-secondary font-medium">95%</td>
                      <td className="text-center py-3 px-4 text-sm text-primary">-44%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-sm">Sales Cycle Length</td>
                      <td className="text-center py-3 px-4 text-sm">89 days</td>
                      <td className="text-center py-3 px-4 text-sm">67 days</td>
                      <td className="text-center py-3 px-4 text-sm text-secondary font-medium">45 days</td>
                      <td className="text-center py-3 px-4 text-sm text-primary">-49%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-sm">Win Rate</td>
                      <td className="text-center py-3 px-4 text-sm">18%</td>
                      <td className="text-center py-3 px-4 text-sm">24%</td>
                      <td className="text-center py-3 px-4 text-sm text-secondary font-medium">35%</td>
                      <td className="text-center py-3 px-4 text-sm text-primary">-49%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 text-sm">Forecast Accuracy</td>
                      <td className="text-center py-3 px-4 text-sm">73%</td>
                      <td className="text-center py-3 px-4 text-sm">85%</td>
                      <td className="text-center py-3 px-4 text-sm text-secondary font-medium">92%</td>
                      <td className="text-center py-3 px-4 text-sm text-accent">-21%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm">Rep Quota Attainment</td>
                      <td className="text-center py-3 px-4 text-sm">64%</td>
                      <td className="text-center py-3 px-4 text-sm">78%</td>
                      <td className="text-center py-3 px-4 text-sm text-secondary font-medium">89%</td>
                      <td className="text-center py-3 px-4 text-sm text-primary">-28%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </StandardCardContent>
          </StandardCard>
        </div>

        {/* Executive Summary */}
        <div className="mt-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-mono text-2xl font-bold mb-6">Executive Summary</h2>
            <div className="prose prose-gray max-w-none space-y-6">
              <div>
                <p className="text-sm font-mono text-primary mb-2">CURRENT STATE</p>
                <p className="text-muted-foreground leading-relaxed">
                  TechCorp has built solid technology foundations with Salesforce Enterprise and complementary tools, 
                  but is significantly underutilizing these investments (23% feature adoption). Critical data quality 
                  issues affect $2.3M in pipeline, while manual processes consume 45+ hours weekly across the revenue 
                  team. The organization shows strong process documentation and team alignment, creating an excellent 
                  foundation for rapid improvement.
                </p>
              </div>
              
              <div>
                <p className="text-sm font-mono text-primary mb-2">PRIMARY RISKS</p>
                <p className="text-muted-foreground leading-relaxed">
                  Without immediate data hygiene improvements, continued growth will compound existing inefficiencies 
                  at scale. Current state represents a 47% efficiency gap versus industry leaders: sales team productivity 
                  is 40% below benchmark, forecast accuracy stands at 73% (vs 92% top quartile), and lead response times 
                  are 8x slower than best-in-class. These gaps translate to approximately $2.3M at-risk pipeline and 
                  significant competitive disadvantage in fast-moving deals.
                </p>
              </div>

              <div>
                <p className="text-sm font-mono text-primary mb-2">OPPORTUNITY</p>
                <p className="text-muted-foreground leading-relaxed">
                  The combination of strong foundations and clear gaps creates exceptional ROI potential. Six prioritized 
                  initiatives over 90 days can deliver $1.02M in annual value through efficiency gains, productivity 
                  improvements, and pipeline acceleration. The team\'s high readiness for change and data-driven culture 
                  significantly de-risk implementation.
                </p>
              </div>
              
              <div>
                <p className="text-sm font-mono text-primary mb-2">RECOMMENDATION</p>
                <p className="text-muted-foreground leading-relaxed">
                  Implement the 6-phase roadmap over 90 days, sequenced to deliver quick wins while building toward 
                  sustainable infrastructure improvements. Expected outcomes: 30-35% improvement in sales efficiency, 
                  60% reduction in manual processes, forecast accuracy improvement to 90%+, and 25% reduction in 
                  sales cycle length. First-phase ROI positive within 30 days. Full roadmap payback in 4.2 months.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded">
                    <div className="text-2xl font-bold text-secondary">$1.02M</div>
                    <div className="text-xs text-muted-foreground mt-1">Annual ROI</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded">
                    <div className="text-2xl font-bold text-accent">90 Days</div>
                    <div className="text-xs text-muted-foreground mt-1">Implementation</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded">
                    <div className="text-2xl font-bold text-primary">4.2 Mo</div>
                    <div className="text-xs text-muted-foreground mt-1">Payback Period</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded">
                    <div className="text-2xl font-bold text-secondary">35%</div>
                    <div className="text-xs text-muted-foreground mt-1">Efficiency Gain</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <StandardCard>
            <StandardCardContent className="!pt-8 !pb-8">
              <div className="system-status mb-4">READY TO IMPLEMENT</div>
              <h2 className="font-mono text-2xl font-bold mb-4">Get Your Custom Assessment</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                This is an example report. Your assessment will be customized to your specific 
                infrastructure, challenges, and growth goals.
              </p>
              <Button asChild size="lg" className="btn-console">
                <Link to="/contact">Book Your Assessment</Link>
              </Button>
            </StandardCardContent>
          </StandardCard>
        </div>
      </Section>
    </div>;
};
export default SampleReport;
