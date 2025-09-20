import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Home from "@/pages/Home";
import Assessment from "@/pages/Assessment";
import Sprint from "@/pages/Sprint";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Systems from "@/pages/Systems";
import Salesforce from "@/pages/Salesforce";
import SalesforcePartners from "@/pages/SalesforcePartners";
import SalesforceDelivery from "@/pages/SalesforceDelivery";
import Fractional from "@/pages/Fractional";
import SampleReport from "@/pages/SampleReport";
import Proof from "@/pages/Proof";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/systems" element={<Systems />} />
          <Route path="/assessment" element={<Assessment />} />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
