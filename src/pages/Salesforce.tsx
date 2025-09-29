import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Users, BarChart3, Clock, Zap, Target, Shield } from "lucide-react";

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
      {/* Hero Section */}
      <section className="section-spacing bg-card border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="system-status mb-6">
              PLATFORM OPTIMIZATION
            </div>
            <h1 className="heading-page mb-6">
              Salesforce Revenue Systems
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your Salesforce investment into a predictable revenue engine. 
              We install the systems that scale—assessment, sprint implementation, and ongoing optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Schedule Free Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-spacing-half">
        <div className="container mx-auto px-6">
          <div className="text-center section-spacing-quarter">
            <h2 className="heading-section mb-4">Revenue Systems for Salesforce</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diagnostic-driven implementations that make Salesforce work harder for your revenue team
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-accent-data transition-colors">
                <CardHeader>
                  <service.icon className="w-10 h-10 accent-data mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 accent-data" />
                    {service.duration}
                  </div>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-spacing-half bg-muted/30">
        <div className="container mx-auto px-6">
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
        </div>
      </section>

      {/* Process */}
      <section className="section-spacing-half">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground">
              A proven process that minimizes disruption while maximizing results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{step.timeline}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Salesforce;