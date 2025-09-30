import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import { usePageTracking } from "@/hooks/usePageTracking";
import { usePerformanceMonitoring, reportWebVitals } from "@/hooks/usePerformanceMonitoring";

// Lazy load route components for better performance
const Home = lazy(() => import("@/pages/Home"));
const Sprint = lazy(() => import("@/pages/Sprint"));
const Contact = lazy(() => import("@/pages/Contact"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Salesforce = lazy(() => import("@/pages/Salesforce"));
const SalesforcePartners = lazy(() => import("@/pages/SalesforcePartners"));
const SalesforceDelivery = lazy(() => import("@/pages/SalesforceDelivery"));
const Fractional = lazy(() => import("@/pages/Fractional"));
const SampleReport = lazy(() => import("@/pages/SampleReport"));
const Proof = lazy(() => import("@/pages/Proof"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const AETechnicalSupport = lazy(() => import("@/pages/AETechnicalSupport"));
const AssessmentTools = lazy(() => import("@/pages/AssessmentTools"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Inner component to use hooks after Router is mounted
const AppContent = () => {
  usePageTracking();
  usePerformanceMonitoring();

  return (
    <>
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse text-muted-foreground font-mono">Loading...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/systems" element={<Navigate to="/services" replace />} />
            <Route path="/assessment" element={<Navigate to="/contact" replace />} />
            <Route path="/sprint" element={<Sprint />} />
            <Route path="/salesforce" element={<Salesforce />} />
            <Route path="/salesforce/partners" element={<SalesforcePartners />} />
            <Route path="/salesforce/delivery" element={<SalesforceDelivery />} />
            <Route path="/fractional" element={<Fractional />} />
            <Route path="/sample-report" element={<SampleReport />} />
            <Route path="/proof" element={<Proof />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ae-technical-support" element={<AETechnicalSupport />} />
            <Route path="/assessment-tools" element={<AssessmentTools />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  useEffect(() => {
    // Check if intro has been seen this session
    const introSeen = sessionStorage.getItem('cwtIntroSeen');
    if (!introSeen) {
      setShowLoadingScreen(true);
    }

    // Report web vitals
    reportWebVitals();
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('cwtIntroSeen', 'true');
    setShowLoadingScreen(false);
    
    // Return focus to main content
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.focus();
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary>
          <Toaster />
          <Sonner />
          {showLoadingScreen && <LoadingScreen onComplete={handleLoadingComplete} />}
          <BrowserRouter>
            {/* Skip to main content link for accessibility */}
            <a href="#main-content" className="skip-to-main">
              Skip to main content
            </a>
            <AppContent />
          </BrowserRouter>
        </ErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
