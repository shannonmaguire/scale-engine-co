import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    path: "",
    objective: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="console-line mx-auto mb-4 w-fit">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">Contact</span>
          </div>
          <h1 className="font-mono text-4xl lg:text-6xl font-bold mb-6">
            Book Your Assessment
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ready to diagnose your revenue system? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="console-card border-border">
              <CardHeader>
                <CardTitle className="font-mono text-2xl">Get Started</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="font-mono text-sm font-medium">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-2 font-mono"
                        aria-describedby="name-error"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-mono text-sm font-medium">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-2 font-mono"
                        aria-describedby="email-error"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="font-mono text-sm font-medium">Company *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      required
                      className="mt-2 font-mono"
                      aria-describedby="company-error"
                    />
                  </div>

                  <div>
                    <Label htmlFor="path" className="font-mono text-sm font-medium">Choose Path *</Label>
                    <Select onValueChange={(value) => handleInputChange("path", value)}>
                      <SelectTrigger className="mt-2 font-mono" aria-describedby="path-error">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="assessment">Infrastructure Assessment</SelectItem>
                        <SelectItem value="sprint">Revenue Sprint</SelectItem>
                        <SelectItem value="fractional">Fractional Ops</SelectItem>
                        <SelectItem value="salesforce">Salesforce Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="objective" className="font-mono text-sm font-medium">One sentence objective *</Label>
                    <Textarea
                      id="objective"
                      value={formData.objective}
                      onChange={(e) => handleInputChange("objective", e.target.value)}
                      placeholder="What's the main challenge you need help solving?"
                      required
                      className="mt-2 font-mono"
                      rows={3}
                      aria-describedby="objective-error"
                    />
                  </div>

                  <Button type="submit" variant="console" className="w-full">
                    Submit Request
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Auto Scheduler Placeholder */}
            <div className="mt-8">
              <Card className="console-card border-border">
                <CardHeader>
                  <CardTitle className="font-mono text-xl flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Schedule a Call
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/10 p-8 text-center console-card">
                    <p className="text-muted-foreground mb-4 font-mono text-sm">
                      Prefer to schedule directly? Choose a time that works for you.
                    </p>
                    <div className="space-y-3">
                      <Button variant="console-secondary" className="w-full font-mono text-sm">
                        Tuesday, Dec 19 - 2:00 PM EST
                      </Button>
                      <Button variant="console-secondary" className="w-full font-mono text-sm">
                        Wednesday, Dec 20 - 10:00 AM EST
                      </Button>
                      <Button variant="console-secondary" className="w-full font-mono text-sm">
                        Thursday, Dec 21 - 3:00 PM EST
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 font-mono">
                      30-minute discovery call
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Info & Process */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="console-card border-border hover:shadow-md transition-shadow duration-150">
              <CardHeader>
                <CardTitle className="font-mono text-xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">hello@cwtstudio.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card className="console-card border-border hover:shadow-md transition-shadow duration-150">
              <CardHeader>
                <CardTitle className="font-mono text-xl">What Happens Next</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Quick Review</p>
                      <p className="text-sm text-muted-foreground">We review your submission and company background</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Discovery Call</p>
                      <p className="text-sm text-muted-foreground">30-minute call to understand your challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Proposal</p>
                      <p className="text-sm text-muted-foreground">Custom assessment plan and timeline</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Context */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-mono font-bold mb-3">Assessment Pricing</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Virtual</span>
                  <span className="font-medium">From $7,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">In-person</span>
                  <span className="font-medium">From $12,500</span>
                </div>
                <div className="border-t border-border pt-2 mt-3">
                  <p className="text-xs text-muted-foreground">
                    50% credit toward Sprint if you proceed within 45 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;