import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Zap, Download, BookOpen, FileText, Calculator, Target, AlertCircle, Clock, CheckCircle2, MessageSquare, Send } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const AEHub = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    aeName: "",
    email: "",
    company: "",
    prospectName: "",
    dealSize: "",
    urgency: "medium",
    challenge: "",
    timeline: "",
    support: ""
  });

  // Scroll to resources if hash is present
  useEffect(() => {
    if (location.hash === "#resources") {
      setTimeout(() => {
        document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);

  const handleSupportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/.netlify/functions/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'ae-support'
        })
      });

      if (!response.ok) throw new Error('Failed to submit');

      toast({
        title: "Request Submitted",
        description: "We'll respond within the timeframe based on urgency.",
      });

      setSupportModalOpen(false);
      setFormData({
        aeName: "",
        email: "",
        company: "",
        prospectName: "",
        dealSize: "",
        urgency: "medium",
        challenge: "",
        timeline: "",
        support: ""
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Please try again or email us directly.",
      });
    }
  };

  const assessmentTools = [
    {
      icon: FileText,
      title: "Technical Debt Assessment",
      type: "Guide",
      format: "PDF",
      pages: "12 pages",
      description: "Complete framework for diagnosing revenue system issues",
      included: [
        "System health scorecard",
        "Common failure patterns",
        "ROI calculator framework",
        "Executive summary template"
      ]
    },
    {
      icon: Calculator,
      title: "Deal Qualification Calculator",
      type: "Tool",
      format: "Excel",
      pages: "Interactive",
      description: "Instant ROI and deal sizing for prospect conversations",
      included: [
        "Time savings calculator",
        "Revenue impact estimator",
        "Implementation timeline",
        "Pricing recommendation"
      ]
    },
    {
      icon: Target,
      title: "Discovery Question Bank",
      type: "Playbook",
      format: "PDF",
      pages: "8 pages",
      description: "Pre-qualified questions that surface technical debt",
      included: [
        "Pain discovery questions",
        "Technical qualification criteria",
        "Objection handling scripts",
        "Qualification flowchart"
      ]
    }
  ];

  const quickWins = [
    {
      scenario: "Prospect mentions data quality issues",
      action: "Offer free 1-hour diagnostic call",
      outcome: "Surface 3-5 quick wins → Assessment engagement"
    },
    {
      scenario: "Deal stalled on technical objections",
      action: "Request technical support (we join next call)",
      outcome: "Address concerns in real-time → Deal unstuck"
    },
    {
      scenario: "Prospect unsure about Salesforce ROI",
      action: "Share Deal Qualification Calculator",
      outcome: "Quantified value → Executive buy-in"
    }
  ];

  const objectionReframes = [
    {
      objection: "We don't have budget for consulting",
      reframe: "This is a diagnostic, not consulting. Under $1.5K to know exactly what's broken and how to fix it.",
      dealAccelerator: "Turns objection into urgency — they're losing money every day they don't know what's wrong"
    },
    {
      objection: "Our Salesforce admin can handle this",
      reframe: "Great! Our assessment helps them prioritize. We find 47 issues on average — what should they tackle first?",
      dealAccelerator: "Positions as enablement for their team, not replacement"
    },
    {
      objection: "We need executive buy-in first",
      reframe: "That's exactly what our assessment provides — a board-ready ROI report with prioritized recommendations.",
      dealAccelerator: "Assessment becomes the tool to GET executive buy-in"
    }
  ];

  const guidanceSections = [
    {
      title: "When to Bring Us In",
      content: [
        "Prospect mentions 'our Salesforce is messy' or similar data quality issues",
        "Deal > $50K ARR and technical concerns are stalling progress",
        "They have a Salesforce admin but struggling with strategic direction",
        "Recent implementation failed or underperforming",
        "Complex integration or automation requirements beyond basic setup"
      ]
    },
    {
      title: "Response Time Expectations",
      content: [
        "Critical/Hot Deal: 4 hours (we'll join your next call if needed)",
        "High Priority: 24 hours (detailed technical response)",
        "Medium Priority: 48 hours (full assessment and strategy)",
        "General Support: 3-5 days (comprehensive guidance)"
      ]
    },
    {
      title: "What We Provide",
      content: [
        "Technical validation for your sales conversations",
        "Objection handling support (we can join prospect calls)",
        "Deal-specific assessment proposals",
        "ROI quantification and business case development",
        "Implementation scoping and timeline estimates"
      ]
    }
  ];

  const handleDownloadToolkit = () => {
    toast({
      title: "Toolkit Downloaded",
      description: "Check your downloads folder for the complete AE toolkit.",
    });
    // In production, this would trigger actual file download
  };

  return (
    <>
      <SEOHead
        title="AE Hub | Coalescent Web Technologies"
        description="Technical support and resources for Account Executives selling Salesforce services. Get deal support, download tools, and access playbooks."
        canonicalUrl="https://coalescentwebtech.com/ae-hub"
      />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-8 border-b border-border">
          <div className="container max-w-7xl">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="system-status mb-4">AE RESOURCES</div>
            <h1 className="heading-page mb-4">
              Your Technical Backstop for Salesforce Deals
            </h1>
            <p className="text-description max-w-3xl">
              Everything you need to close technical Salesforce opportunities. Request support, access tools, and leverage our team as your technical resource.
            </p>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12">
          <div className="container max-w-7xl">
            <h2 className="heading-section mb-8 text-center">Quick Actions</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Technical Support */}
              <Dialog open={supportModalOpen} onOpenChange={setSupportModalOpen}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:border-primary transition-all hover:shadow-lg group">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <MessageSquare className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle>Request Technical Support</CardTitle>
                      <CardDescription>
                        Get expert help on your deal within 4-48 hours
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Open Request Form
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Request Technical Support</DialogTitle>
                    <DialogDescription>
                      Tell us about your deal and we'll provide technical backup within the urgency timeframe.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleSupportSubmit} className="space-y-6 mt-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="aeName">Your Name *</Label>
                        <Input
                          id="aeName"
                          value={formData.aeName}
                          onChange={(e) => setFormData({ ...formData, aeName: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Your Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Your Company *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="prospectName">Prospect/Company Name *</Label>
                        <Input
                          id="prospectName"
                          value={formData.prospectName}
                          onChange={(e) => setFormData({ ...formData, prospectName: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="dealSize">Estimated Deal Size</Label>
                        <Input
                          id="dealSize"
                          placeholder="e.g., $50K ARR"
                          value={formData.dealSize}
                          onChange={(e) => setFormData({ ...formData, dealSize: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="urgency">Urgency Level *</Label>
                        <Select value={formData.urgency} onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="critical">Critical - Hot Deal (4hr response)</SelectItem>
                            <SelectItem value="high">High Priority (24hr response)</SelectItem>
                            <SelectItem value="medium">Medium (48hr response)</SelectItem>
                            <SelectItem value="general">General Support (3-5 days)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="challenge">Technical Challenge / Objection *</Label>
                      <Textarea
                        id="challenge"
                        placeholder="What technical concerns or objections are you facing?"
                        value={formData.challenge}
                        onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="timeline">Deal Timeline</Label>
                      <Input
                        id="timeline"
                        placeholder="When do you need to close this?"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="support">What kind of support do you need?</Label>
                      <Textarea
                        id="support"
                        placeholder="e.g., Join discovery call, provide technical proposal, answer specific questions"
                        value={formData.support}
                        onChange={(e) => setFormData({ ...formData, support: e.target.value })}
                        rows={3}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Submit Request
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              {/* Download Toolkit */}
              <Card className="cursor-pointer hover:border-primary transition-all hover:shadow-lg group" onClick={handleDownloadToolkit}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Download className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Download Complete Toolkit</CardTitle>
                  <CardDescription>
                    Get all assessment tools, calculators, and playbooks
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Instant Download (.zip)
                  </Button>
                </CardContent>
              </Card>

              {/* Deal Playbook */}
              <Card className="cursor-pointer hover:border-primary transition-all hover:shadow-lg group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>View Deal Playbook</CardTitle>
                  <CardDescription>
                    Quick wins framework and objection handling
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => document.getElementById('playbook')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Below
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resources Library */}
        <section id="resources" className="py-16 bg-muted/30">
          <div className="container max-w-7xl">
            <h2 className="heading-section mb-4 text-center">Resources Library</h2>
            <p className="text-description text-center mb-12 max-w-2xl mx-auto">
              Downloadable tools, calculators, and frameworks to qualify prospects and accelerate deals.
            </p>

            <Tabs defaultValue="tools" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="calculators">Calculators</TabsTrigger>
                <TabsTrigger value="playbooks">Playbooks</TabsTrigger>
              </TabsList>

              <TabsContent value="tools" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {assessmentTools.map((tool, index) => {
                    const IconComponent = tool.icon;
                    return (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                              {tool.format}
                            </span>
                          </div>
                          <CardTitle className="text-lg">{tool.title}</CardTitle>
                          <CardDescription>{tool.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3 mb-4">
                            <p className="text-sm text-muted-foreground font-medium">Included:</p>
                            <ul className="space-y-2">
                              {tool.included.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Button variant="outline" className="w-full">
                            <Download className="w-4 h-4 mr-2" />
                            Download {tool.format}
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="calculators">
                <Card>
                  <CardHeader>
                    <CardTitle>ROI & Deal Sizing Calculators</CardTitle>
                    <CardDescription>
                      Interactive tools to quantify value for your prospects
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border border-border rounded-lg">
                        <Calculator className="w-8 h-8 text-primary mb-3" />
                        <h3 className="font-semibold mb-2">Time Savings Calculator</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Quantify hours saved from automation and process improvements
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          <Download className="w-3 h-3 mr-2" />
                          Download Excel
                        </Button>
                      </div>
                      <div className="p-4 border border-border rounded-lg">
                        <Calculator className="w-8 h-8 text-primary mb-3" />
                        <h3 className="font-semibold mb-2">Revenue Impact Estimator</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Calculate revenue gains from improved forecasting and pipeline visibility
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          <Download className="w-3 h-3 mr-2" />
                          Download Excel
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="playbooks">
                <Card>
                  <CardHeader>
                    <CardTitle>Sales Playbooks & Frameworks</CardTitle>
                    <CardDescription>
                      Proven scripts and methodologies for technical sales
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border border-border rounded-lg flex items-start gap-4">
                        <BookOpen className="w-8 h-8 text-primary flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">Discovery Question Bank</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            Pre-qualified questions that surface technical debt and qualification criteria
                          </p>
                          <Button variant="outline" size="sm">
                            <Download className="w-3 h-3 mr-2" />
                            Download PDF
                          </Button>
                        </div>
                      </div>
                      <div className="p-4 border border-border rounded-lg flex items-start gap-4">
                        <BookOpen className="w-8 h-8 text-primary flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">Objection Handling Scripts</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            Reframes for 15+ common technical objections with deal acceleration strategies
                          </p>
                          <Button variant="outline" size="sm">
                            <Download className="w-3 h-3 mr-2" />
                            Download PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Deal Playbook */}
        <section id="playbook" className="py-16">
          <div className="container max-w-7xl">
            <h2 className="heading-section mb-4 text-center">Deal Acceleration Playbook</h2>
            <p className="text-description text-center mb-12 max-w-2xl mx-auto">
              Turn common objections into opportunities and accelerate stalled deals with proven frameworks.
            </p>

            {/* Quick Wins Framework */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Quick Wins Framework
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {quickWins.map((win, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">Scenario</CardTitle>
                      <CardDescription className="text-foreground font-medium">
                        "{win.scenario}"
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-primary mb-2">Your Action:</p>
                        <p className="text-sm">{win.action}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary mb-2">Expected Outcome:</p>
                        <p className="text-sm">{win.outcome}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Objection Reframes */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Objection Reframes
              </h3>
              <div className="space-y-4">
                {objectionReframes.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg text-muted-foreground">
                        <AlertCircle className="w-5 h-5 inline mr-2" />
                        "{item.objection}"
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-primary mb-2">Your Reframe:</p>
                        <p className="text-foreground">{item.reframe}</p>
                      </div>
                      <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                        <p className="text-sm font-semibold text-primary mb-1">Why This Works:</p>
                        <p className="text-sm">{item.dealAccelerator}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guidance Section */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-4xl">
            <h2 className="heading-section mb-4 text-center">How We Support You</h2>
            <p className="text-description text-center mb-12">
              Guidelines for when and how to leverage our technical team for your deals.
            </p>

            <div className="space-y-4">
              {guidanceSections.map((section, index) => (
                <Collapsible key={index} defaultOpen={index === 0}>
                  <Card>
                    <CollapsibleTrigger className="w-full">
                      <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <CardTitle className="flex items-center justify-between text-left">
                          {section.title}
                          <Clock className="w-5 h-5 text-muted-foreground" />
                        </CardTitle>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent>
                        <ul className="space-y-3">
                          {section.content.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container max-w-4xl text-center">
            <h2 className="heading-section mb-4">Need Immediate Support?</h2>
            <p className="text-description mb-8 max-w-2xl mx-auto">
              Don't let technical objections kill your deal. Our team is here to be your technical backup.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => setSupportModalOpen(true)}>
                <MessageSquare className="w-5 h-5 mr-2" />
                Request Technical Support
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  General Questions
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AEHub;