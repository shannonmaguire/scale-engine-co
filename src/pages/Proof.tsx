import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowRight, TrendingUp, CheckCircle, Building2, Target, Zap, Clock } from "lucide-react";
import { Link } from "react-router-dom";
const Proof = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start"
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const caseStudies = [{
    id: 1,
    industry: "Gov Contractor",
    vertical: "Federal Compliance",
    size: "12-person team",
    timeline: "90 Days",
    // Context
    challenge: "Scaling from ad-hoc projects to repeatable service delivery with no standardized processes",
    pullQuote: "We went from fighting fires to running plays",
    // System Installed
    system: ["Fixed-scope service packages ($25K-$50K)", "Compliance-aligned documentation system", "GTM sprint targeting SaaS/GovTech", "CRM + RevOps pipeline tracking"],
    // Outcome
    beforeMetric: {
      label: "Project-based chaos",
      value: "Ad-hoc"
    },
    afterMetric: {
      label: "ARR",
      value: "$2.5M"
    },
    growth: "250%",
    outcomes: ["Standardized service productization", "Clear sales motion for SaaS compliance", "Founder extracted from delivery", "Recurring revenue operational"]
  }, {
    id: 2,
    industry: "Professional Services",
    vertical: "Legal Advisory",
    size: "6 partners",
    timeline: "120 Days",
    challenge: "High-trust, high-ticket work with no scalable backend requiring transition to subscription revenue",
    pullQuote: "Finally, we could see what was coming",
    system: ["Subscription architecture (tiers, deliverables, billing)", "Client journey: funnels → onboarding → retention", "Revenue dashboard + partner reporting", "90-day repositioning sprint"],
    beforeMetric: {
      label: "Unpredictable one-offs",
      value: "$0 MRR"
    },
    afterMetric: {
      label: "Monthly recurring",
      value: "$480K"
    },
    growth: "340%",
    outcomes: ["Subscription model with predictable MRR", "Category-defining market position", "Pipeline visibility for all partners", "Revenue predictability achieved"]
  }, {
    id: 3,
    industry: "Creator Economy",
    vertical: "Media + Education",
    size: "Solo operator + team",
    timeline: "150 Days",
    challenge: "Strong audience reach with weak revenue infrastructure and no backend systems to convert followers",
    pullQuote: "The audience was there. The money wasn't",
    system: ["Funnel audit: pricing, community mechanics", "Revenue Sprint: growth roadmap + affiliate program", "Automation backbone: CRM, billing, analytics", "Internal team training on GTM ops"],
    beforeMetric: {
      label: "Followers without revenue",
      value: "0 systems"
    },
    afterMetric: {
      label: "ARR",
      value: "$1.8M"
    },
    growth: "520%",
    outcomes: ["LTV increased via upsell flows", "Audience converted to paying members", "Operational system matches creative output", "Founder bottleneck eliminated"]
  }, {
    id: 4,
    industry: "SaaS Startup",
    vertical: "Enterprise Software",
    size: "8-person team",
    timeline: "180 Days",
    challenge: "Strong product with zero GTM discipline and no revenue systems or market positioning clarity",
    pullQuote: "We built software. They built the go-to-market",
    system: ["ICP + GTM framework for enterprise/SMB", "Outbound/inbound motion via ecosystem", "RevOps pipeline + customer success loops", "Pricing architecture + packaging strategy"],
    beforeMetric: {
      label: "Spray and pray",
      value: "No process"
    },
    afterMetric: {
      label: "ARR",
      value: "$3.2M"
    },
    growth: "420%",
    outcomes: ["First enterprise deals secured", "GTM risk eliminated", "Repeatable SaaS revenue foundation", "Revenue growth infrastructure live"]
  }];
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);
  return <div className="min-h-screen bg-white">
      <SEOHead
        title="Proof of Execution - Real Results | CWT Studio"
        description="See how we've generated $12M+ in ARR for clients with 420% average growth. Real case studies from infrastructure assessments and revenue sprints."
        keywords="case studies, revenue growth, sales operations results, B2B success stories, ROI proof"
      />
      
      <Breadcrumbs />
      
      {/* Header */}
      <section className="section-spacing-half px-6 border-b-2 border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="system-status">
                  Case Studies
                </div>
              </div>
              <h1 className="heading-page text-primary">Proof of Execution</h1>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <div className="system-monitor">
                <span>4 Deployments</span>
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="system-monitor">
                <span>100% Success</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="relative section-spacing bg-card">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {caseStudies.map(study => <div key={study.id} className="flex-[0_0_100%] min-w-0">
                <div className="px-8 lg:px-20 py-8">
                  <div className="max-w-6xl mx-auto border-4 border-primary rounded-lg p-6 lg:p-10 bg-white shadow-xl">
                    {/* Header Meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-6 pb-4 border-b-2 border-border">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="font-mono text-sm text-primary font-bold">{study.industry}</span>
                      </div>
                      <div className="h-4 w-px bg-border" />
                      <span className="font-mono text-sm text-muted-foreground">{study.vertical}</span>
                      <div className="h-4 w-px bg-border" />
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        <span className="font-mono text-xs text-muted-foreground uppercase">{study.timeline}</span>
                      </div>
                    </div>

                    {/* Main Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      {/* Left Column - Story */}
                      <div className="space-y-6">
                        {/* 1. Context */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-primary font-mono text-xs font-bold">1</span>
                            </div>
                            <h3 className="text-lg font-bold text-primary">Context</h3>
                          </div>
                          <p className="text-sm text-foreground leading-relaxed mb-3">
                            {study.challenge}
                          </p>
                          <blockquote className="border-l-3 border-primary pl-4 py-2 bg-primary/5">
                            <p className="text-base font-mono italic text-foreground">
                              "{study.pullQuote}"
                            </p>
                          </blockquote>
                        </div>

                        {/* 2. System Installed */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                              <span className="text-secondary font-mono text-xs font-bold">2</span>
                            </div>
                            <h3 className="text-lg font-bold text-secondary">System Installed</h3>
                          </div>
                          <div className="space-y-2">
                            {study.system.map((item, idx) => <div key={idx} className="flex items-start gap-2">
                                <Target className="w-3 h-3 text-secondary mt-1 flex-shrink-0" />
                                <span className="text-sm text-foreground">{item}</span>
                              </div>)}
                          </div>
                        </div>

                        {/* 3. Outcome */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                              <span className="text-accent font-mono text-xs font-bold">3</span>
                            </div>
                            <h3 className="text-lg font-bold text-accent">Outcome</h3>
                          </div>
                          <div className="space-y-2">
                            {study.outcomes.map((outcome, idx) => <div key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                                <span className="text-sm text-foreground">{outcome}</span>
                              </div>)}
                          </div>
                        </div>
                      </div>

                        {/* Right Column - Data Visualization */}
                        <div className="lg:sticky lg:top-24 space-y-4">
                          {/* Before/After Visual */}
                          <div className="console-card bg-card border-2 border-border p-6 rounded-lg">
                            <div className="text-center mb-4">
                              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border-2 border-accent/20 rounded-full">
                                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                                  Before
                                </span>
                                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                                <span className="text-xs font-mono text-primary uppercase tracking-wider font-bold">
                                  After
                                </span>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="text-center p-4 bg-white border-2 border-border rounded-lg">
                                <div className="text-xs font-mono text-muted-foreground uppercase mb-1">
                                  {study.beforeMetric.label}
                                </div>
                                <div className="text-xl font-mono text-muted-foreground">
                                  {study.beforeMetric.value}
                                </div>
                              </div>
                              <div className="text-center p-4 bg-accent-data/10 rounded-lg border-2 border-accent-data">
                                <div className="text-xs font-mono accent-data uppercase mb-1">
                                  {study.afterMetric.label}
                                </div>
                                <div className="text-2xl font-mono font-bold accent-data tabular-nums">
                                  {study.afterMetric.value}
                                </div>
                              </div>
                            </div>

                            <div className="text-center py-4 bg-accent-data/10 rounded-lg border-2 border-accent-data">
                              <div className="flex items-center justify-center gap-2 mb-1">
                                <TrendingUp className="w-4 h-4 accent-data" />
                                <span className="text-3xl font-mono font-bold accent-data tabular-nums">
                                  {study.growth}
                                </span>
                              </div>
                              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                                Growth Rate
                              </div>
                            </div>
                          </div>

                          {/* Visual Flow Diagram */}
                          <div className="console-card bg-card border-2 border-border p-4 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col items-center gap-1.5 flex-1">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                  <Zap className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-xs font-mono text-muted-foreground uppercase text-center">
                                  Challenge
                                </span>
                              </div>
                              
                              <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mx-1" />
                              
                              <div className="flex flex-col items-center gap-1.5 flex-1">
                                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                                  <Target className="w-5 h-5 text-secondary" />
                                </div>
                                <span className="text-xs font-mono text-muted-foreground uppercase text-center">
                                  System
                                </span>
                              </div>
                              
                              <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mx-1" />
                              
                              <div className="flex flex-col items-center gap-1.5 flex-1">
                                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                                  <CheckCircle className="w-5 h-5 text-accent" />
                                </div>
                                <span className="text-xs font-mono text-muted-foreground uppercase text-center">
                                  Result
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                              Client Size
                            </div>
                            <div className="text-sm font-mono text-foreground">{study.size}</div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <Button onClick={scrollPrev} size="icon" className="pointer-events-auto w-12 h-12 rounded-full bg-white border-4 border-primary hover:bg-primary text-primary hover:text-white shadow-xl transition-all">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button onClick={scrollNext} size="icon" className="pointer-events-auto w-12 h-12 rounded-full bg-white border-4 border-primary hover:bg-primary text-primary hover:text-white shadow-xl transition-all">
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex items-center justify-center gap-3 py-8">
          {caseStudies.map((_, index) => <button key={index} onClick={() => scrollTo(index)} className={`transition-all duration-300 ${index === selectedIndex ? "w-8 h-2 bg-primary rounded-full" : "w-2 h-2 bg-border rounded-full hover:bg-muted-foreground"}`} aria-label={`Go to slide ${index + 1}`} />)}
        </div>
      </section>

      {/* Strategic CTA Section */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-primary">
              Ready for Similar Results?
            </span>
          </div>
          <h2 className="heading-section mb-6">
            Let's Build Your System
          </h2>
          <p className="text-description mb-8 max-w-2xl mx-auto">
            Every system we build starts with a deep diagnostic. We'll assess your current infrastructure, identify gaps, and create a 90-day roadmap to transform your revenue operations.
          </p>
          <ConversionOptimizedButton
            to="/contact"
            ctaName="Proof Page - Book Assessment"
            location="Proof Page CTA"
            size="lg"
            className="hover-lift hover-glow"
          >
            Get Your Revenue Diagnostic
          </ConversionOptimizedButton>
          <p className="text-xs text-muted-foreground mt-4 font-mono">
            24-hour response time · 50% of assessment fee credits to Sprint
          </p>
        </div>
      </section>

      {/* CTA - Removed in favor of Footer CTA */}
    </div>;
};
export default Proof;