import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Download, AlertTriangle, ArrowRight, TrendingUp, Clock, DollarSign, Users } from "lucide-react";

const SalesforcePartners = () => {
  const objectionScenarios = [{
    icon: AlertTriangle,
    scenario: "Technical Debt Objections",
    description: "When prospects say their org is a 'Frankenstein build' with too many customizations to fix"
  }, {
    icon: Clock,
    scenario: "Timeline Concerns", 
    description: "IT says any changes will take 6+ months and they can't afford the downtime"
  }, {
    icon: DollarSign,
    scenario: "ROI Skepticism",
    description: "They've been burned before by consultants who promised automation but delivered complexity"
  }, {
    icon: Users,
    scenario: "Adoption Resistance",
    description: "Sales team pushes back on any workflow changes, even if they'll save time"
  }];

  const dealKillers = [
    "Inherited org with 15+ years of technical debt",
    "Multiple instances that don't talk to each other", 
    "Custom objects nobody remembers how to modify",
    "Broken automations causing data quality issues",
    "Reports that take 2+ hours to run",
    "Integration failures between Marketing Cloud and Sales Cloud"
  ];

  const aeResources = [{
    title: "Technical Assessment Framework",
    description: "Systematic approach to evaluating Salesforce technical debt",
    type: "Methodology"
  }, {
    title: "ROI Calculator for Salesforce Cleanup",
    description: "Show prospects time/cost savings from fixing their org",
    type: "Tool"
  }, {
    title: "Discovery Questions for Technical Debt",
    description: "Identify technical requirements and complexity factors",
    type: "Checklist"
  }, {
    title: "Implementation Readiness Guide",
    description: "Technical prerequisites and preparation checklist",
    type: "Reference"
  }];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <section className="bg-muted/30 border-b border-border py-3">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link to="/salesforce" className="hover:text-foreground transition-colors">Salesforce</Link>
              <span>/</span>
              <span className="text-foreground">For AEs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access CTA */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-primary-foreground">Need Technical Support Now?</h2>
              <p className="text-primary-foreground/90">Get expert help for your Salesforce deals within 48 hours</p>
            </div>
            <Button size="lg" variant="secondary" asChild className="shrink-0">
              <Link to="/ae-technical-support">
                Request Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Letter Header */}
      <section className="section-spacing-half bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold mb-6">Hey AEs,</h1>
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-4">
                  I know you're tired of hearing "Our Salesforce org is a mess" during discovery calls. 
                  You know it's killing deal velocity, but you also know most consultants just make it worse.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  We specialize in fixing the technical debt that's actually blocking your deals — without the 
                  18-month "transformation" projects that kill momentum. We've cleaned up orgs with 15+ years 
                  of legacy customizations, and we can usually get quick wins within the first sprint.
                </p>
                <p className="text-lg leading-relaxed">
                  Below is what we do, the technical expertise we provide, and when to bring us into deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Objections */}
      <section className="section-spacing-half">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Objections You're Probably Hearing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {objectionScenarios.map((objection, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <objection.icon className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">{objection.scenario}</h3>
                        <p className="text-sm text-muted-foreground">{objection.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-primary">
                <strong>Reality:</strong> These are all fixable problems. The key is showing them quick wins 
                first, then building momentum for bigger changes. We've handled orgs way messier than theirs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Killers */}
      <section className="section-spacing-half bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">When to Bring Us In</h2>
            <p className="text-muted-foreground mb-6">
              If you're hearing any of these during discovery, we can probably turn it into a differentiator:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {dealKillers.map((killer, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                  <span className="text-sm">{killer}</span>
                </div>
              ))}
            </div>
            <div className="bg-primary text-primary-foreground p-6 rounded-lg">
              <h3 className="font-semibold mb-2 !text-white">Technical Benefits We Provide</h3>
              <ul className="text-sm space-y-1 !text-white">
                <li className="!text-white">• <strong className="!text-white">Expert Assessment:</strong> Rapid technical evaluation and recommendations</li>
                <li className="!text-white">• <strong className="!text-white">Implementation Support:</strong> Hands-on technical expertise during complex deals</li>
                <li className="!text-white">• <strong className="!text-white">Risk Mitigation:</strong> Identify and address technical challenges early</li>
                <li className="!text-white">• <strong className="!text-white">Industry Expertise:</strong> Deep knowledge of sector-specific Salesforce requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-spacing-half">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Process (No 18-Month Projects)</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold mb-4">1</div>
                <h3 className="font-semibold mb-3">Week 1-2: Assessment</h3>
                <p className="text-muted-foreground text-sm">
                  We audit their current org and identify the 3-4 things that will have the biggest impact. 
                  No judgment, just practical recommendations.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold mb-4">2</div>
                <h3 className="font-semibold mb-3">Week 3-6: Quick Wins</h3>
                <p className="text-muted-foreground text-sm">
                  Fix the most painful stuff first. Usually data quality, broken automations, or 
                  reports that actually work. Build trust before bigger changes.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold mb-4">3</div>
                <h3 className="font-semibold mb-3">Week 7+: Scale</h3>
                <p className="text-muted-foreground text-sm">
                  Once they see results, expand scope to integration cleanup, workflow optimization, 
                  and whatever else is on their wishlist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AE Resources */}
      <section className="section-spacing-half bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Resources for Your Deals</h2>
            <div className="space-y-4 mb-8">
              {aeResources.map((resource, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-mono">
                          {resource.type}
                        </span>
                        <Button size="sm" variant="outline">
                          <Download className="w-3 h-3 mr-1" />
                          Get
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Collaboration Process */}
      <section className="section-spacing-half">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Technical Collaboration Process</h2>
            <div className="prose prose-lg max-w-none text-foreground mb-8">
              <p className="text-base leading-relaxed mb-4">
                <strong>Initial Consultation:</strong> When you encounter complex technical requirements during a deal, 
                reach out and we'll provide a technical assessment within 48 hours.
              </p>
              <p className="text-base leading-relaxed mb-4">
                <strong>Technical Support:</strong> We can join calls to address technical questions, provide 
                architectural guidance, and help scope implementation requirements.
              </p>
              <p className="text-base leading-relaxed mb-4">
                <strong>Implementation Partnership:</strong> If the deal moves forward, we work directly with 
                your client to deliver the technical solution while keeping you informed of progress.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-console">
                <Link to="/ae-technical-support">
                  Request Technical Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/assessment-tools">
                  Get Assessment Tools
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesforcePartners;