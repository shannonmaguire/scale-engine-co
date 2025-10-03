import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { StandardCard, StandardCardContent, StandardCardHeader, StandardCardTitle } from "@/components/ui/standard-card";
import { Section } from "@/components/ui/section";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckCircle2, Clock, FileText, AlertCircle, Target, TrendingUp, Zap } from "lucide-react";

const initialFormState = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  companySize: "",
  role: "",
  challenge: "",
  techStack: "",
  timeline: "",
  hearAbout: "",
  privacyConsent: false,
};

const Assessment = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const validateField = (field: string, value: string | boolean): string => {
    if (typeof value === 'boolean') {
      return value ? "" : "You must accept the privacy policy";
    }
    
    switch (field) {
      case "fullName":
        return value.trim().length > 0 ? "" : "Full name is required";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Please enter a valid email";
      case "company":
        return value.trim().length > 0 ? "" : "Company name is required";
      case "role":
        return value.trim().length > 0 ? "" : "Role/title is required";
      case "challenge":
        return value.trim().length > 0 ? "" : "Please describe your challenge";
      case "techStack":
        return value.trim().length > 0 ? "" : "Tech stack is required";
      case "timeline":
        return value.trim().length > 0 ? "" : "Timeline is required";
      case "companySize":
        return value.trim().length > 0 ? "" : "Company size is required";
      case "hearAbout":
        return value.trim().length > 0 ? "" : "Please tell us how you heard about us";
      default:
        return "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const value = formData[key as keyof typeof formData];
      const error = validateField(key, typeof value === 'boolean' ? value : value);
      if (error) newErrors[key] = error;
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const allTouched: Record<string, boolean> = {};
      Object.keys(formData).forEach((key) => {
        allTouched[key] = true;
      });
      setTouched(allTouched);
      return;
    }

    setIsSubmitting(true);
    setStatus(null);
    
    try {
      const response = await fetch("/.netlify/functions/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, serviceInterest: "infrastructure-assessment" }),
      });

      if (!response.ok) throw new Error("Failed to send assessment request");

      setStatus({
        type: "success",
        message: "Assessment request received. We'll send your custom diagnostic proposal within 24 hours.",
      });
      setFormData(initialFormState);
      setErrors({});
      setTouched({});
    } catch (error) {
      setStatus({
        type: "error",
        message: "Unable to submit request. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
        title="Technical Infrastructure Assessment ($7.5K) | CWT Studio"
        description="Get a comprehensive technical debt audit and actionable roadmap. We analyze your Salesforce, integrations, and automation to identify quick wins and long-term improvements."
        keywords={[
          'Salesforce technical assessment',
          'infrastructure audit',
          'technical debt analysis',
          'RevOps assessment',
          'business automation review'
        ]}
        canonicalUrl="/assessment"
      />
      
      <Breadcrumbs />
      
      {/* Hero */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="system-status mb-6">
            FIXED SCOPE • FIXED PRICE
          </div>
          <h1 className="heading-page mb-6">
            Technical Infrastructure Assessment
          </h1>
          <div className="inline-flex items-center justify-center px-6 py-3 bg-primary/10 border border-primary/20 rounded-lg mb-6">
            <span className="text-3xl font-bold text-primary font-mono">$7,500</span>
            <span className="text-muted-foreground ml-2">• One-time engagement</span>
          </div>
          <p className="text-description max-w-2xl mx-auto">
            Get a complete diagnostic of your revenue infrastructure with a prioritized remediation roadmap. 
            Delivered in 7 business days.
          </p>
        </div>

        {/* What You Get */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <StandardCard className="bg-background">
            <StandardCardHeader>
              <FileText className="w-8 h-8 text-primary mb-3" />
              <StandardCardTitle>Technical Debt Audit</StandardCardTitle>
            </StandardCardHeader>
            <StandardCardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Salesforce config review
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Integration health check
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Automation efficiency analysis
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Data quality assessment
                </li>
              </ul>
            </StandardCardContent>
          </StandardCard>

          <StandardCard className="bg-background">
            <StandardCardHeader>
              <Target className="w-8 h-8 text-primary mb-3" />
              <StandardCardTitle>Prioritized Roadmap</StandardCardTitle>
            </StandardCardHeader>
            <StandardCardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Quick wins (0-30 days)
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Medium-term improvements
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Strategic initiatives
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Cost/impact analysis
                </li>
              </ul>
            </StandardCardContent>
          </StandardCard>

          <StandardCard className="bg-background">
            <StandardCardHeader>
              <TrendingUp className="w-8 h-8 text-primary mb-3" />
              <StandardCardTitle>Executive Presentation</StandardCardTitle>
            </StandardCardHeader>
            <StandardCardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Findings walkthrough
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  ROI projections
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Implementation options
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Q&A with your team
                </li>
              </ul>
            </StandardCardContent>
          </StandardCard>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="heading-section text-center mb-12">Assessment Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-mono font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Discovery Call</h3>
              <p className="text-sm text-muted-foreground">30-min intake to understand your systems and pain points</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-mono font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Technical Review</h3>
              <p className="text-sm text-muted-foreground">5 days deep-dive into your infrastructure</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-mono font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Report Delivery</h3>
              <p className="text-sm text-muted-foreground">Comprehensive findings and recommendations document</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-mono font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Readout Session</h3>
              <p className="text-sm text-muted-foreground">60-min presentation with your leadership team</p>
            </div>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="max-w-4xl mx-auto mb-16">
          <StandardCard className="bg-muted/30">
            <StandardCardHeader>
              <StandardCardTitle className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-primary" />
                Why Start With an Assessment?
              </StandardCardTitle>
            </StandardCardHeader>
            <StandardCardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    Avoid Costly Mistakes
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Most companies waste 30-40% of their RevOps budget on the wrong priorities. We identify what actually moves the needle.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center text-sm">
                    <Target className="w-4 h-4 mr-2 text-primary" />
                    Get Quick Wins First
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We always find 3-5 high-impact fixes you can implement immediately, often saving more than the assessment cost.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center text-sm">
                    <FileText className="w-4 h-4 mr-2 text-primary" />
                    Build the Right Roadmap
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Whether you work with us or another partner, you'll have a clear, prioritized plan based on actual data.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                    Justify the Investment
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Get the ROI projections and executive summary you need to secure budget for improvements.
                  </p>
                </div>
              </div>
            </StandardCardContent>
          </StandardCard>
        </div>
      </Section>

      {/* Intake Form */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="heading-section mb-4">Request Your Assessment</h2>
            <p className="text-muted-foreground">
              Complete this intake form and we'll send a custom diagnostic proposal within 24 hours.
            </p>
          </div>

          <StandardCard>
            <StandardCardHeader>
              <StandardCardTitle className="text-primary">Assessment Request</StandardCardTitle>
            </StandardCardHeader>
            <StandardCardContent>
              {status?.type === 'success' && (
                <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-success">{status.message}</p>
                </div>
              )}
              
              {status?.type === 'error' && (
                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-destructive">{status.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="font-mono text-sm font-medium">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      onBlur={() => handleBlur("fullName")}
                      required
                      className={`mt-2 font-mono ${errors.fullName && touched.fullName ? 'border-destructive' : ''}`}
                    />
                    {errors.fullName && touched.fullName && (
                      <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
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
                      className={`mt-2 font-mono ${errors.email && touched.email ? 'border-destructive' : ''}`}
                    />
                    {errors.email && touched.email && (
                      <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="font-mono text-sm font-medium">Company *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      onBlur={() => handleBlur("company")}
                      required
                      className={`mt-2 font-mono ${errors.company && touched.company ? 'border-destructive' : ''}`}
                    />
                    {errors.company && touched.company && (
                      <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="role" className="font-mono text-sm font-medium">Your Role *</Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleInputChange("role", e.target.value)}
                      onBlur={() => handleBlur("role")}
                      placeholder="e.g., VP Revenue Operations"
                      required
                      className={`mt-2 font-mono ${errors.role && touched.role ? 'border-destructive' : ''}`}
                    />
                    {errors.role && touched.role && (
                      <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.role}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="font-mono text-sm font-medium">Phone (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-2 font-mono"
                  />
                </div>

                <div>
                  <Label htmlFor="companySize" className="font-mono text-sm font-medium">Company Size *</Label>
                  <select
                    id="companySize"
                    value={formData.companySize}
                    onChange={(e) => handleInputChange("companySize", e.target.value)}
                    onBlur={() => handleBlur("companySize")}
                    required
                    className={`mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.companySize && touched.companySize ? 'border-destructive' : ''}`}
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1,000 employees</option>
                    <option value="1000+">1,000+ employees</option>
                  </select>
                  {errors.companySize && touched.companySize && (
                    <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.companySize}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="techStack" className="font-mono text-sm font-medium">Current Tech Stack *</Label>
                  <Textarea
                    id="techStack"
                    value={formData.techStack}
                    onChange={(e) => handleInputChange("techStack", e.target.value)}
                    onBlur={() => handleBlur("techStack")}
                    placeholder="List your main tools: CRM, marketing automation, data warehouse, etc."
                    className={`mt-2 font-mono min-h-[80px] ${errors.techStack && touched.techStack ? 'border-destructive' : ''}`}
                    required
                  />
                  {errors.techStack && touched.techStack && (
                    <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.techStack}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="challenge" className="font-mono text-sm font-medium">Main Challenge/Objective *</Label>
                  <Textarea
                    id="challenge"
                    value={formData.challenge}
                    onChange={(e) => handleInputChange("challenge", e.target.value)}
                    onBlur={() => handleBlur("challenge")}
                    placeholder="What revenue operations issues are you trying to solve?"
                    className={`mt-2 font-mono min-h-[100px] ${errors.challenge && touched.challenge ? 'border-destructive' : ''}`}
                    required
                  />
                  {errors.challenge && touched.challenge && (
                    <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.challenge}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="timeline" className="font-mono text-sm font-medium">Desired Timeline *</Label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => handleInputChange("timeline", e.target.value)}
                    onBlur={() => handleBlur("timeline")}
                    required
                    className={`mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.timeline && touched.timeline ? 'border-destructive' : ''}`}
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent (ASAP)</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                  {errors.timeline && touched.timeline && (
                    <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.timeline}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="hearAbout" className="font-mono text-sm font-medium">How did you hear about us? *</Label>
                  <Input
                    id="hearAbout"
                    value={formData.hearAbout}
                    onChange={(e) => handleInputChange("hearAbout", e.target.value)}
                    onBlur={() => handleBlur("hearAbout")}
                    placeholder="Referral, search, LinkedIn, etc."
                    required
                    className={`mt-2 font-mono ${errors.hearAbout && touched.hearAbout ? 'border-destructive' : ''}`}
                  />
                  {errors.hearAbout && touched.hearAbout && (
                    <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.hearAbout}
                    </p>
                  )}
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={(e) => handleInputChange("privacyConsent", e.target.checked)}
                    className="mt-1"
                    required
                  />
                  <Label htmlFor="privacyConsent" className="text-xs text-muted-foreground font-normal">
                    I agree to CWT Studio's privacy policy and consent to being contacted about this assessment. *
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Assessment Proposal"}
                </Button>
              </form>
            </StandardCardContent>
          </StandardCard>
        </div>
      </Section>
    </div>
  );
};

export default Assessment;
