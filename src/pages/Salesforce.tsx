import { Button } from "@/components/ui/button";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, BarChart3, Clock, Zap, Target, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const Salesforce = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Revenue Systems Assessment",
      description: "Complete diagnostic of your Salesforce configuration and revenue infrastructure",
      duration: "2 weeks",
      deliverables: ["Revenue Infrastructure Scorecard", "System analysis", "90-day roadmap"]
    },
    {
      icon: Zap,
      title: "Automation & Integration",
      description: "Connect your existing tools and automate manual processes to increase efficiency",
      duration: "4-8 weeks",
      deliverables: ["Custom integrations", "Workflow automation", "Data synchronization"]
    },
    {
      icon: Target,
      title: "Performance Optimization",
      description: "Fine-tune your Salesforce configuration for maximum team adoption and results",
      duration: "3-6 weeks",
      deliverables: ["Custom fields & objects", "Reporting dashboards", "User training"]
    }
  ];

  const benefits = [
    "40% reduction in manual data entry",
    "Improved forecast accuracy by 25%",
    "30% faster deal cycle times",
    "90%+ user adoption rates"
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment", 
      description: "We analyze your current setup, identify pain points, and map out optimization opportunities.",
      timeline: "Week 1-2"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Create a detailed implementation roadmap with clear priorities and expected outcomes.",
      timeline: "Week 3"
    },
    {
      step: "03", 
      title: "Implementation",
      description: "Build and deploy optimizations with minimal disruption to your daily operations.",
      timeline: "Week 4-8"
    },
    {
      step: "04",
      title: "Training & Support",
      description: "Ensure your team knows how to use the new systems and processes effectively.",
      timeline: "Week 8-10"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Salesforce Services | CWT Studio Business Automation Experts"
        description="Partner with CWT Studio to audit, automate, and accelerate your Salesforce stack. We align business automation, custom web, and mobile experiences to local revenue goals."
        keywords={[
          'Salesforce consulting services',
          'business automation experts',
          'Creator Wealth Tools Salesforce',
          'Salesforce optimization agency',
          'web and mobile integrations for Salesforce'
        ]}
        canonicalUrl="/salesforce"
      />
      {/* Hero Section */}
      <Section className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
            <div className="system-status mb-6">
              PLATFORM OPTIMIZATION
            </div>
            <h1 className="heading-page mb-6">
              Salesforce Revenue Systems
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Salesforce investment into predictable revenue. Assessment, sprint, optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Start Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/proof">
                  See Proof
                </Link>
              </Button>
            </div>
        </div>
      </Section>

      {/* Services */}
      <Section>
        <div className="text-center mb-12">
            <h2 className="heading-section mb-4">Revenue Systems for Salesforce</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diagnostic-driven implementations that make Salesforce work harder for your revenue team
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <StandardCard key={index} variant="bordered" equalHeight>
                <StandardCardHeader>
                  <service.icon className="w-10 h-10 accent-data mb-4" />
                  <StandardCardTitle className="text-xl">{service.title}</StandardCardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 accent-data" />
                    {service.duration}
                  </div>
                </StandardCardHeader>
                <StandardCardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Key Deliverables:</p>
                    {service.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </StandardCardContent>
              </StandardCard>
            ))}
          </div>
      </Section>

      {/* Benefits */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
              <p className="text-xl text-muted-foreground">
                Our clients typically see these improvements within 90 days
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-card p-6 rounded-lg border-l-4 border-accent-data">
                  <Shield className="w-6 h-6 accent-data flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
      </Section>

      {/* Process */}
      <Section>
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground">
              A proven process that minimizes disruption while maximizing results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <StandardCard key={index} equalHeight>
                <StandardCardHeader>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <StandardCardTitle className="text-lg">{step.title}</StandardCardTitle>
                  <p className="text-sm text-muted-foreground">{step.timeline}</p>
                </StandardCardHeader>
                <StandardCardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </StandardCardContent>
              </StandardCard>
            ))}
          </div>
      </Section>

      {/* Salesforce Partner Ecosystem */}
      <Section className="bg-primary/5 border-y-2 border-primary/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-mono mb-6">
              <Shield className="w-4 h-4" />
              PARTNER ECOSYSTEM
            </div>
            <h2 className="heading-section mb-6">Powered by Salesforce Partner Collaboration</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CWT Studio operates in a <strong>50% profit-share partnership with CloudRoute</strong>, 
              a certified Salesforce Partner. This strategic collaboration delivers:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-lg text-foreground mb-2">
                    Direct Ecosystem Credibility
                  </h3>
                  <p className="text-muted-foreground">
                    Certified Partner status gives us priority access to Salesforce resources and faster deal velocity through trusted channels
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-lg text-foreground mb-2">
                    Accelerated Implementation
                  </h3>
                  <p className="text-muted-foreground">
                    Partner-tier technical resources enable faster deployment and enterprise-grade support without traditional agency overhead
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-lg text-foreground mb-2">
                    Technical Debt Resolution
                  </h3>
                  <p className="text-muted-foreground">
                    Unblock messy orgs and legacy implementations with proven frameworks that accelerate deal cycles by 30%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-lg text-foreground mb-2">
                    Measurable ROI
                  </h3>
                  <p className="text-muted-foreground">
                    Every engagement includes documented outcomes, adoption metrics, and 12-month projections for scalable growth
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-warm/20 border-2 border-warm rounded-lg p-8 text-center">
            <p className="text-lg text-foreground mb-6">
              <strong>The Result:</strong> Operator-led revenue systems backed by certified Partner ecosystem credibility. 
              We deliver the speed and pragmatism of a consultancy with the technical authority of a Salesforce Partner.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Book Partnership Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* AE Resources CTA */}
      <Section variant="muted">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-mono mb-6">
            <Shield className="w-4 h-4" />
            FOR ACCOUNT EXECUTIVES
          </div>
          <h2 className="text-3xl font-bold mb-4">Technical Support for Salesforce Deals</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Unblock technical debt, shorten sales cycles, and get 48-hour turnaround on complex deals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/salesforce/partners">
                AE Resources & Quick Wins
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/ae-technical-support">
                Request Support
              </Link>
            </Button>
          </div>
        </div>
      </Section>

    </div>
  );
};

export default Salesforce;
