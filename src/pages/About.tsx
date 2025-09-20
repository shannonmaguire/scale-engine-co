import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Zap, Clock, Palette, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We diagnose before we prescribe. Every recommendation is backed by data and benchmarked against best practices."
    },
    {
      icon: Zap,
      title: "Ownership", 
      description: "We take responsibility for outcomes, not just deliverables. Your success is our success."
    },
    {
      icon: Clock,
      title: "Speed",
      description: "Revenue systems can't wait for perfect. We optimize for speed of implementation and time to value."
    },
    {
      icon: Palette,
      title: "Taste",
      description: "Good systems are elegant systems. We build infrastructure that's as beautiful as it is functional."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="blueprint-line mx-auto mb-4 w-fit">
            <span className="text-sm text-muted-foreground uppercase tracking-wide">About</span>
          </div>
          <h1 className="font-grotesk text-4xl lg:text-5xl font-bold mb-6">
            Built for Operators
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            CWT Studio exists because scaling businesses deserve revenue systems that work. 
            No endless decks. No random tools. No noise.
          </p>
        </div>

        {/* Founder Bio */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <div className="bg-muted/30 rounded-lg aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">CW</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Founder Photo</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="font-grotesk text-2xl font-bold mb-6">Leadership</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Christopher Thompson</strong> spent 15 years building and breaking revenue systems 
                  at companies from Series A to IPO. Former VP Revenue Operations at three unicorns. 
                  Former Salesforce Principal Solutions Engineer.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Built the revenue infrastructure that supported $100M+ ARR scale at two different companies. 
                  Seen every way a system can fail when the backend can't hold the growth.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Started CWT Studio to give growing businesses the same quality of revenue infrastructure 
                  that enterprise companies get, without the enterprise timeline or complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-grotesk text-3xl font-bold mb-4">How We Operate</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide every engagement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-grotesk text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-16">
          <div className="bg-muted/30 rounded-lg p-8">
            <h2 className="font-grotesk text-2xl font-bold mb-6 text-center">Our Philosophy</h2>
            <div className="max-w-2xl mx-auto text-center">
              <blockquote className="text-lg text-muted-foreground italic leading-relaxed mb-6">
                "Revenue systems are like plumbing. When they work, nobody thinks about them. 
                When they break, they break everything else."
              </blockquote>
              <p className="text-muted-foreground">
                We build systems that work so well, you forget they're there. Until you need to scale. 
                Then you're grateful they can handle whatever growth throws at them.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="mb-16">
          <h2 className="font-grotesk text-2xl font-bold mb-8">Expertise Areas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-border rounded-lg">
              <h3 className="font-grotesk font-bold mb-2">Revenue Operations</h3>
              <p className="text-sm text-muted-foreground">Process, governance, and optimization</p>
            </div>
            <div className="text-center p-6 border border-border rounded-lg">
              <h3 className="font-grotesk font-bold mb-2">Salesforce Architecture</h3>
              <p className="text-sm text-muted-foreground">Platform design and integration</p>
            </div>
            <div className="text-center p-6 border border-border rounded-lg">
              <h3 className="font-grotesk font-bold mb-2">Marketing Technology</h3>
              <p className="text-sm text-muted-foreground">Automation and attribution</p>
            </div>
          </div>
        </section>

        {/* Working with Us */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-grotesk text-2xl font-bold mb-4">Working with CWT Studio</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-grotesk font-bold mb-3">What We Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Deep diagnostic of your revenue infrastructure</li>
                  <li>• Fast implementation of priority fixes</li>
                  <li>• Ongoing optimization and iteration</li>
                  <li>• Executive-level strategic guidance</li>
                </ul>
              </div>
              <div>
                <h3 className="font-grotesk font-bold mb-3">What We Don't Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Long discovery phases without action</li>
                  <li>• Generic solutions that don't fit</li>
                  <li>• Hand over documentation and disappear</li>
                  <li>• Over-engineer simple problems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-grotesk text-2xl font-bold mb-4">
              Ready to build systems that scale?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's diagnose what's slowing down your growth.
            </p>
            <Button asChild size="lg" className="cta-primary">
              <Link to="/contact">
                Book Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;