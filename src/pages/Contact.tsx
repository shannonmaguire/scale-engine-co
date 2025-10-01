import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { trackEvent } from "@/hooks/usePageTracking";
import { Mail, Phone, Clock, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    objective: "",
    privacyConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (field: string, value: string | boolean): string => {
    if (typeof value === 'boolean') {
      return value ? "" : "You must accept the privacy policy";
    }
    
    switch (field) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Please enter a valid email";
      case "company":
        return value.trim().length > 0 ? "" : "Company name is required";
      case "objective":
        return ""; // Optional field
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
      const value = formData[key as keyof typeof formData];
      const error = validateField(key, typeof value === 'boolean' ? value : value);
      if (error) newErrors[key] = error;
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }
    
    // Track form submission
    trackEvent('Contact Form Submitted', {
      company: formData.company,
      hasObjective: !!formData.objective,
    });
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
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
        title="Contact CWT Studio | Get Your Revenue Diagnostic"
        description="Book your revenue infrastructure assessment. Get expert analysis of your sales systems, ops, and pipeline. $12M+ ARR generated for clients. 24-hour response guaranteed."
        keywords="contact revenue consultant, sales operations assessment, book consultation, revenue infrastructure audit"
      />
      
      <Breadcrumbs />
      
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
                    <Label htmlFor="objective" className="font-mono text-sm font-medium">Tell us about your challenge (optional)</Label>
                    <Textarea
                      id="objective"
                      value={formData.objective}
                      onChange={(e) => handleInputChange("objective", e.target.value)}
                      onBlur={() => handleBlur("objective")}
                      placeholder="What's the main challenge you need help solving?"
                      className={`mt-2 font-mono transition-all ${errors.objective && touched.objective ? 'border-destructive focus:ring-destructive' : ''}`}
                      rows={4}
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

                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="privacyConsent"
                      checked={formData.privacyConsent}
                      onCheckedChange={(checked) => handleInputChange("privacyConsent", checked as boolean)}
                      className={errors.privacyConsent && touched.privacyConsent ? 'border-destructive' : ''}
                      aria-describedby="privacy-error"
                      aria-invalid={!!(errors.privacyConsent && touched.privacyConsent)}
                    />
                    <Label htmlFor="privacyConsent" className="text-sm leading-relaxed cursor-pointer">
                      I agree to the{" "}
                      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and consent to the collection and use of my information *
                    </Label>
                  </div>
                  {errors.privacyConsent && touched.privacyConsent && (
                    <p id="privacy-error" className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.privacyConsent}
                    </p>
                  )}

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