import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import LoadingScreen from "@/components/LoadingScreen";
import Home from "@/pages/Home";
import Sprint from "@/pages/Sprint";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Services from "@/pages/Services";

import Salesforce from "@/pages/Salesforce";
import SalesforcePartners from "@/pages/SalesforcePartners";
import SalesforceDelivery from "@/pages/SalesforceDelivery";
import Fractional from "@/pages/Fractional";
import SampleReport from "@/pages/SampleReport";
import Proof from "@/pages/Proof";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import AETechnicalSupport from "@/pages/AETechnicalSupport";
import AssessmentTools from "@/pages/AssessmentTools";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  useEffect(() => {
    // Check if intro has been seen this session
    const introSeen = sessionStorage.getItem('cwtIntroSeen');
    if (!introSeen) {
      setShowLoadingScreen(true);
    }
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
        <Toaster />
        <Sonner />
        {showLoadingScreen && <LoadingScreen onComplete={handleLoadingComplete} />}
        <BrowserRouter>
          <Navigation />
          <main id="main" tabIndex={-1}>
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
          </main>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
