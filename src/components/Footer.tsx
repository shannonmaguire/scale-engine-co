import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import cwtLogoWhite from "@/assets/cwt-logo-horizontal-white.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--burgundy))] text-white border-t-2 border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-12 gap-16 py-20 border-b border-white/10">
            
            {/* Brand Column - Wider */}
            <div className="lg:col-span-5">
              <img 
                src={cwtLogoWhite} 
                alt="CWT Studio" 
                className="h-8 w-auto mb-6"
              />
              <p className="text-base leading-relaxed text-white/80 max-w-md">
                We install the backend systems that turn execution into sustained competitive advantage.
              </p>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h4 className="font-mono font-bold text-xs uppercase tracking-wider mb-5 text-white">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/services" className="text-white/70 hover:text-white transition-colors text-sm">
                    Infrastructure Assessment
                  </Link>
                </li>
                <li>
                  <Link to="/sprint" className="text-white/70 hover:text-white transition-colors text-sm">
                    Revenue Sprint
                  </Link>
                </li>
                <li>
                  <Link to="/fractional" className="text-white/70 hover:text-white transition-colors text-sm">
                    Fractional Ops
                  </Link>
                </li>
                <li>
                  <Link to="/salesforce" className="text-white/70 hover:text-white transition-colors text-sm">
                    Salesforce
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="lg:col-span-2">
              <h4 className="font-mono font-bold text-xs uppercase tracking-wider mb-5 text-white">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/proof" className="text-white/70 hover:text-white transition-colors text-sm">
                    Proof of Execution
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-white/70 hover:text-white transition-colors text-sm">
                    The CWT Standard
                  </Link>
                </li>
                <li>
                  <Link to="/sample-report" className="text-white/70 hover:text-white transition-colors text-sm">
                    Sample Report
                  </Link>
                </li>
                <li>
                  <Link to="/assessment-tools" className="text-white/70 hover:text-white transition-colors text-sm">
                    Assessment Tools
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company + Contact */}
            <div className="lg:col-span-3">
              <h4 className="font-mono font-bold text-xs uppercase tracking-wider mb-5 text-white">
                Company
              </h4>
              <ul className="space-y-3 mb-8">
                <li>
                  <Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
              
              <a 
                href="mailto:hello@cwtstudio.com" 
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm mb-6"
              >
                <Mail className="h-4 w-4" />
                hello@cwtstudio.com
              </a>

              <Button 
                asChild 
                size="sm"
                className="bg-white text-[hsl(var(--burgundy))] hover:bg-white/90 font-mono font-bold text-xs uppercase tracking-wider"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Book Assessment
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/50 text-sm">
              © {currentYear} CWT Studio. All systems operational.
            </p>
            <span className="text-white/40 font-mono text-xs uppercase tracking-wider">
              Built for Operators
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
