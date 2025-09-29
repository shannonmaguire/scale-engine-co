import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
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
    <div className="min-h-screen">
      <Section>
        {/* Hero */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="system-status mb-6">
            INTAKE READY
          </div>
          <h1 className="heading-page mb-6">
            Get Started
          </h1>
          <p className="text-description max-w-2xl mx-auto">
            Ready to optimize your revenue system? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <StandardCard>
              <StandardCardHeader>
                <StandardCardTitle className="text-primary">Get Started</StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent>
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

                  <Button type="submit" className="w-full">
                    Submit Request
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </StandardCardContent>
            </StandardCard>

            {/* Auto Scheduler Placeholder */}
            <div className="mt-8">
              <StandardCard>
                <StandardCardHeader>
                  <StandardCardTitle className="font-mono flex items-center gap-2 text-primary">
                    <Clock className="w-5 h-5 text-primary" />
                    Schedule a Call
                  </StandardCardTitle>
                </StandardCardHeader>
                <StandardCardContent>
                  <div className="bg-card border border-border p-8 text-center console-card">
                    <p className="text-secondary mb-4 font-mono text-sm">
                      Prefer to schedule directly? Choose a time that works for you.
                    </p>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full font-mono text-sm">
                        Tuesday, Dec 19 - 2:00 PM EST
                      </Button>
                      <Button variant="outline" className="w-full font-mono text-sm">
                        Wednesday, Dec 20 - 10:00 AM EST
                      </Button>
                      <Button variant="outline" className="w-full font-mono text-sm">
                        Thursday, Dec 21 - 3:00 PM EST
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 font-mono">
                      30-minute discovery call
                    </p>
                  </div>
                </StandardCardContent>
              </StandardCard>
            </div>
          </div>

          {/* Contact Info & Process */}
          <div className="space-y-8">
            {/* Contact Details */}
            <StandardCard>
              <StandardCardHeader>
                <StandardCardTitle className="font-mono text-primary">Get in Touch</StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-secondary">hello@cwtstudio.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-sm text-secondary">Within 24 hours</p>
                  </div>
                </div>
              </StandardCardContent>
            </StandardCard>

            {/* What Happens Next */}
            <StandardCard>
              <StandardCardHeader>
                <StandardCardTitle className="font-mono text-primary">What Happens Next</StandardCardTitle>
              </StandardCardHeader>
              <StandardCardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Quick Review</p>
                      <p className="text-sm text-secondary">We review your submission and company background</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Discovery Call</p>
                      <p className="text-sm text-secondary">30-minute call to understand your challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Proposal</p>
                      <p className="text-sm text-secondary">Custom assessment plan and timeline</p>
                    </div>
                  </div>
                </div>
              </StandardCardContent>
            </StandardCard>

            {/* Service Context */}
            <StandardCard variant="muted">
              <h3 className="font-mono font-bold mb-3">Our Services</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Revenue Sprint</span>
                  <span className="font-medium">From $15K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fractional Ops</span>
                  <span className="font-medium">Monthly</span>
                </div>
                <div className="border-t border-border pt-2 mt-3">
                  <p className="text-xs text-muted-foreground">
                    Custom pricing based on your needs
                  </p>
                </div>
              </div>
            </StandardCard>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;