import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

      {/* System Demo */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-mono text-3xl lg:text-4xl font-bold mb-4">See It In Action</h2>
            <p className="text-xl text-muted-foreground">Live views from the Outbound Automation v1 system</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="dashboard" className="font-mono text-sm">Dashboard</TabsTrigger>
                <TabsTrigger value="leads" className="font-mono text-sm">Leads</TabsTrigger>
                <TabsTrigger value="replies" className="font-mono text-sm">Replies</TabsTrigger>
                <TabsTrigger value="bookings" className="font-mono text-sm">Bookings</TabsTrigger>
                <TabsTrigger value="settings" className="font-mono text-sm">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="mt-0">
                <Card className="console-card bg-card border-border">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-mono text-lg font-bold mb-2">System Overview</h3>
                      <p className="text-sm text-muted-foreground">Real-time metrics and pipeline health monitoring</p>
                    </div>
                    <div className="aspect-[16/10] bg-muted/30 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="grid grid-cols-5 gap-4 mb-6 text-xs font-mono">
                          <div className="space-y-1">
                            <div className="text-primary font-bold">New Leads</div>
                            <div className="text-2xl font-bold">142</div>
                            <div className="text-green-500">+12% ↗</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-primary font-bold">Queued</div>
                            <div className="text-2xl font-bold">89</div>
                            <div className="text-red-500">-3% ↘</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-primary font-bold">Replies</div>
                            <div className="text-2xl font-bold">23</div>
                            <div className="text-green-500">+8% ↗</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-primary font-bold">Bookings</div>
                            <div className="text-2xl font-bold">7</div>
                            <div className="text-muted-foreground">0%</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-primary font-bold">Errors</div>
                            <div className="text-2xl font-bold">2</div>
                            <div className="text-red-500">-50% ↘</div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground font-mono">Live metrics with Reply Trends and Today's Activity feed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="leads" className="mt-0">
                <Card className="console-card bg-card border-border">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-mono text-lg font-bold mb-2">Lead Management</h3>
                      <p className="text-sm text-muted-foreground">Import, clean, and organize leads in the Master_Leads sheet</p>
                    </div>
                    <div className="aspect-[16/10] bg-muted/30 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                      <div className="text-center p-8 w-full max-w-4xl">
                        <div className="space-y-3 text-xs font-mono">
                          <div className="grid grid-cols-6 gap-4 pb-2 border-b border-border font-bold text-muted-foreground">
                            <div>Name</div>
                            <div>Title</div>
                            <div>Company</div>
                            <div>Email</div>
                            <div>Source</div>
                            <div>Status</div>
                          </div>
                          <div className="grid grid-cols-6 gap-4 py-1">
                            <div>Jane Doe</div>
                            <div>Head of Ops</div>
                            <div>TelecomOne</div>
                            <div className="text-muted-foreground">jane.doe@telecomone.com</div>
                            <div>Apollo</div>
                            <div className="text-green-500">New</div>
                          </div>
                          <div className="grid grid-cols-6 gap-4 py-1">
                            <div>John Smith</div>
                            <div>CIO</div>
                            <div>UtilityCorp</div>
                            <div className="text-muted-foreground">john.smith@utilitycorp.com</div>
                            <div>SalesNav</div>
                            <div className="text-purple-500">Queued</div>
                          </div>
                          <div className="grid grid-cols-6 gap-4 py-1">
                            <div>Marco Ruiz</div>
                            <div>COO</div>
                            <div>FiberNorth</div>
                            <div className="text-muted-foreground">marco@fibernorth.ca</div>
                            <div>SalesNav</div>
                            <div className="text-green-500">Positive Reply</div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground font-mono mt-4">Master Lead Database with Raw Import and Master tabs</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="replies" className="mt-0">
                <Card className="console-card bg-card border-border">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-mono text-lg font-bold mb-2">Reply Tracking</h3>
                      <p className="text-sm text-muted-foreground">Auto-tagged responses with sentiment analysis and Slack alerts</p>
                    </div>
                    <div className="aspect-[16/10] bg-muted/30 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                      <div className="text-center p-8 w-full max-w-4xl">
                        <div className="flex gap-4 mb-6 text-xs font-mono justify-center">
                          <div className="px-3 py-1 bg-primary text-primary-foreground rounded">All (23)</div>
                          <div className="px-3 py-1 bg-green-500/20 text-green-500 rounded">Positive (8)</div>
                          <div className="px-3 py-1 bg-muted rounded">Neutral (7)</div>
                          <div className="px-3 py-1 bg-muted rounded">Not Interested (5)</div>
                          <div className="px-3 py-1 bg-red-500/20 text-red-500 rounded">Unsub (2)</div>
                        </div>
                        <div className="space-y-2 text-xs font-mono">
                          <div className="grid grid-cols-5 gap-4 pb-2 border-b border-border font-bold text-muted-foreground">
                            <div>Lead</div>
                            <div>Company</div>
                            <div>Campaign</div>
                            <div>Disposition</div>
                            <div>Snippet</div>
                          </div>
                          <div className="grid grid-cols-5 gap-4 py-1">
                            <div>Marco Ruiz</div>
                            <div>FiberNorth</div>
                            <div>Q3 Utility Outreach</div>
                            <div className="text-green-500">Positive</div>
                            <div className="text-muted-foreground">"Looks good, can we talk Friday?"</div>
                          </div>
                          <div className="grid grid-cols-5 gap-4 py-1">
                            <div>Jane Doe</div>
                            <div>TelecomOne</div>
                            <div>Telecom Decision Makers</div>
                            <div className="text-muted-foreground">Neutral</div>
                            <div className="text-muted-foreground">"Send details."</div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground font-mono mt-4">AI-powered response categorization with Slack alerts</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bookings" className="mt-0">
                <Card className="console-card bg-card border-border">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-mono text-lg font-bold mb-2">Meeting Capture</h3>
                      <p className="text-sm text-muted-foreground">Calendly bookings automatically written back to the system</p>
                    </div>
                    <div className="aspect-[16/10] bg-muted/30 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                      <div className="text-center p-8 w-full max-w-4xl">
                        <div className="space-y-4 text-xs font-mono">
                          <div className="text-left">
                            <div className="font-bold mb-2">Upcoming Meetings</div>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                                <div>
                                  <div className="font-bold">Marco Ruiz - FiberNorth</div>
                                  <div className="text-muted-foreground">Sept 1 • 10:00-10:30 • Intro Call</div>
                                  <div className="text-xs text-muted-foreground">https://meet.google.com/abc-defg-hij</div>
                                </div>
                                <div className="text-green-500 font-bold">confirmed</div>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                                <div>
                                  <div className="font-bold">John Smith - UtilityCorp</div>
                                  <div className="text-muted-foreground">Sept 3 • 14:00-14:45 • Discovery</div>
                                  <div className="text-xs text-muted-foreground">https://zoom.us/j/123456789</div>
                                </div>
                                <div className="text-green-500 font-bold">confirmed</div>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-red-500">2</div>
                              <div className="text-muted-foreground">This Week</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-500">7</div>
                              <div className="text-muted-foreground">This Month</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-blue-500">85%</div>
                              <div className="text-muted-foreground">Show Rate</div>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground font-mono mt-4">Calendly integration with automatic writeback to system</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="mt-0">
                <Card className="console-card bg-card border-border">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-mono text-lg font-bold mb-2">System Configuration</h3>
                      <p className="text-sm text-muted-foreground">Workflow settings, API connections, and monitoring controls</p>
                    </div>
                    <div className="aspect-[16/10] bg-muted/30 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                      <div className="text-center p-8 w-full max-w-4xl">
                        <div className="text-left">
                          <div className="font-bold mb-4 font-mono text-sm">Connected Services</div>
                          <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                            <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                              <div>
                                <div className="font-bold">Google Sheets</div>
                                <div className="text-muted-foreground">Sync leads and data with Google Sheets</div>
                              </div>
                              <div className="text-green-500 font-bold">Connected</div>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                              <div>
                                <div className="font-bold">Instantly</div>
                                <div className="text-muted-foreground">Email delivery and tracking</div>
                              </div>
                              <div className="text-green-500 font-bold">Connected</div>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                              <div>
                                <div className="font-bold">Calendly</div>
                                <div className="text-muted-foreground">Meeting booking and scheduling</div>
                              </div>
                              <div className="text-green-500 font-bold">Connected</div>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                              <div>
                                <div className="font-bold">Slack</div>
                                <div className="text-muted-foreground">Notifications and team updates</div>
                              </div>
                              <div className="text-muted-foreground font-bold">Pending</div>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                              <div>
                                <div className="font-bold">Apollo</div>
                                <div className="text-muted-foreground">Lead enrichment and data sourcing</div>
                              </div>
                              <div className="text-yellow-500 font-bold">Coming Soon</div>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground font-mono mt-4">Enterprise integrations with API monitoring and health checks</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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