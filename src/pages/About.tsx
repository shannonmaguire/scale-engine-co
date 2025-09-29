import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Zap, Clock, Palette, ArrowRight } from "lucide-react";
const About = () => {
  const values = [{
    icon: Target,
    title: "Precision",
    description: "We diagnose before we prescribe. Every recommendation is backed by data and benchmarked against best practices."
  }, {
    icon: Zap,
    title: "Ownership",
    description: "We take responsibility for outcomes, not just deliverables. Your success is our success."
  }, {
    icon: Clock,
    title: "Speed",
    description: "Revenue systems can't wait for perfect. We optimize for speed of implementation and time to value."
  }, {
    icon: Palette,
    title: "Taste",
    description: "Good systems are elegant systems. We build infrastructure that's as beautiful as it is functional."
  }];
  return <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-16">
          
          <h1 className="heading-page mb-6">
            Built for Operators
          </h1>
          <p className="text-description max-w-2xl mx-auto">
            CWT Studio exists because scaling businesses deserve revenue systems that work. 
            No endless decks. No random tools. No noise.
          </p>
        </div>

        {/* Founder Bio */}
        <section className="mb-16">
          
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-bold mb-4">How We Operate</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide every engagement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => <Card key={index} className="bg-white border-2 border-border hover:border-primary hover:shadow-md transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="heading-subsection mb-3 text-primary">{value.title}</h3>
                      <p className="text-secondary leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-16">
          <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-8">
            <h2 className="heading-section mb-6 text-center text-primary">Our Philosophy</h2>
            <div className="max-w-2xl mx-auto text-center">
              <blockquote className="text-lg text-primary italic leading-relaxed mb-6 pl-6">
                "Revenue systems are like plumbing. When they work, nobody thinks about them. 
                When they break, they break everything else."
              </blockquote>
              <p className="text-foreground">
                We build systems that work so well, you forget they're there. Until you need to scale. 
                Then you're grateful they can handle whatever growth throws at them.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="mb-16">
          <h2 className="heading-section mb-8 text-primary">Expertise Areas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white border-2 border-border rounded-lg hover:border-accent transition-colors">
              <h3 className="font-mono font-bold mb-2 text-primary">Revenue Operations</h3>
              <p className="text-sm text-secondary">Process, governance, and optimization</p>
            </div>
            <div className="text-center p-6 bg-white border-2 border-border rounded-lg hover:border-accent transition-colors">
              <h3 className="font-mono font-bold mb-2 text-primary">Salesforce Architecture</h3>
              <p className="text-sm text-secondary">Platform design and integration</p>
            </div>
            <div className="text-center p-6 bg-white border-2 border-border rounded-lg hover:border-accent transition-colors">
              <h3 className="font-mono font-bold mb-2 text-primary">Marketing Technology</h3>
              <p className="text-sm text-secondary">Automation and attribution</p>
            </div>
          </div>
        </section>

        {/* Working with Us */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="heading-section mb-6">Working with CWT Studio</h2>
            
            {/* Meet You Where You Are */}
            <div className="mb-8 p-6 bg-accent/10 border-2 border-accent/20 rounded-lg">
              <h3 className="font-mono font-bold mb-4 text-primary">We Meet You Where You Are</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Every company is at a different stage with different constraints. We don't assume you should rip and replace everything. 
                We work with your current systems, timeline, and team to create realistic improvements that stick.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium mb-2 text-foreground">Flexible Engagement</p>
                  <p className="text-xs text-secondary">Virtual or in-person. Sprint or assessment only. Your choice.</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2 text-foreground">Industry Agnostic</p>
                  <p className="text-xs text-secondary">SaaS, services, manufacturing—revenue systems have common patterns.</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-mono font-bold mb-3 text-foreground">What We Do</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Meet you at your current operational state</li>
                  <li>• Deep diagnostic of your revenue infrastructure</li>
                  <li>• Work with existing tools and integrations</li>
                  <li>• Fast implementation of priority fixes</li>
                  <li>• Adapt methodology to your timeline</li>
                  <li>• Ongoing optimization and iteration</li>
                  <li>• Executive-level strategic guidance</li>
                </ul>
              </div>
              <div>
                <h3 className="font-mono font-bold mb-3 text-foreground">What We Don't Do</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Assume you need to start over</li>
                  <li>• Long discovery phases without action</li>
                  <li>• Generic solutions that don't fit your stage</li>
                  <li>• Hand over documentation and disappear</li>
                  <li>• Over-engineer simple problems</li>
                  <li>• Judge your current setup</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="heading-section mb-4">
              Ready to build systems that scale?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's diagnose what's slowing down your growth.
            </p>
            <Button asChild size="lg" className="btn-console">
              <Link to="/contact">
                Book Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default About;