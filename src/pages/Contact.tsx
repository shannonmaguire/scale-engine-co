import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { trackEvent } from "@/hooks/usePageTracking";
import { Mail, Phone, Clock, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    path: "",
    objective: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (field: string, value: string) => {
    switch (field) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Please enter a valid email";
      case "name":
        return value.trim().length > 1 ? "" : "Name is required";
      case "company":
        return value.trim().length > 0 ? "" : "Company name is required";
      case "objective":
        return value.trim().length > 10 ? "" : "Please provide more detail (10+ characters)";
      default:
        return "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }
    
    // Track form submission
    trackEvent('Contact Form Submitted', {
      path: formData.path,
      company: formData.company,
    });
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Contact CWT Studio | Get Started with Revenue Infrastructure Assessment"
        description="Book your revenue infrastructure assessment. Get expert analysis of your sales systems, ops, and pipeline. 24-hour response time guaranteed."
        keywords="contact revenue consultant, sales operations assessment, book consultation, revenue infrastructure audit"
      />
      
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
                        onBlur={() => handleBlur("name")}
                        required
                        className={`mt-2 font-mono transition-all ${errors.name && touched.name ? 'border-destructive focus:ring-destructive' : ''}`}
                        aria-describedby="name-error"
                        aria-invalid={!!(errors.name && touched.name)}
                      />
                      {errors.name && touched.name && (
                        <p id="name-error" className="text-xs text-destructive mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-mono text-sm font-medium">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        required
                        className={`mt-2 font-mono transition-all ${errors.email && touched.email ? 'border-destructive focus:ring-destructive' : ''}`}
                        aria-describedby="email-error"
                        aria-invalid={!!(errors.email && touched.email)}
                      />
                      {errors.email && touched.email && (
                        <p id="email-error" className="text-xs text-destructive mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="font-mono text-sm font-medium">Company *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      onBlur={() => handleBlur("company")}
                      required
                      className={`mt-2 font-mono transition-all ${errors.company && touched.company ? 'border-destructive focus:ring-destructive' : ''}`}
                      aria-describedby="company-error"
                      aria-invalid={!!(errors.company && touched.company)}
                    />
                    {errors.company && touched.company && (
                      <p id="company-error" className="text-xs text-destructive mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="path" className="font-mono text-sm font-medium">Choose Path *</Label>
                    <Select onValueChange={(value) => handleInputChange("path", value)}>
                      <SelectTrigger className="mt-2 font-mono" aria-describedby="path-error">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border z-50">
                        <SelectItem value="assessment">Infrastructure Assessment</SelectItem>
                        <SelectItem value="sprint">Revenue Sprint</SelectItem>
                        <SelectItem value="fractional">Fractional Ops</SelectItem>
                        <SelectItem value="salesforce">Salesforce Partnership</SelectItem>
                        <SelectItem value="ae-support">AE Technical Support</SelectItem>
                        <SelectItem value="assessment-tools">Assessment Tools</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="objective" className="font-mono text-sm font-medium">One sentence objective *</Label>
                    <Textarea
                      id="objective"
                      value={formData.objective}
                      onChange={(e) => handleInputChange("objective", e.target.value)}
                      onBlur={() => handleBlur("objective")}
                      placeholder="What's the main challenge you need help solving?"
                      required
                      className={`mt-2 font-mono transition-all ${errors.objective && touched.objective ? 'border-destructive focus:ring-destructive' : ''}`}
                      rows={3}
                      aria-describedby="objective-error"
                      aria-invalid={!!(errors.objective && touched.objective)}
                    />
                    {errors.objective && touched.objective && (
                      <p id="objective-error" className="text-xs text-destructive mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.objective}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full hover-lift hover-glow group relative" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="opacity-0">Submit Request</span>
                        <span className="absolute inset-0 flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        </span>
                      </>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                  
                  {/* Trust signal */}
                  <p className="text-xs text-muted-foreground text-center font-mono flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                    We'll respond within 24 hours
                  </p>
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
                    <p className="text-muted-foreground mb-4 font-mono text-sm">
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
                    <p className="text-sm text-muted-foreground">hello@cwtstudio.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
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
                      <p className="text-sm text-muted-foreground">We review your submission and company background</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Discovery Call</p>
                      <p className="text-sm text-muted-foreground">30-minute call to understand your challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Proposal</p>
                      <p className="text-sm text-muted-foreground">Custom assessment plan and timeline</p>
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
                  <span className="text-muted-foreground">Infrastructure Assessment</span>
                  <span className="font-medium">From $7.5K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Revenue Sprint</span>
                  <span className="font-medium">From $15K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fractional Ops</span>
                  <span className="font-medium">From $5K/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Salesforce Partnership</span>
                  <span className="font-medium">Custom</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">AE Technical Support</span>
                  <span className="font-medium">Custom</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Assessment Tools</span>
                  <span className="font-medium">Custom</span>
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