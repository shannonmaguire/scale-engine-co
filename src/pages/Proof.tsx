import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Proof = () => {
  const caseStudies = [
    {
      id: "CS001",
      industry: "Gov Contractor",
      vertical: "Federal Compliance",
      challenge: "Scaling from ad-hoc projects to repeatable service delivery. No standardized processes, founder bottleneck in operations.",
      approach: [
        "Deployed fixed-scope service packages ($25K-$50K range)",
        "Architected compliance-aligned documentation system",
        "Installed GTM sprint targeting SaaS/GovTech segments", 
        "Implemented CRM + RevOps pipeline tracking"
      ],
      outcomes: [
        "Standardized service productization achieved",
        "Clear sales motion established for SaaS compliance market",
        "Founder extracted from delivery bottleneck",
        "Recurring revenue model operational"
      ],
      status: "DEPLOYED"
    },
    {
      id: "CS002", 
      industry: "Professional Services",
      vertical: "Legal Advisory",
      challenge: "High-trust, high-ticket work with no scalable backend. Needed transition from lawyer-led hustle to subscription revenue.",
      approach: [
        "Designed subscription architecture (tiers, deliverables, billing)",
        "Rebuilt client journey: funnels → onboarding → retention",
        "Installed revenue dashboard + partner reporting cadence",
        "Executed 90-day repositioning sprint"
      ],
      outcomes: [
        "Subscription model deployed with predictable MRR",
        "Category-defining market position established", 
        "Partners gained pipeline/profitability visibility",
        "Revenue predictability achieved"
      ],
      status: "OPTIMIZED"
    },
    {
      id: "CS003",
      industry: "Creator Economy",
      vertical: "Media + Education",
      challenge: "Strong audience reach, weak revenue infrastructure. No backend systems to convert followers into paying customers.",
      approach: [
        "Audited existing funnels, pricing, community mechanics",
        "Designed Revenue Sprint: growth roadmap + affiliate program",
        "Installed automation backbone: CRM, billing, analytics",
        "Trained internal team on GTM operations"
      ],
      outcomes: [
        "LTV increased via upsell flows + affiliate acquisition",
        "Audience converted from followers to paying members",
        "Operational system deployed to match creative output",
        "Founder bottleneck eliminated"
      ],
      status: "SCALED"
    },
    {
      id: "CS004",
      industry: "SaaS Startup",
      vertical: "Enterprise Software",
      challenge: "Strong product, zero GTM discipline. Brilliant engineering team, no revenue systems or market positioning clarity.",
      approach: [
        "Built ICP + GTM framework for enterprise/SMB segments",
        "Created outbound/inbound motion via Salesforce ecosystem",
        "Installed RevOps pipeline + early customer success loops",
        "Partnered on pricing architecture + packaging strategy"
      ],
      outcomes: [
        "First enterprise deals secured with clear positioning",
        "GTM risk removed from 'spray and pray' founder sales",
        "Repeatable SaaS revenue foundation established",
        "Revenue growth infrastructure operational"
      ],
      status: "DEPLOYED"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "DEPLOYED": return "bg-green-500/20 text-green-400";
      case "OPTIMIZED": return "bg-blue-500/20 text-blue-400";  
      case "SCALED": return "bg-purple-500/20 text-purple-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="console-grid mb-8">
            <div className="console-line">
              <span className="text-muted-foreground font-mono text-sm">SYSTEM STATUS</span>
              <Badge className="bg-green-500/20 text-green-400 font-mono">OPERATIONAL</Badge>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            Operational Proof Points
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl font-mono">
            Real system deployments. Quantified revenue impact. Operational excellence delivered.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="console-grid mb-12">
            <div className="console-line">
              <span className="text-muted-foreground font-mono text-sm">CASE STUDIES</span>
              <span className="font-mono text-sm">4 DEPLOYMENTS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="console-card h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm text-muted-foreground">{study.id}</span>
                    <Badge className={`font-mono text-xs ${getStatusColor(study.status)}`}>
                      {study.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{study.industry}</CardTitle>
                  <CardDescription className="font-mono text-sm">
                    {study.vertical}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-mono text-sm font-semibold text-destructive mb-2 uppercase tracking-wider">
                      Challenge
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                      Approach
                    </h4>
                    <ul className="space-y-1">
                      {study.approach.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <Target className="h-3 w-3 mt-0.5 flex-shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-sm font-semibold text-green-400 mb-2 uppercase tracking-wider">
                      Outcome
                    </h4>
                    <ul className="space-y-1">
                      {study.outcomes.map((outcome, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 mt-0.5 flex-shrink-0 text-green-400" />
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
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Deployment Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="console-card">
              <div className="p-6">
                <TrendingUp className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-mono text-lg font-semibold mb-2">Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  System audit, revenue analysis, operational bottleneck identification
                </p>
              </div>
            </div>
            <div className="console-card">
              <div className="p-6">
                <Zap className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-mono text-lg font-semibold mb-2">Sprint</h3>
                <p className="text-sm text-muted-foreground">
                  Rapid deployment, system installation, process optimization
                </p>
              </div>
            </div>
            <div className="console-card">
              <div className="p-6">
                <CheckCircle className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-mono text-lg font-semibold mb-2">Results</h3>
                <p className="text-sm text-muted-foreground">
                  Measurable impact, operational stability, revenue growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="console-grid mb-8">
            <div className="console-line justify-center">
              <Badge className="bg-primary/20 text-primary font-mono">
                SYSTEM READY
              </Badge>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">
            Ready to Deploy Your System?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 font-mono">
            Run a comprehensive assessment of your current operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-console">
              <Link to="/assessment">Run Assessment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-console-secondary">
              <Link to="/contact">Discuss Requirements</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proof;