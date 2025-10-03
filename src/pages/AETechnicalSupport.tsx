import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, CheckCircle, Users, AlertTriangle } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const AETechnicalSupport = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Salesforce Technical Support for AEs | CWT Studio"
        description="Request Creator Wealth Tools technical backup for Salesforce deals. Our automation engineers triage complex revenue, web, and mobile requirements within four business hours."
        keywords={[
          'Salesforce AE technical support',
          'business automation solution desk',
          'Creator Wealth Tools assistance',
          'Salesforce deal engineering help',
          'automation technical assessment request'
        ]}
        canonicalUrl="/ae-technical-support"
      />
      {/* Header */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to="/salesforce/partners" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Partner Resources
              </Link>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">Technical Support Request</h1>
              <p className="text-lg text-muted-foreground">
                Get expert technical guidance for your Salesforce deals. We'll respond within 4 business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Deal Technical Assessment Request</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ae-name">Your Name</Label>
                        <Input id="ae-name" placeholder="Account Executive Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ae-email">Your Email</Label>
                        <Input id="ae-email" type="email" placeholder="ae@company.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Your Company</Label>
                        <Input id="company" placeholder="Company Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="urgency">Urgency Level</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low - General consultation</SelectItem>
                            <SelectItem value="medium">Medium - Active deal support</SelectItem>
                            <SelectItem value="high">High - Deal at risk</SelectItem>
                            <SelectItem value="critical">Critical - Closing this week</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="prospect">Prospect Information</Label>
                      <Input id="prospect" placeholder="Company name and key contact" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deal-size">Estimated Deal Size</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select deal size range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Under $50K</SelectItem>
                          <SelectItem value="medium">$50K - $200K</SelectItem>
                          <SelectItem value="large">$200K - $500K</SelectItem>
                          <SelectItem value="enterprise">$500K+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="technical-challenges">Technical Challenges Description</Label>
                      <Textarea 
                        id="technical-challenges" 
                        placeholder="Describe the technical issues, integration requirements, or Salesforce challenges your prospect is facing..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Deal Timeline</Label>
                      <Textarea 
                        id="timeline" 
                        placeholder="When do they need to make a decision? Any key dates or deadlines?"
                        className="min-h-[80px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specific-request">What specific support do you need?</Label>
                      <Textarea 
                        id="specific-request" 
                        placeholder="e.g., Join a technical call, provide assessment, create technical proposal, address specific objections..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <Button className="w-full">
                      Submit Technical Support Request
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      Response Times
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Critical deals</span>
                      <span className="text-sm font-semibold text-primary">2 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">High priority</span>
                      <span className="text-sm font-semibold">4 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Standard requests</span>
                      <span className="text-sm font-semibold">Next business day</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                      What We Provide
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Technical assessment and recommendations</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Join prospect calls as technical expert</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Architecture diagrams and proposals</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Implementation timeline and scope</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-destructive" />
                      Before You Submit
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm text-muted-foreground">
                      Make sure you have:
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Basic prospect contact information</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Clear description of technical challenges</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                      <span className="text-sm">Deal timeline and decision dates</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AETechnicalSupport;
