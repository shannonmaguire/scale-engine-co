import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, DollarSign, ArrowRight } from "lucide-react";

const Assessment = () => {
  const deliverables = [
    {
      title: "Revenue Infrastructure Scorecard",
      description: "Comprehensive analysis of tech, ops, and pipeline"
    },
    {
      title: "Benchmarks against peers",
      description: "See how you stack up in your industry and stage"
    },
    {
      title: "90 day roadmap with priority fixes",
      description: "Clear action plan with sequenced improvements"
    },
    {
      title: "Executive readout with leadership",
      description: "Strategic presentation of findings and recommendations"
    }
  ];

  const process = [
    { step: "Kickoff", description: "Scope definition and stakeholder alignment" },
    { step: "Interviews and data", description: "Deep dive with your team and systems" },
    { step: "Scorecard", description: "Analysis and benchmarking against best practices" },
    { step: "Roadmap and readout", description: "Prioritized recommendations and executive presentation" }
  ];

  const faqs = [
    {
      question: "What access do you need?",
      answer: "We'll need admin access to your CRM, marketing automation, and key revenue tools. Plus interviews with sales, marketing, and ops leadership."
    },
    {
      question: "Who should attend the readout?",
      answer: "CEO, CRO, CMO, and VP of Operations. Anyone involved in revenue planning and system decisions."
    },
    {
      question: "How are decisions made during the assessment?",
      answer: "We present findings and recommendations. You decide which fixes to prioritize and whether to move forward with a Sprint."
    },
    {
      question: "What happens after the assessment?",
      answer: "You get a complete roadmap you can execute internally or with us. If you choose a Sprint within 45 days, 50% of the assessment fee applies as credit."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="blueprint-line mx-auto mb-4 w-fit">
            <span className="text-sm text-muted-foreground uppercase tracking-wide">Assessment</span>
          </div>
          <h1 className="font-mono text-4xl lg:text-5xl font-bold mb-6">
            Infrastructure Assessment
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            An MRI for your revenue system. Three to four weeks. Executive ready. Built to be acted on.
          </p>
        </div>

        {/* Deliverables */}
        <section className="mb-16">
          <h2 className="font-mono text-2xl font-bold mb-8">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <Card key={index} className="border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-start gap-3 text-lg">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pl-11">
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Timeline */}
        <section className="mb-16">
          <h2 className="font-mono text-2xl font-bold mb-8">Process</h2>
          <div className="space-y-6">
            {process.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-mono font-bold text-lg mb-1">{item.step}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <div className="bg-muted/30 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="text-center">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-mono font-bold text-lg mb-1">Virtual Assessment</h3>
                <p className="text-2xl font-bold text-primary">From $7,500</p>
              </div>
              
              <div className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-mono font-bold text-lg mb-1">In-Person Assessment</h3>
                <p className="text-2xl font-bold text-primary">From $12,500</p>
              </div>
              
              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                  %
                </div>
                <h3 className="font-mono font-bold text-lg mb-1">Sprint Credit</h3>
                <p className="text-sm text-muted-foreground">50% applies to Sprint if you move forward within 45 days</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="font-mono text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-mono text-2xl font-bold mb-4">
              Ready to diagnose your revenue system?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get the clarity you need to scale with confidence.
            </p>
            <Button asChild variant="console" size="lg">
              <Link to="/contact">
                Book Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;