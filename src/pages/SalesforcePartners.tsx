import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Download, AlertTriangle, ArrowRight, TrendingUp, Clock, DollarSign, Users, Zap, Target } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { ResourceDownloadModal } from "@/components/ResourceDownloadModal";

const SalesforcePartners = () => {
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const dealAccelerators = [
    {
      scenario: "15+ years of technical debt",
      opportunity: "Quick wins in data cleanup show immediate ROI and build momentum for larger scope"
    },
    {
      scenario: "Multiple disconnected instances",
      opportunity: "Integration consolidation becomes the hero project that unblocks their entire roadmap"
    },
    {
      scenario: "Custom objects nobody understands",
      opportunity: "Documentation and governance framework prevents future chaos — becomes ongoing engagement"
    },
    {
      scenario: "Broken automations causing issues",
      opportunity: "Fix the pain first, then expand to workflow optimization across the org"
    },
    {
      scenario: "Reports taking 2+ hours to run",
      opportunity: "Performance optimization delivers instant credibility, opens door to dashboard overhaul"
    },
    {
      scenario: "Marketing/Sales Cloud disconnects",
      opportunity: "Integration fix becomes proof of concept for broader platform unification"
    }
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
      <SEOHead
        title="Salesforce Partner Resources | CWT Studio Automations for AEs"
        description="Equip your team with Creator Wealth Tools playbooks to solve Salesforce technical debt, accelerate automation, and win web and mobile modernisation deals."
        keywords={[
          'Salesforce partner resources',
          'business automation enablement',
          'Creator Wealth Tools for AEs',
          'technical debt objection handling',
          'Salesforce deal support'
        ]}
        canonicalUrl="/salesforce/partners"
      />
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

      {/* Hero Section */}
      <section className="bg-card border-b-2 border-primary/20 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-mono mb-6">
              FOR ACCOUNT EXECUTIVES
            </div>
            <h1 className="heading-page text-foreground mb-6">
              Your Technical Support Team for Salesforce Deals
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We unblock technical debt, shorten sales cycles, and provide 48-hour turnaround on complex 
              Salesforce deals. No 18-month transformation projects. Just quick wins that build momentum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/ae-technical-support">
                  Request Technical Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/resources">
                  Get AE Resources
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Letter Header */}
      <section className="section-spacing-half bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6 font-mono">Hey AEs,</h2>
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-4">
                  "Our Salesforce org is a mess." You hear it on every discovery call. 
                  It's killing deal velocity, but most consultants just make it worse with 18-month "transformation" roadmaps.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  <strong>We're different.</strong> We fix the technical debt that's actually blocking deals — fast. 
                  15+ years of legacy customizations? We've cleaned up worse. And we get quick wins within the first sprint.
                </p>
                <p className="text-lg leading-relaxed">
                  Below: What we do, the technical expertise we provide, and exactly when to bring us into deals.
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

      {/* Deal Accelerators (Reframed from Deal Killers) */}
      <section className="section-spacing-half bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Deal Accelerators: Turn Technical Debt Into Opportunities</h2>
            <p className="text-muted-foreground mb-6">
              When you hear these "red flags" during discovery, they're actually <strong>expansion opportunities</strong>. 
              Here's how we turn objections into momentum:
            </p>
            <div className="space-y-4 mb-8">
              {dealAccelerators.map((item, index) => (
                <div key={index} className="bg-card border-2 border-primary/20 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-mono font-semibold text-foreground mb-2">
                        "{item.scenario}"
                      </div>
                      <div className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-accent">Opportunity:</strong> {item.opportunity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-primary p-6 rounded-lg text-white [&_*]:text-white">
              <h3 className="font-semibold mb-3">Our Technical Collaboration Benefits</h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span><strong>48-Hour Assessment:</strong> Rapid technical evaluation with actionable recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span><strong>Deal Support:</strong> Join calls to address technical objections and scope complexity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span><strong>Risk Mitigation:</strong> Identify technical landmines before they kill momentum</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span><strong>Ecosystem Credibility:</strong> Certified Salesforce Partner backing via CloudRoute</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Wins Framework */}
      <section className="section-spacing-half bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Quick Wins Framework: No 18-Month Projects</h2>
            <p className="text-muted-foreground mb-8">
              We build momentum through rapid, measurable wins — not roadmaps that never ship.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-card border-2 border-border p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Week 1-2</h3>
                <div className="text-xs font-mono text-primary uppercase tracking-wide mb-3">Assessment</div>
                <p className="text-sm text-muted-foreground">
                  No-cost technical audit. Identify 3-4 highest-impact fixes. Non-binding, just practical recommendations.
                </p>
              </div>

              <div className="bg-card border-2 border-border p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Week 3-4</h3>
                <div className="text-xs font-mono text-primary uppercase tracking-wide mb-3">Quick Win ID</div>
                <p className="text-sm text-muted-foreground">
                  Fix most painful issue first: data quality, broken automation, or reports. Build trust with visible results.
                </p>
              </div>

              <div className="bg-card border-2 border-border p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Week 5-8</h3>
                <div className="text-xs font-mono text-primary uppercase tracking-wide mb-3">Sprint Deploy</div>
                <p className="text-sm text-muted-foreground">
                  First sprint deployment. Workflow optimization, integration fixes, dashboard cleanup — all documented.
                </p>
              </div>

              <div className="bg-card border-2 border-border p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Month 3+</h3>
                <div className="text-xs font-mono text-primary uppercase tracking-wide mb-3">Expand Scope</div>
                <p className="text-sm text-muted-foreground">
                  Once results are visible, expand to platform unification, governance framework, ongoing ops support.
                </p>
              </div>
            </div>

            <div className="bg-accent/10 border-2 border-accent/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Why This Works</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick wins prove capability and build internal champions. By month 3, we're not selling anymore — 
                    we're expanding based on proven results. Average deal expands 2-3x from initial scope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AE Resources - Gated Downloads */}
      <section className="section-spacing-half bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Resources for Your Deals</h2>
            <p className="text-muted-foreground mb-6">
              Download frameworks, calculators, and assessment tools to accelerate technical conversations. 
              All resources are gated by email.
            </p>
            <div className="space-y-4 mb-8">
              {aeResources.map((resource, index) => (
                <Card key={index} className="bg-card border-border hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-mono">
                          {resource.type}
                        </span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => {
                            setSelectedResource(resource.title);
                            setIsModalOpen(true);
                          }}
                        >
                          <Download className="w-3 h-3 mr-1" />
                          Get
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" asChild>
                <Link to="/resources">
                  See All AE Resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Download Modal */}
      {selectedResource && (
        <ResourceDownloadModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedResource(null);
          }}
          resourceTitle={selectedResource}
          resourceDescription={`Get instant access to our ${selectedResource}. Enter your email to download.`}
        />
      )}

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
