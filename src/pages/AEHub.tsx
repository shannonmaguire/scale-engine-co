import { Link } from "react-router-dom";
import { ArrowLeft, Download, FileText, Calculator, Target, AlertCircle, Clock, CheckCircle2, MessageSquare, ChevronDown, ExternalLink } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { StandardCard, StandardCardHeader, StandardCardTitle, StandardCardDescription, StandardCardContent } from "@/components/ui/standard-card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";

const AEHub = () => {
  const resources = [
    {
      icon: FileText,
      title: "Technical Debt Assessment",
      format: "PDF · 12 pages",
      description: "Complete framework for diagnosing revenue system issues with scorecard and ROI calculator",
      downloadUrl: "#"
    },
    {
      icon: Calculator,
      title: "Deal Qualification Calculator",
      format: "Excel · Interactive",
      description: "Instant ROI and deal sizing for prospect conversations with time savings calculator",
      downloadUrl: "#"
    },
    {
      icon: Target,
      title: "Discovery Question Bank",
      format: "PDF · 8 pages",
      description: "Pre-qualified questions that surface technical debt with objection handling scripts",
      downloadUrl: "#"
    }
  ];

  const quickWins = [
    {
      scenario: "Data quality issues mentioned",
      action: "Offer free 1-hour diagnostic",
      outcome: "Surface 3-5 quick wins → Assessment"
    },
    {
      scenario: "Deal stalled on technical objections",
      action: "Request support (we join next call)",
      outcome: "Real-time resolution → Deal unstuck"
    },
    {
      scenario: "Prospect unsure about ROI",
      action: "Share qualification calculator",
      outcome: "Quantified value → Executive buy-in"
    }
  ];

  const objectionReframes = [
    {
      objection: "We don't have budget for consulting",
      reframe: "This is a diagnostic, not consulting. Under $1.5K to know exactly what's broken.",
      impact: "Turns objection into urgency"
    },
    {
      objection: "Our admin can handle this",
      reframe: "Great! We find 47 issues on average — what should they tackle first?",
      impact: "Positions as enablement, not replacement"
    },
    {
      objection: "Need executive buy-in first",
      reframe: "That's what our assessment provides — a board-ready ROI report.",
      impact: "Assessment becomes the buy-in tool"
    }
  ];

  const supportTiers = [
    { urgency: "CRITICAL", time: "4 hours", color: "text-destructive" },
    { urgency: "HIGH", time: "24 hours", color: "text-warm" },
    { urgency: "MEDIUM", time: "48 hours", color: "text-data" },
    { urgency: "GENERAL", time: "3-5 days", color: "text-muted-foreground" }
  ];

  return (
    <>
      <SEOHead
        title="AE Hub - Technical Support for Salesforce Deals | CWT Studio"
        description="Technical backstop for Account Executives selling Salesforce services. Request support, download tools, and access deal playbooks."
        canonicalUrl="https://coalescentwebtech.com/ae-hub"
      />

      {/* Header */}
      <Section noPadding className="pt-12 pb-8 border-b border-border">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <div className="system-status mb-6">AE RESOURCES PORTAL</div>
        
        <h1 className="heading-page mb-4">
          Technical Backstop for Salesforce Deals
        </h1>
        
        <p className="text-description max-w-3xl mb-8">
          Request support, access tools, and leverage our team as your technical resource to close opportunities.
        </p>

        {/* Response Time Badges */}
        <div className="flex flex-wrap gap-3">
          {supportTiers.map((tier) => (
            <div key={tier.urgency} className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded border border-border">
              <Clock className={`w-3.5 h-3.5 ${tier.color}`} />
              <span className="text-xs font-mono font-medium">{tier.urgency}</span>
              <span className="text-xs text-muted-foreground">→</span>
              <span className="text-xs font-mono">{tier.time}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Quick Actions */}
      <Section>
        <h2 className="heading-section mb-8">Quick Actions</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Request Technical Support */}
          <StandardCard variant="bordered" className="hover-elevate group">
            <StandardCardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="w-7 h-7 text-primary" />
              </div>
              <StandardCardTitle>Request Technical Support</StandardCardTitle>
              <StandardCardDescription>
                Get expert backup on your deal. Fill out the support form and we'll respond based on urgency level.
              </StandardCardDescription>
            </StandardCardHeader>
            <StandardCardContent>
              <Button asChild className="w-full">
                <Link to="/contact?type=ae-support">
                  Open Support Form
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </StandardCardContent>
          </StandardCard>

          {/* Download Complete Toolkit */}
          <StandardCard variant="bordered" className="hover-elevate group">
            <StandardCardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Download className="w-7 h-7 text-primary" />
              </div>
              <StandardCardTitle>Download Complete Toolkit</StandardCardTitle>
              <StandardCardDescription>
                All assessment tools, calculators, and playbooks in one package. Ready to use immediately.
              </StandardCardDescription>
            </StandardCardHeader>
            <StandardCardContent>
              <Button variant="outline" className="w-full">
                Download Toolkit (.zip)
              </Button>
            </StandardCardContent>
          </StandardCard>
        </div>
      </Section>

      {/* Tools & Resources */}
      <Section variant="muted">
        <h2 className="heading-section mb-4">Tools & Resources</h2>
        <p className="text-description mb-12 max-w-2xl">
          Downloadable frameworks to qualify prospects, calculate ROI, and accelerate technical deals.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <StandardCard key={resource.title} equalHeight className="group">
              <StandardCardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono px-2 py-1 bg-muted rounded text-muted-foreground">
                    {resource.format}
                  </span>
                </div>

                <StandardCardTitle className="text-xl">{resource.title}</StandardCardTitle>
                <StandardCardDescription>
                  {resource.description}
                </StandardCardDescription>
              </StandardCardHeader>
              
              <StandardCardContent className="mt-auto">
                <Button variant="outline" className="w-full" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </StandardCardContent>
            </StandardCard>
          ))}
        </div>
      </Section>

      {/* Deal Playbook */}
      <Section>
        <div className="mb-12">
          <div className="system-status mb-4">DEAL OPERATIONS MANUAL</div>
          <h2 className="heading-section mb-3">Deal Playbook</h2>
          <p className="text-description max-w-2xl">
            Quick win frameworks and objection handling strategies for common scenarios.
          </p>
        </div>

        {/* Quick Wins Framework */}
        <div className="mb-12">
          <h3 className="heading-subsection mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-success" />
            Quick Wins Framework
          </h3>
          
          <div className="space-y-4">
            {quickWins.map((win, index) => (
              <StandardCard key={index} variant="default">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-2">SCENARIO</div>
                    <p className="text-sm font-medium">{win.scenario}</p>
                  </div>
                  
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-2">ACTION</div>
                    <p className="text-sm font-medium text-primary">{win.action}</p>
                  </div>
                  
                  <div>
                    <div className="text-xs font-mono text-muted-foreground mb-2">OUTCOME</div>
                    <p className="text-sm font-medium text-success">{win.outcome}</p>
                  </div>
                </div>
              </StandardCard>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Objection Reframes */}
        <div>
          <h3 className="heading-subsection mb-6 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-warm" />
            Objection Reframes
          </h3>
          
          <div className="space-y-4">
            {objectionReframes.map((item, index) => (
              <Collapsible key={index}>
                <StandardCard variant="muted">
                  <CollapsibleTrigger className="w-full text-left">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-xs font-mono text-muted-foreground mb-2">OBJECTION</div>
                        <p className="font-medium mb-3">"{item.objection}"</p>
                      </div>
                      <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform ui-expanded:rotate-180" />
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="pt-4 border-t border-border mt-4">
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs font-mono text-muted-foreground mb-2">REFRAME</div>
                        <p className="text-sm font-medium text-foreground mb-3">
                          {item.reframe}
                        </p>
                      </div>
                      
                      <div>
                        <div className="text-xs font-mono text-muted-foreground mb-2">DEAL IMPACT</div>
                        <p className="text-sm text-success">
                          {item.impact}
                        </p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </StandardCard>
              </Collapsible>
            ))}
          </div>
        </div>
      </Section>

      {/* Support Coverage */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="system-status mb-4 inline-block">SUPPORT COVERAGE</div>
            <h2 className="heading-section mb-3">How We Support You</h2>
            <p className="text-description">
              When to engage us, response expectations, and what we provide.
            </p>
          </div>

          <div className="space-y-6">
            <StandardCard variant="bordered">
              <StandardCardHeader>
                <StandardCardTitle className="text-xl">When to Bring Us In</StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Prospect mentions "our Salesforce is messy" or data quality issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Deal &gt; $50K ARR with technical concerns stalling progress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Complex integration or automation beyond basic setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Recent implementation failed or underperforming</span>
                  </li>
                </ul>
              </StandardCardContent>
            </StandardCard>

            <StandardCard variant="bordered">
              <StandardCardHeader>
                <StandardCardTitle className="text-xl">What We Provide</StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Technical validation for sales conversations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Objection handling support (we can join prospect calls)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Deal-specific assessment proposals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">ROI quantification and business case development</span>
                  </li>
                </ul>
              </StandardCardContent>
            </StandardCard>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-4">Need Support on a Deal?</h2>
          <p className="text-description mb-8">
            We're here to help you close. Request technical support or reach out for general questions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact?type=ae-support">
                Request Technical Support
                <MessageSquare className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                General Questions
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AEHub;