import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, FileText, Zap } from "lucide-react";
import cwtLogoWhite from "@/assets/cwt-logo-horizontal-white.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--burgundy))] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Brand Lock */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <img 
                src={cwtLogoWhite} 
                alt="CWT Studio" 
                className="h-12 w-auto mb-8"
              />
              <p className="text-2xl font-mono font-bold leading-tight mb-4">
                Revenue Infrastructure That Compounds
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                We install the backend systems that turn execution into sustained competitive advantage.
              </p>
              
              {/* System Status Indicator */}
              <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 bg-white/10 border border-white/20 rounded font-mono text-xs uppercase tracking-wider">
                <div className="w-2 h-2 bg-[hsl(var(--yellow-green))] rounded-full animate-pulse" />
                <span>SYSTEM OPERATIONAL</span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white/5 border-2 border-white/20 p-12 rounded-lg">
              <h3 className="text-3xl font-mono font-bold mb-4">
                Ready to Install Your System?
              </h3>
              <p className="text-white/80 mb-8 text-lg">
                Book an assessment. Get the diagnostic. See what's possible.
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-white text-[hsl(var(--burgundy))] hover:bg-white/90 font-mono font-bold uppercase tracking-wider w-full sm:w-auto"
              >
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  <Zap className="h-5 w-5" />
                  Book Assessment
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-white/20">
            {/* Services */}
            <div>
              <h4 className="font-mono font-bold text-sm uppercase tracking-wider mb-6 text-white/60">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/services" className="text-white/90 hover:text-white transition-colors font-mono text-sm">
                    Infrastructure Assessment
                  </Link>
                </li>
                <li>
                  <Link to="/sprint" className="text-white/90 hover:text-white transition-colors font-mono text-sm">
                    Revenue Sprint
                  </Link>
                </li>
                <li>
                  <Link to="/fractional" className="text-white/90 hover:text-white transition-colors font-mono text-sm">
                    Fractional Ops
                  </Link>
                </li>
                <li>
                  <Link to="/salesforce" className="text-white/90 hover:text-white transition-colors font-mono text-sm">
                    Salesforce Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-mono font-bold text-sm uppercase tracking-wider mb-6 text-white/60">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/proof" className="text-white/90 hover:text-white transition-colors font-mono text-sm">
                    Proof of Execution
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-white/90 hover:text-white transition-colors font-mono text-sm">
                    The CWT Standard
                  </Link>
                </li>
                <li>
                  <Link to="/sample-report" className="text-white/90 hover:text-white transition-colors font-mono text-sm">
                    Sample Report
                  </Link>
                </li>
                <li>
                  <Link to="/assessment-tools" className="text-white/90 hover:text-white transition-colors font-mono text-sm">
                    Assessment Tools
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-mono font-bold text-sm uppercase tracking-wider mb-6 text-white/60">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-white/90 hover:text-white transition-colors font-mono text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/90 hover:text-white transition-colors font-mono text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-mono font-bold text-sm uppercase tracking-wider mb-6 text-white/60">
                Get in Touch
              </h4>
              <div className="space-y-4">
                <a 
                  href="mailto:hello@cwtstudio.com" 
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-mono text-sm"
                >
                  <Mail className="h-4 w-4" />
                  hello@cwtstudio.com
                </a>
                <Link 
                  to="/contact" 
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-mono text-sm"
                >
                  <FileText className="h-4 w-4" />
                  Schedule Call
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 font-mono text-xs">
              © {currentYear} CWT Studio. All systems operational.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-white/40 font-mono text-xs uppercase tracking-wider">
                Built for Operators
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
