import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SEOHead
        title="Page Not Found | CWT Studio"
        description="The page you are looking for is unavailable. Continue exploring CWT Studio business automation, Salesforce, web, and mobile services."
        keywords={[
          'CWT Studio 404',
          'business automation services',
          'Creator Wealth Tools support'
        ]}
        noindex
      />
      <div className="text-center max-w-md mx-auto px-6">
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-3 h-3 bg-destructive rounded-full animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-destructive">
            SYSTEM NOT FOUND
          </span>
        </div>
        
        <h1 className="mb-6 text-6xl font-bold font-mono text-foreground">404</h1>
        <p className="mb-4 text-xl text-foreground font-mono leading-relaxed">
          This page doesn't exist.
        </p>
        <p className="mb-8 text-sm text-muted-foreground font-mono">
          Even the best systems have dead ends.
        </p>
        
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
