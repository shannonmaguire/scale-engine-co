import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, FileText, Zap } from "lucide-react";
import cwtLogoWhite from "@/assets/cwt-logo-horizontal-white.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--burgundy))] text-white border-t border-white/10">
      <div className="container mx-auto px-6 section-spacing">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Brand + CTA */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 pb-16 border-b border-white/10">
            <div className="max-w-xl">
              <img 
                src={cwtLogoWhite} 
                alt="CWT Studio" 
                className="h-10 w-auto mb-6"
              />
              <p className="text-xl font-mono font-bold leading-tight mb-3">
                Revenue Infrastructure That Compounds
              </p>
              <p className="text-white/70 leading-relaxed">
                We install the backend systems that turn execution into sustained competitive advantage.
              </p>
              
              {/* System Status */}
              <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 font-mono text-xs uppercase tracking-wider">
                <div className="w-1.5 h-1.5 bg-[hsl(var(--yellow-green))] animate-pulse" />
                <span>OPERATIONAL</span>
              </div>
            </div>

            {/* Inline CTA */}
            <div className="lg:text-right">
              <p className="text-white/70 mb-4 font-mono text-sm">
                Ready to install your system?
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-white text-[hsl(var(--burgundy))] hover:bg-white/90 font-mono font-bold uppercase tracking-wider"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Book Assessment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="grid md:grid-cols-3 gap-12 py-12 border-b border-white/10">
            {/* Services */}
            <div>
              <h4 className="font-mono font-bold text-xs uppercase tracking-wider mb-4 text-white/50">
                Services
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/services" className="text-white/70 hover:text-white transition-colors font-mono text-sm">
                    Infrastructure Assessment
                  </Link>
                </li>
                <li>
                  <Link to="/sprint" className="text-white/70 hover:text-white transition-colors font-mono text-sm">
                    Revenue Sprint
                  </Link>
                </li>
                <li>
                  <Link to="/fractional" className="text-white/70 hover:text-white transition-colors font-mono text-sm">
                    Fractional Ops
                  </Link>
                </li>
                <li>
                  <Link to="/salesforce" className="text-white/70 hover:text-white transition-colors font-mono text-sm">
                    Salesforce Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-mono font-bold text-xs uppercase tracking-wider mb-4 text-white/50">
                Resources
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/proof" className="text-white/70 hover:text-white transition-colors font-mono text-sm">
                    Proof of Execution
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-white/70 hover:text-white transition-colors font-mono text-sm">
                    The CWT Standard
                  </Link>
                </li>
                <li>
                  <Link to="/sample-report" className="text-white/70 hover:text-white transition-colors font-mono text-sm">
                    Sample Report
                  </Link>
                </li>
                <li>
                  <Link to="/assessment-tools" className="text-white/70 hover:text-white transition-colors font-mono text-sm">
                    Assessment Tools
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company + Contact */}
            <div>
              <h4 className="font-mono font-bold text-xs uppercase tracking-wider mb-4 text-white/50">
                Company
              </h4>
              <ul className="space-y-2.5 mb-6">
                <li>
                  <Link to="/about" className="text-white/70 hover:text-white transition-colors font-mono text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 hover:text-white transition-colors font-mono text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
              
              <div className="space-y-2.5 pt-6 border-t border-white/10">
                <a 
                  href="mailto:hello@cwtstudio.com" 
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-mono text-sm"
                >
                  <Mail className="h-3.5 w-3.5" />
                  hello@cwtstudio.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/50 font-mono text-xs">
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
