import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Target, Zap, Users, DollarSign, Clock, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Proof = () => {
  const caseStudies = [
    {
      id: "01",
      industry: "Gov Contractor",
      vertical: "Federal Compliance",
      impact: {
        metric: "$2.4M",
        description: "Annual Revenue Growth",
        timeline: "12 months"
      },
      challenge: "Ad-hoc project delivery with founder bottleneck",
      solution: "Standardized service packages + compliance documentation system",
      outcomes: [
        "Repeatable $25K-$50K service packages deployed",
        "SaaS compliance market position established", 
        "Founder extracted from delivery operations",
        "Predictable revenue model operational"
      ],
      status: "DEPLOYED"
    },
    {
      id: "02", 
      industry: "Professional Services",
      vertical: "Legal Advisory",
      impact: {
        metric: "4x",
        description: "MRR Growth",
        timeline: "6 months"
      },
      challenge: "High-ticket work without subscription revenue model",
      solution: "Subscription architecture + client journey optimization",
      outcomes: [
        "Predictable MRR from subscription model",
        "Category-defining market positioning", 
        "Complete pipeline visibility for partners",
        "Revenue predictability achieved"
      ],
      status: "OPTIMIZED"
    },
    {
      id: "03",
      industry: "Creator Economy",
      vertical: "Media + Education",
      impact: {
        metric: "280%",
        description: "LTV Increase",
        timeline: "4 months"
      },
      challenge: "Strong audience reach, weak revenue conversion",
      solution: "Revenue Sprint + automation backbone deployment",
      outcomes: [
        "Audience converted to paying members",
        "Automated upsell flows operational",
        "Affiliate program driving acquisition",
        "Creative output matched by revenue systems"
      ],
      status: "SCALED"
    },
    {
      id: "04",
      industry: "SaaS Startup",
      vertical: "Enterprise Software",
      impact: {
        metric: "$850K",
        description: "First Enterprise Deals",
        timeline: "8 months"
      },
      challenge: "Strong product with zero GTM discipline",
      solution: "ICP framework + Salesforce ecosystem integration",
      outcomes: [
        "Enterprise positioning + first deals secured",
        "Repeatable sales process established",
        "Revenue growth infrastructure deployed",
        "GTM risk eliminated from founder sales"
      ],
      status: "DEPLOYED"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "DEPLOYED": return "bg-green-100 text-green-800 border-green-200";
      case "OPTIMIZED": return "bg-orange-100 text-orange-800 border-orange-200";  
      case "SCALED": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  const methodology = [
    {
      phase: "01",
      title: "Assessment",
      description: "System audit + revenue analysis",
      icon: BarChart3,
      deliverable: "Operational bottleneck identification"
    },
    {
      phase: "02", 
      title: "Sprint",
      description: "Rapid deployment + optimization",
      icon: Zap,
      deliverable: "System installation + process build"
    },
    {
      phase: "03",
      title: "Results",
      description: "Measurable impact + scaling",
      icon: TrendingUp,
      deliverable: "Revenue growth + operational stability"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <CheckCircle className="h-4 w-4" />
            4 Systems Deployed
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Operational Proof Points
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Real deployments. Quantified impact. Revenue growth delivered.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">$4.1M+</div>
              <div className="text-sm text-gray-600">Revenue Impact</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">280%</div>
              <div className="text-sm text-gray-600">Avg. Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">4</div>
              <div className="text-sm text-gray-600">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">6mo</div>
              <div className="text-sm text-gray-600">Avg. Timeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <p className="text-lg text-gray-600">Real system deployments across industries</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="border-2 border-gray-100 hover:border-gray-200 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {study.id}
                      </div>
                      <div>
                        <CardTitle className="text-lg text-gray-900">{study.industry}</CardTitle>
                        <CardDescription className="text-gray-600">{study.vertical}</CardDescription>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(study.status)} border`}>
                      {study.status}
                    </Badge>
                  </div>

                  {/* Impact Metrics */}
                  <div className="bg-gray-50 rounded-lg p-4 border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{study.impact.metric}</div>
                        <div className="text-sm text-gray-600">{study.impact.description}</div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-gray-600 gap-1">
                          <Clock className="h-4 w-4" />
                          {study.impact.timeline}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-red-600 mb-2 uppercase tracking-wide">
                      Challenge
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">
                      Solution
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-green-600 mb-3 uppercase tracking-wide">
                      Key Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {study.outcomes.map((outcome, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-500" />
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

      {/* Methodology */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3-Phase Methodology</h2>
            <p className="text-lg text-gray-600">Systematic approach to operational transformation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodology.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <Card key={phase.phase} className="text-center border-2 border-gray-200 bg-white relative">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {phase.phase}. {phase.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {phase.description}
                    </p>
                    <div className="text-sm text-gray-500 font-medium">
                      {phase.deliverable}
                    </div>
                  </CardContent>
                  
                  {idx < methodology.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300"></div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="h-4 w-4" />
            System Ready for Deployment
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Start with a comprehensive assessment of your current systems and revenue infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-base font-semibold">
              <Link to="/assessment">Run Assessment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-base font-semibold">
              <Link to="/contact">Discuss Requirements</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proof;