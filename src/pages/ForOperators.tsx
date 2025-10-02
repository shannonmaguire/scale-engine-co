import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Section } from "@/components/ui/section";
import { StandardCard } from "@/components/ui/standard-card";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Users, Zap, Target, Trophy, Shield, Briefcase, TrendingUp, ArrowRight } from "lucide-react";
import { PartnerApplicationModal } from "@/components/PartnerApplicationModal";
import analytics from "@/lib/analytics";

const ForOperators = () => {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);

  const handleCTAClick = () => {
    analytics.trackEvent("partner_application_opened", {
      event_category: "Partner",
      event_label: "For Operators CTA"
    });
    setApplicationModalOpen(true);
  };

  return (
    <>
      <SEOHead 
        title="For Operators - Partner Network | CWT Studio"
        description="Join the CWT Studio operator network. Partner with us to deliver Fortune 500-level revenue infrastructure to scaling companies."
        keywords="revenue operations partnership, operator network, CWT partners, salesforce implementation partners"
      />

      {/* Hero Section */}
      <Section id="hero" className="pt-32 pb-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tight mb-8 text-foreground">
            Built for operators.
            <br />
            <span className="text-primary">Run by operators.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-mono mb-12 leading-relaxed">
            Partner with CWT Studio to deliver enterprise-grade revenue infrastructure to scaling companies. Access our playbooks, systems, and support network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={handleCTAClick}
              className="hover-lift hover-glow font-mono"
            >
              Apply to the Operator Network
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              asChild
              className="font-mono"
            >
              <a href="#how-it-works">Learn How It Works</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Who It's For Section */}
      <Section id="who-its-for" variant="muted">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-foreground">
            Who This Is For
          </h2>
          <p className="text-lg text-muted-foreground font-mono">
            We're looking for experienced operators who understand revenue systems at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <StandardCard>
            <div className="p-8">
              <Users className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-mono font-bold mb-4 text-foreground">Revenue Operators</h3>
              <p className="text-muted-foreground font-mono leading-relaxed">
                5+ years in RevOps, Sales Ops, or Marketing Ops with proven system implementations.
              </p>
            </div>
          </StandardCard>

          <StandardCard>
            <div className="p-8">
              <Briefcase className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-mono font-bold mb-4 text-foreground">Salesforce Experts</h3>
              <p className="text-muted-foreground font-mono leading-relaxed">
                Certified admins or architects who build revenue systems that compound.
              </p>
            </div>
          </StandardCard>

          <StandardCard>
            <div className="p-8">
              <TrendingUp className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-mono font-bold mb-4 text-foreground">Fractional Leaders</h3>
              <p className="text-muted-foreground font-mono leading-relaxed">
                Former CROs/VPs who want to scale their expertise across multiple clients.
              </p>
            </div>
          </StandardCard>
        </div>
      </Section>

      {/* Why Partner Section */}
      <Section id="why-partner">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-foreground">
            Why Partner With Us
          </h2>
          <p className="text-lg text-muted-foreground font-mono">
            Access systems, support, and deal flow while maintaining your independence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Target,
              title: "Qualified Deal Flow",
              description: "Get matched with vetted clients who understand the value of operational excellence."
            },
            {
              icon: Shield,
              title: "Battle-Tested Playbooks",
              description: "Access our library of Fortune 500-proven systems and implementation frameworks."
            },
            {
              icon: Trophy,
              title: "Revenue Share",
              description: "Transparent commission structure on every deal you close and deliver."
            },
            {
              icon: Zap,
              title: "Support Network",
              description: "Connect with other operators, get technical support, and collaborate on complex deals."
            }
          ].map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-mono font-bold mb-3 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground font-mono leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* How It Works Section */}
      <Section id="how-it-works" variant="muted">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground font-mono">
            A simple process from application to active partnership.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Apply",
                description: "Submit your application with your experience, expertise, and what you bring to the network."
              },
              {
                step: "02",
                title: "Review",
                description: "Our team reviews your background and conducts a capability assessment (2-3 days)."
              },
              {
                step: "03",
                title: "Onboard",
                description: "Get access to our partner portal, playbooks, and matching system."
              },
              {
                step: "04",
                title: "Deliver",
                description: "Get matched with clients, deliver excellent work, get paid."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-mono font-bold text-xl">
                    {item.step}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-mono font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-lg text-muted-foreground font-mono leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Tracks Section */}
      <Section id="tracks">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-foreground">
            Partnership Tracks
          </h2>
          <p className="text-lg text-muted-foreground font-mono">
            Choose the engagement model that fits your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <StandardCard variant="bordered">
            <div className="p-8">
              <h3 className="text-2xl font-mono font-bold mb-4 text-foreground">Referral Partner</h3>
              <p className="text-muted-foreground font-mono mb-6">
                Introduce qualified leads, earn commission on closed deals.
              </p>
              <ul className="space-y-3">
                {["15% referral fee", "No delivery required", "Instant approval"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-mono text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StandardCard>

          <StandardCard variant="bordered">
            <div className="p-8 border-2 border-primary">
              <div className="inline-block px-3 py-1 bg-primary text-primary-foreground font-mono text-xs font-bold mb-4 rounded">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-mono font-bold mb-4 text-foreground">Delivery Partner</h3>
              <p className="text-muted-foreground font-mono mb-6">
                Source and deliver projects using our playbooks and support.
              </p>
              <ul className="space-y-3">
                {["30-40% revenue share", "Full support access", "Playbook library", "Quality review"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-mono text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StandardCard>

          <StandardCard variant="bordered">
            <div className="p-8">
              <h3 className="text-2xl font-mono font-bold mb-4 text-foreground">Strategic Partner</h3>
              <p className="text-muted-foreground font-mono mb-6">
                Co-sell and co-deliver major accounts with shared upside.
              </p>
              <ul className="space-y-3">
                {["50% revenue share", "Co-branded delivery", "Joint GTM support", "By invitation"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-mono text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StandardCard>
        </div>
      </Section>

      {/* Tiers Section */}
      <Section id="tiers" variant="muted">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-foreground">
            Partnership Tiers
          </h2>
          <p className="text-lg text-muted-foreground font-mono">
            Grow your tier through quality delivery and client satisfaction.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              tier: "Bronze",
              deals: "0-3 deals",
              benefits: ["Standard commission", "Base support", "Playbook access"]
            },
            {
              tier: "Silver",
              deals: "4-10 deals",
              benefits: ["+5% commission bonus", "Priority support", "Advanced playbooks", "Co-marketing"]
            },
            {
              tier: "Gold",
              deals: "11-25 deals",
              benefits: ["+10% commission bonus", "Dedicated success manager", "Early access to new systems", "Speaking opportunities"]
            },
            {
              tier: "Platinum",
              deals: "26+ deals",
              benefits: ["+15% commission bonus", "Strategic advisory role", "Custom playbook development", "Equity consideration"]
            }
          ].map((tier, index) => (
            <StandardCard key={index}>
              <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-2xl font-mono font-bold text-foreground">{tier.tier}</h3>
                    <span className="text-sm font-mono text-muted-foreground">{tier.deals}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tier.benefits.map((benefit, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StandardCard>
          ))}
        </div>
      </Section>

      {/* Partner Kit Section */}
      <Section id="kit">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-foreground">
            What You Get
          </h2>
          <p className="text-lg text-muted-foreground font-mono">
            Everything you need to deliver world-class revenue operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Implementation Playbooks",
              description: "Step-by-step guides for Salesforce builds, tech stack audits, and process design."
            },
            {
              title: "Assessment Framework",
              description: "Our proprietary assessment methodology and scoring system."
            },
            {
              title: "Client Templates",
              description: "SOWs, proposals, reporting templates, and project plans."
            },
            {
              title: "Technical Resources",
              description: "Code libraries, Salesforce packages, and automation recipes."
            },
            {
              title: "Training Library",
              description: "Video courses, certification prep, and skill development."
            },
            {
              title: "Community Access",
              description: "Private Slack, monthly calls, and annual partner summit."
            }
          ].map((item, index) => (
            <StandardCard key={index}>
              <div className="p-6">
                <h3 className="text-lg font-mono font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">{item.description}</p>
              </div>
            </StandardCard>
          ))}
        </div>
      </Section>

      {/* Standards Section */}
      <Section id="standards" variant="muted">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-foreground">
            Our Standards
          </h2>
          <p className="text-lg text-muted-foreground font-mono">
            The bar for quality is high. Here's what we expect.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <StandardCard>
            <div className="p-8 space-y-6">
              {[
                {
                  title: "Technical Excellence",
                  points: ["Clean, documented implementations", "Best practices compliance", "Scalable architecture"]
                },
                {
                  title: "Client Communication",
                  points: ["Weekly status updates", "Transparent issue escalation", "Professional deliverables"]
                },
                {
                  title: "Project Management",
                  points: ["On-time delivery", "Scope management", "Change request process"]
                },
                {
                  title: "Quality Assurance",
                  points: ["Testing protocols", "User acceptance", "Post-launch support"]
                }
              ].map((standard, index) => (
                <div key={index}>
                  <h3 className="text-xl font-mono font-bold mb-3 text-foreground">{standard.title}</h3>
                  <ul className="space-y-2">
                    {standard.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-mono text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </StandardCard>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-mono font-bold text-foreground hover:no-underline">
                What's the approval process?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-mono">
                We review applications within 2-3 business days. We look at experience, references, and portfolio work. Delivery partners complete a capability assessment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-mono font-bold text-foreground hover:no-underline">
                How do payments work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-mono">
                Referral partners get paid when the deal closes. Delivery partners receive milestone payments: 30% upfront, 40% at midpoint, 30% at completion.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-mono font-bold text-foreground hover:no-underline">
                Can I work with my existing clients?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-mono">
                Yes. You can register existing clients through our deal registration system and still receive partner benefits and support.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-mono font-bold text-foreground hover:no-underline">
                What if a project goes wrong?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-mono">
                We provide escalation support and can step in to help. Quality issues are addressed collaboratively, with the goal of making the client successful.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-mono font-bold text-foreground hover:no-underline">
                Is there an exclusivity requirement?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-mono">
                No. You can work with other firms and clients. We just ask that deals sourced through our network are registered and delivered per our standards.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Apply Section */}
      <Section id="apply" variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-foreground">
            Ready to Join?
          </h2>
          <p className="text-xl text-muted-foreground font-mono mb-10">
            Apply to the operator network and start delivering Fortune 500-level systems.
          </p>
          <Button 
            size="lg"
            onClick={handleCTAClick}
            className="hover-lift hover-glow font-mono"
          >
            Apply to the Operator Network
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </Section>

      <PartnerApplicationModal 
        open={applicationModalOpen}
        onOpenChange={setApplicationModalOpen}
      />
    </>
  );
};

export default ForOperators;
