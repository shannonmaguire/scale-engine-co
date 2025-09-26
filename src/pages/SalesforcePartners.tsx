import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Download, MessageSquare, ArrowRight, Slack, Linkedin, Database, Settings } from "lucide-react";

const SalesforcePartners = () => {
  const toolIntegrations = [
    {
      icon: MessageSquare,
      name: "Quip",
      description: "Documentation and collaboration workflows synced with Salesforce records"
    },
    {
      icon: Slack,
      name: "Slack",
      description: "Real-time notifications for pipeline changes and deal updates"
    },
    {
      icon: Linkedin,
      name: "LinkedIn Sales Navigator",
      description: "Contact enrichment and social selling data integration"
    },
    {
      icon: Database,
      name: "Sales Hub",
      description: "Bidirectional sync and unified reporting across platforms"
    }
  ];

  const quickChecklist = [
    "Data quality issues causing deal delays",
    "Manual processes eating up selling time", 
    "Inconsistent reporting across teams",
    "Poor adoption of current Salesforce features",
    "Integration gaps between tools",
    "Unclear pipeline visibility for management"
  ];

  const resources = [
    {
      title: "Salesforce Health Check Template",
      description: "Self-assessment checklist for your current setup",
      type: "Checklist"
    },
    {
      title: "Integration Mapping Worksheet", 
      description: "Map your current tools to Salesforce workflows",
      type: "Template"
    },
    {
      title: "ROI Calculator",
      description: "Estimate time savings from automation improvements",
      type: "Calculator"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Letter Header */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-sm text-muted-foreground font-mono mb-2">Internal Resource</p>
              <h1 className="text-3xl lg:text-4xl font-bold mb-6">Hey Sales Team,</h1>
              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-4">
                  I know you're juggling between Quip docs, Slack threads, LinkedIn Sales Navigator, and your Sales Hub — 
                  and somehow Salesforce still feels like it's working against you instead of with you.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  This isn't another "let's rebuild everything" pitch. This is about making your current stack actually work together. 
                  We've done this for teams already using your exact setup, so we know what works and what doesn't.
                </p>
                <p className="text-lg leading-relaxed">
                  Below are the practical details of how we approach Salesforce optimization for teams like yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">What We Actually Do</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-3">Week 1-2: Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  We audit your current Salesforce setup and how it connects (or doesn't connect) with your existing tools. 
                  No judgment on what you've built so far — we work with what you have.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Week 3-8: Implementation</h3>
                <p className="text-muted-foreground mb-4">
                  Focused sprint to fix the biggest pain points. Our partner CloudRoute handles the technical build 
                  while we manage the project and ensure it fits your workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Integration */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">How It Works with Your Current Stack</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {toolIntegrations.map((tool, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <tool.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">{tool.name}</h3>
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Assessment */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Quick Assessment Checklist</h2>
            <p className="text-muted-foreground mb-6">
              If you're experiencing any of these issues, we can probably help:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {quickChecklist.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Resources You Can Use Right Now</h2>
            <div className="space-y-4 mb-8">
              {resources.map((resource, index) => (
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

      {/* Next Steps */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
            <div className="prose prose-lg max-w-none text-foreground mb-8">
              <p className="text-base leading-relaxed mb-4">
                If this sounds like it could help your situation, the easiest next step is a 30-minute assessment call. 
                We'll look at your current setup and give you honest feedback on what's worth fixing and what isn't.
              </p>
              <p className="text-base leading-relaxed mb-4">
                No sales pitch, no commitment required. Just practical advice from someone who's seen your exact problems before.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-console">
                <Link to="/contact">
                  Schedule Assessment Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/assessment">
                  Start with Self-Assessment
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