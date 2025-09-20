import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, DollarSign, Target, CheckCircle, Clock, Handshake } from "lucide-react";

const SalesforcePartners = () => {
  const partnerBenefits = [
    {
      icon: DollarSign,
      title: "Revenue Share",
      description: "Earn 15-25% commission on all closed deals you refer"
    },
    {
      icon: Target,
      title: "Account Support",
      description: "We co-sell with you to maximize close rates"
    },
    {
      icon: Users,
      title: "Client Retention",
      description: "Our delivery model keeps your clients happy long-term"
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Track record of 40%+ conversion improvements"
    }
  ];

  const requirements = [
    "Active Salesforce AE with enterprise accounts",
    "Minimum 2 years experience in revenue operations",
    "Accounts with 50+ users or $500K+ ARR",
    "Commitment to joint sales activities"
  ];

  const process = [
    {
      step: "1",
      title: "Initial Qualification",
      description: "We review your account profile and opportunity sizing"
    },
    {
      step: "2", 
      title: "Joint Discovery",
      description: "Co-present our revenue systems audit to your prospect"
    },
    {
      step: "3",
      title: "Proposal & Close",
      description: "We handle technical delivery, you maintain account relationship"
    },
    {
      step: "4",
      title: "Implementation",
      description: "CloudRoute partnership ensures enterprise-grade delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link to="/salesforce" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Salesforce Solutions
          </Link>
        </div>

        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full text-sm font-mono mb-6">
            <Users className="h-4 w-4" />
            PARTNER PROGRAM
          </div>
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-6">
            Partner with CWT Studio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Expand your Salesforce practice with revenue systems expertise. 
            Joint-sell our specialized services to your enterprise accounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Apply to Partner</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/assessment">See Sample Assessment</Link>
            </Button>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-bold mb-4">Why Partner with Us</h2>
            <p className="text-xl text-muted-foreground">
              Proven revenue systems expertise that complements your Salesforce capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerBenefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <benefit.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partnership Process */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              A streamlined process that maximizes success for both parties
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <div className="bg-muted/30 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="font-mono text-3xl font-bold mb-4">Partner Requirements</h2>
              <p className="text-xl text-muted-foreground">
                We work with experienced AEs who serve enterprise accounts
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>{req}</p>
                  </div>
                ))}
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Typical Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Partner Approval</span>
                    <span className="text-muted-foreground">1-2 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>First Joint Call</span>
                    <span className="text-muted-foreground">Within 30 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deal Close</span>
                    <span className="text-muted-foreground">30-90 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Implementation</span>
                    <span className="text-muted-foreground">4-12 weeks</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-card border border-border rounded-lg p-12">
          <Handshake className="h-12 w-12 mx-auto mb-6 text-primary" />
          <h2 className="font-mono text-3xl font-bold mb-4">Ready to Partner?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our partner network and start earning revenue from your enterprise Salesforce accounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Submit Partner Application</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/salesforce/delivery">View Our Delivery Model</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SalesforcePartners;