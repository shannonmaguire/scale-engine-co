import { useState } from "react";
import { Button } from "@/components/ui/button";
import { StandardCard } from "@/components/ui/standard-card";
import SEOHead from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ResourceDownloadModal } from "@/components/ResourceDownloadModal";
import { Download, FileText, Calculator, CheckSquare, Map, FileQuestion } from "lucide-react";
import { ConversionOptimizedButton } from "@/components/ConversionOptimizedButton";

interface Resource {
  id: string;
  title: string;
  description: string;
  icon: typeof FileText;
  category: string;
  downloadUrl?: string;
}

const resources: Resource[] = [
  {
    id: "service-selection-guide",
    title: "Service Selection Guide",
    description: "Which engagement model fits your stage? Assessment, Sprint, or Fractional Ops — this framework helps you choose the right path based on your revenue maturity and growth goals.",
    icon: Map,
    category: "Planning"
  },
  {
    id: "roi-calculator",
    title: "ROI Calculator",
    description: "Salesforce cleanup cost/benefit analysis. Calculate the true cost of technical debt vs. the investment required to fix it. Includes pipeline impact, time savings, and risk reduction metrics.",
    icon: Calculator,
    category: "Financial"
  },
  {
    id: "technical-assessment-framework",
    title: "Technical Assessment Framework",
    description: "Self-service diagnostic tool. Audit your current revenue systems across 6 critical dimensions: Data Quality, Automation, Integration, Governance, Reporting, and Adoption.",
    icon: CheckSquare,
    category: "Assessment"
  },
  {
    id: "90-day-roadmap-template",
    title: "90-Day Roadmap Template",
    description: "Implementation planning worksheet. Break down your system installation into weekly milestones with clear deliverables, dependencies, and success criteria.",
    icon: FileText,
    category: "Planning"
  },
  {
    id: "discovery-questions-library",
    title: "Discovery Questions Library",
    description: "For AE deal qualification. 30+ proven discovery questions organized by deal stage, objection type, and technical complexity. Includes response frameworks and next-step triggers.",
    icon: FileQuestion,
    category: "Sales Enablement"
  }
];

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = (resource: Resource) => {
    setSelectedResource(resource);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="CWT Studio Resources | Free Revenue Operations Tools & Frameworks"
        description="Access our library of free resources including assessment frameworks, ROI calculators, roadmap templates, and discovery question libraries for revenue operations excellence."
        keywords={[
          'revenue operations resources',
          'Salesforce ROI calculator',
          'technical assessment framework',
          'implementation roadmap template',
          'sales discovery questions'
        ]}
      />

      <Breadcrumbs />

      {/* Header */}
      <section className="section-spacing-half px-6 border-b-2 border-border">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="system-status">
              Resource Library
            </div>
          </div>
          <h1 className="heading-page text-primary mb-6">
            Revenue Operations Resources
          </h1>
          <p className="text-description text-muted-foreground max-w-3xl">
            Free frameworks, calculators, and assessment tools built from real deployments. 
            All resources are gated by email to ensure you receive updates and related insights.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-spacing px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <StandardCard key={resource.id} className="flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-1">
                        {resource.category}
                      </div>
                      <h3 className="font-mono font-bold text-lg text-foreground">
                        {resource.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6 flex-1">
                    {resource.description}
                  </p>
                  
                  <Button
                    onClick={() => handleDownloadClick(resource)}
                    className="w-full"
                    variant="outline"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resource
                  </Button>
                </StandardCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-section text-foreground mb-6">
            Need Hands-On Support?
          </h2>
          <p className="text-description text-muted-foreground mb-8">
            These resources are self-service starting points. If you need expert guidance 
            on implementation, book a Revenue Diagnostic to map your specific path.
          </p>
          <ConversionOptimizedButton
            to="/contact"
            ctaName="Book Diagnostic"
            location="Resources Page CTA"
            size="lg"
          >
            Book Revenue Diagnostic
          </ConversionOptimizedButton>
        </div>
      </section>

      {/* Resource Download Modal */}
      {selectedResource && (
        <ResourceDownloadModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedResource(null);
          }}
          resourceTitle={selectedResource.title}
          resourceDescription={`Get instant access to our ${selectedResource.title}. Enter your email to download.`}
          downloadUrl={selectedResource.downloadUrl}
        />
      )}
    </div>
  );
};

export default Resources;
