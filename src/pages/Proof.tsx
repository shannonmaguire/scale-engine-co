import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Target, Zap, DollarSign, Clock, Users, BarChart3, LineChart, Activity } from "lucide-react";
import { Link } from "react-router-dom";
const Proof = () => {
  const caseStudies = [{
    id: "CS001",
    industry: "Gov Contractor",
    vertical: "Federal Compliance",
    impact: "$2.5M ARR",
    metric: "250% Growth",
    timeline: "90 Days",
    challenge: "Scaling from ad-hoc projects to repeatable service delivery with no standardized processes.",
    approach: ["Deployed fixed-scope service packages ($25K-$50K range)", "Architected compliance-aligned documentation system", "Installed GTM sprint targeting SaaS/GovTech segments", "Implemented CRM + RevOps pipeline tracking"],
    outcomes: ["Standardized service productization achieved", "Clear sales motion established for SaaS compliance market", "Founder extracted from delivery bottleneck", "Recurring revenue model operational"],
    status: "DEPLOYED"
  }, {
    id: "CS002",
    industry: "Professional Services",
    vertical: "Legal Advisory",
    impact: "$480K MRR",
    metric: "340% Growth",
    timeline: "120 Days",
    challenge: "High-trust, high-ticket work with no scalable backend requiring transition to subscription revenue.",
    approach: ["Designed subscription architecture (tiers, deliverables, billing)", "Rebuilt client journey: funnels → onboarding → retention", "Installed revenue dashboard + partner reporting cadence", "Executed 90-day repositioning sprint"],
    outcomes: ["Subscription model deployed with predictable MRR", "Category-defining market position established", "Partners gained pipeline/profitability visibility", "Revenue predictability achieved"],
    status: "OPTIMIZED"
  }, {
    id: "CS003",
    industry: "Creator Economy",
    vertical: "Media + Education",
    impact: "$1.8M ARR",
    metric: "520% Growth",
    timeline: "150 Days",
    challenge: "Strong audience reach with weak revenue infrastructure and no backend systems to convert followers.",
    approach: ["Audited existing funnels, pricing, community mechanics", "Designed Revenue Sprint: growth roadmap + affiliate program", "Installed automation backbone: CRM, billing, analytics", "Trained internal team on GTM operations"],
    outcomes: ["LTV increased via upsell flows + affiliate acquisition", "Audience converted from followers to paying members", "Operational system deployed to match creative output", "Founder bottleneck eliminated"],
    status: "SCALED"
  }, {
    id: "CS004",
    industry: "SaaS Startup",
    vertical: "Enterprise Software",
    impact: "$3.2M ARR",
    metric: "420% Growth",
    timeline: "180 Days",
    challenge: "Strong product with zero GTM discipline and no revenue systems or market positioning clarity.",
    approach: ["Built ICP + GTM framework for enterprise/SMB segments", "Created outbound/inbound motion via Salesforce ecosystem", "Installed RevOps pipeline + early customer success loops", "Partnered on pricing architecture + packaging strategy"],
    outcomes: ["First enterprise deals secured with clear positioning", "GTM risk removed from 'spray and pray' founder sales", "Repeatable SaaS revenue foundation established", "Revenue growth infrastructure operational"],
    status: "DEPLOYED"
  }];

  const aggregateMetrics = [
    { value: "$8.0M+", label: "Total ARR Impact", icon: DollarSign },
    { value: "383%", label: "Avg Growth Rate", icon: TrendingUp },
    { value: "135", label: "Avg Deploy Days", icon: Clock },
    { value: "100%", label: "Success Rate", icon: Activity }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "DEPLOYED":
        return "bg-accent/20 text-accent border-accent/30";
      case "OPTIMIZED":
        return "bg-yellow-500/20 text-yellow-600 border-yellow-500/30";
      case "SCALED":
        return "bg-primary/20 text-primary border-primary/30";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 console-grid opacity-5"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="mb-8">
            <Badge className="system-badge bg-accent/20 text-accent border-accent/30 font-mono mb-6">
              <Activity className="w-3 h-3 mr-2" />
              SYSTEM OPERATIONAL
            </Badge>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-mono font-bold mb-6 tracking-tight text-foreground">
            Operational Proof Points
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl font-sans">
            Real system deployments delivering quantified revenue impact and operational excellence across multiple verticals.
          </p>
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {aggregateMetrics.map((metric, index) => (
              <div key={index} className="stat-block console-card rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <metric.icon className="w-5 h-5 text-primary" />
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                </div>
                <div className="stat-number text-foreground">{metric.value}</div>
                <div className="stat-label text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 bg-muted/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="blueprint-line mb-4">
              <h2 className="text-3xl lg:text-4xl font-mono font-bold text-foreground">Case Studies</h2>
            </div>
            <p className="text-lg text-muted-foreground font-mono">4 Successful System Deployments</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="console-card border-border bg-card hover:shadow-lg transition-all duration-300 h-full group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`system-badge ${getStatusColor(study.status)} font-mono text-xs`}>
                      {study.status}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground font-mono">{study.timeline}</span>
                    </div>
                  </div>
                  
                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/10 rounded-lg border border-border/50">
                    <div className="text-center">
                      <div className="text-xl font-mono font-bold text-foreground tabular-nums">{study.impact}</div>
                      <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Revenue Impact</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-mono font-bold text-primary tabular-nums">{study.metric}</div>
                      <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Growth Rate</div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-mono text-foreground group-hover:text-primary transition-colors">
                    {study.industry}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground font-mono text-sm">
                    {study.vertical}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-mono font-semibold text-sm text-destructive mb-3 uppercase tracking-wider blueprint-line">
                      Challenge
                    </h4>
                    <p className="text-sm text-foreground leading-relaxed font-sans">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono font-semibold text-sm text-primary mb-3 uppercase tracking-wider blueprint-line">
                      Solution
                    </h4>
                    <ul className="space-y-2">
                      {study.approach.map((item, idx) => (
                        <li key={idx} className="text-sm text-foreground flex items-start gap-3 font-sans">
                          <Target className="h-3 w-3 mt-1 flex-shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono font-semibold text-sm text-accent mb-3 uppercase tracking-wider blueprint-line">
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {study.outcomes.map((outcome, idx) => (
                        <li key={idx} className="text-sm text-foreground flex items-start gap-3 font-sans">
                          <CheckCircle className="h-3 w-3 mt-1 flex-shrink-0 text-accent" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Methodology */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="blueprint-line mb-4">
              <h2 className="text-3xl lg:text-4xl font-mono font-bold text-foreground">Deployment Methodology</h2>
            </div>
            <p className="text-lg text-muted-foreground font-mono">Proven 3-Phase System</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="console-card bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-mono font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                01. Assessment
              </h3>
              <p className="text-muted-foreground leading-relaxed font-sans">
                System audit, revenue analysis, and operational bottleneck identification
              </p>
            </div>
            
            <div className="console-card bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-mono font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                02. Sprint
              </h3>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Rapid deployment, system installation, and process optimization
              </p>
            </div>
            
            <div className="console-card bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-destructive/10 flex items-center justify-center border border-destructive/20">
                <CheckCircle className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-mono font-bold mb-4 text-foreground group-hover:text-destructive transition-colors">
                03. Results
              </h3>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Measurable impact, operational stability, and sustained revenue growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <Badge className="system-badge bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 font-mono mb-6">
            <BarChart3 className="w-3 h-3 mr-2" />
            SYSTEM READY
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-mono font-bold mb-6 text-primary-foreground">
            Ready to Deploy Your System?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-sans">
            Run a comprehensive assessment of your current operations and discover your growth potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-console bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/assessment">
                <LineChart className="w-4 h-4 mr-2" />
                Run Assessment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-console-secondary border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">
                <Users className="w-4 h-4 mr-2" />
                Discuss Requirements
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Proof;