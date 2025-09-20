import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Target, Zap, DollarSign, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Proof = () => {
  const caseStudies = [
    {
      id: "CS001",
      industry: "Gov Contractor",
      vertical: "Federal Compliance",
      impact: "$2.5M ARR",
      metric: "250% Growth",
      timeline: "90 Days",
      challenge: "Scaling from ad-hoc projects to repeatable service delivery with no standardized processes.",
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
      impact: "$480K MRR",
      metric: "340% Growth",
      timeline: "120 Days",
      challenge: "High-trust, high-ticket work with no scalable backend requiring transition to subscription revenue.",
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
      impact: "$1.8M ARR",
      metric: "520% Growth",
      timeline: "150 Days",
      challenge: "Strong audience reach with weak revenue infrastructure and no backend systems to convert followers.",
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
      impact: "$3.2M ARR",
      metric: "420% Growth",
      timeline: "180 Days",
      challenge: "Strong product with zero GTM discipline and no revenue systems or market positioning clarity.",
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
      case "DEPLOYED": return "bg-green-500/20 text-green-500";
      case "OPTIMIZED": return "bg-yellow-500/20 text-yellow-600";  
      case "SCALED": return "bg-blue-500/20 text-blue-500";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Badge className="bg-green-500/20 text-green-500 font-mono mb-6">
              SYSTEM OPERATIONAL
            </Badge>
          </div>
          
          <h1 className="text-5xl font-bold mb-6 tracking-tight text-gray-900">
            Operational Proof Points
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">
            Real system deployments delivering quantified revenue impact and operational excellence.
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border rounded-lg p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="h-6 w-6 text-primary mr-2" />
                <span className="text-2xl font-bold text-gray-900">$10.0M+</span>
              </div>
              <p className="text-sm text-gray-600">Total ARR Generated</p>
            </div>
            <div className="bg-white border rounded-lg p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-primary mr-2" />
                <span className="text-2xl font-bold text-gray-900">382%</span>
              </div>
              <p className="text-sm text-gray-600">Average Growth Rate</p>
            </div>
            <div className="bg-white border rounded-lg p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-primary mr-2" />
                <span className="text-2xl font-bold text-gray-900">135</span>
              </div>
              <p className="text-sm text-gray-600">Days Average Deploy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <p className="text-lg text-gray-600">4 Successful System Deployments</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`text-xs font-semibold ${getStatusColor(study.status)}`}>
                      {study.status}
                    </Badge>
                    <span className="text-sm text-gray-500 font-mono">{study.timeline}</span>
                  </div>
                  
                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-900">{study.impact}</div>
                      <div className="text-xs text-gray-600">Revenue Impact</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">{study.metric}</div>
                      <div className="text-xs text-gray-600">Growth Rate</div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl text-gray-900">{study.industry}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {study.vertical}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-5">
                  <div>
                    <h4 className="font-semibold text-sm text-red-600 mb-2 uppercase tracking-wider">
                      Challenge
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-2 uppercase tracking-wider">
                      Solution
                    </h4>
                    <ul className="space-y-2">
                      {study.approach.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                          <Target className="h-3 w-3 mt-0.5 flex-shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-green-600 mb-2 uppercase tracking-wider">
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {study.outcomes.map((outcome, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 mt-0.5 flex-shrink-0 text-green-600" />
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Deployment Methodology</h2>
            <p className="text-lg text-gray-600">Proven 3-Phase System</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">01. Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                System audit, revenue analysis, and operational bottleneck identification
              </p>
            </div>
            
            <div className="bg-white border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">02. Sprint</h3>
              <p className="text-gray-600 leading-relaxed">
                Rapid deployment, system installation, and process optimization
              </p>
            </div>
            
            <div className="bg-white border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">03. Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Measurable impact, operational stability, and sustained revenue growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-white/20 text-white mb-6">
            SYSTEM READY
          </Badge>
          
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Deploy Your System?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Run a comprehensive assessment of your current operations and discover your growth potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/assessment">Run Assessment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Discuss Requirements</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proof;