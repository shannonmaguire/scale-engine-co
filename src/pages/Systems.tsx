import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, FileText, Slack, Calendar, BarChart3, Database, Zap } from "lucide-react";

const Systems = () => {
  const toolsWired = [
    { name: "Google Sheets", icon: Database, description: "Single source of truth database" },
    { name: "Apollo/Sales Nav", icon: BarChart3, description: "Lead sources" },
    { name: "Instantly", icon: Zap, description: "Outreach engine" },
    { name: "Calendly", icon: Calendar, description: "Meeting capture" },
    { name: "Slack", icon: Slack, description: "Alerts and digest" },
    { name: "n8n", icon: FileText, description: "Workflow orchestration" }
  ];

  const whyItMatters = [
    "Less manual copy-paste",
    "No lost leads", 
    "Consistent follow up",
    "Daily performance visibility",
    "Built-in unsubscribe and bounce handling"
  ];

  const whatWeShip = [
    { item: "n8n workflow JSON", description: "Complete automation workflow ready to import" },
    { item: "Google Sheet template", description: "6 tabs: Raw_Leads_Import, Master_Leads, Replies, Bookings, Suppression_List, Errors" },
    { item: "Slack integration", description: "Real-time alerts and daily digest at 09:00 ET" },
    { item: "Operation runbook", description: "How to operate, pause, modify, and troubleshoot" }
  ];

  const comingSoon = [
    { name: "Inbound Automation v1", description: "Form to CRM to Slack with lead scoring", status: "Q1 2025" },
    { name: "Pipeline Hygiene Engine", description: "Auto-cleanup, duplicate detection, stage progression alerts", status: "Q1 2025" },
    { name: "Revenue Dashboard v1", description: "Real-time revenue metrics across all systems", status: "Q2 2025" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="console-line mx-auto mb-4 w-fit">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">Operator Engines</span>
            </div>
            <h1 className="font-mono text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Production-ready automation systems
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Battle-tested automation engines installed during Revenue Sprints. No custom development. 
              Hand-off ready with runbooks and monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Outbound Automation v1 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <Badge className="mb-4 system-badge bg-primary text-primary-foreground">
                  v1.0 • PRODUCTION READY
                </Badge>
                <h2 className="font-mono text-3xl lg:text-4xl font-bold mb-6">
                  Outbound Automation v1
                </h2>
                <p className="text-lg text-muted-foreground mb-8 font-mono">
                  Import. Clean. Send. Book.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We wired an outbound engine that removes manual work and keeps everything in one place. 
                  Leads land in a Google Sheet, get cleaned, deduped, and assigned a unique ID. Only net-new, 
                  valid leads move to Instantly through the API. Replies flow back through webhooks, get auto-tagged, 
                  and fire Slack alerts when someone is interested. Calendly bookings are written back to the sheet 
                  and broadcast to Slack. Every morning at 9 ET a digest posts new leads, queued sends, reply mix, 
                  bookings, and any errors. It is repeatable, observable, and easy to hand off.
                </p>

                <div className="mb-8">
                  <h3 className="font-mono text-lg font-bold mb-4">Why it matters</h3>
                  <div className="space-y-3">
                    {whyItMatters.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground font-mono text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="btn-console">
                  <Link to="/contact" className="flex items-center">
                    See the workflow
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-6">
                <Card className="console-card bg-card border-border">
                  <CardHeader>
                    <CardTitle className="font-mono text-lg">Tools Wired</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {toolsWired.map((tool, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <tool.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-mono text-sm font-medium">{tool.name}</div>
                            <div className="text-xs text-muted-foreground">{tool.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="console-card bg-card border-border">
                  <CardHeader>
                    <CardTitle className="font-mono text-lg">The Flow</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm font-mono">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span>Lead capture → Raw_Leads_Import</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span>Enrich & dedupe → Master_Leads</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span>Push to Instantly via API</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span>Webhook replies → auto-tag → Slack</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span>Calendly bookings → write-back</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span>Daily digest at 09:00 ET</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Ship */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-mono text-3xl lg:text-4xl font-bold mb-4">What We Ship</h2>
            <p className="text-xl text-muted-foreground">Everything you need to run production</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whatWeShip.map((item, index) => (
              <Card key={index} className="console-card bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-mono font-bold mb-2">{item.item}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-mono text-3xl lg:text-4xl font-bold mb-4">Coming Soon</h2>
            <p className="text-xl text-muted-foreground">More operator engines in development</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {comingSoon.map((system, index) => (
              <Card key={index} className="console-card bg-card border-border opacity-75">
                <CardContent className="p-6">
                  <Badge className="mb-3 text-xs font-mono bg-muted text-muted-foreground">
                    {system.status}
                  </Badge>
                  <h3 className="font-mono font-bold mb-2">{system.name}</h3>
                  <p className="text-sm text-muted-foreground">{system.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration with Services */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl lg:text-4xl font-bold mb-4">How Systems Fit</h2>
            <p className="text-xl text-muted-foreground">Assessment → Sprint → Fractional</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="font-mono font-bold text-primary">1</span>
              </div>
              <h3 className="font-mono text-lg font-bold mb-2">Assessment</h3>
              <p className="text-sm text-muted-foreground">We identify which systems you need</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="font-mono font-bold text-primary">2</span>
              </div>
              <h3 className="font-mono text-lg font-bold mb-2">Sprint</h3>
              <p className="text-sm text-muted-foreground">We install the operator engines</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="font-mono font-bold text-primary">3</span>
              </div>
              <h3 className="font-mono text-lg font-bold mb-2">Fractional</h3>
              <p className="text-sm text-muted-foreground">We optimize and iterate monthly</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="btn-console">
              <Link to="/contact">
                Start with Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Systems;