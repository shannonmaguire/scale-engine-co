import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import cwtLogo from "@/assets/cwt-logo-white.svg";
import { memo } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-[hsl(var(--burgundy))] text-white border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        {/* Logo + Tagline */}
        <div className="mb-12">
          <img 
            src={cwtLogo} 
            alt="CWT Studio" 
            className="h-[38px] sm:h-[42px] md:h-12 w-auto mb-4 hover:opacity-90 transition-opacity"
            style={{ imageRendering: 'crisp-edges' }}
          />
          <p className="text-white/60 font-mono text-sm max-w-md">
            Revenue infrastructure that compounds
          </p>
        </div>

        {/* Navigation Grid - 5 equal columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Services */}
          <div>
            <h4 className="font-mono font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Assessment
                </Link>
              </li>
              <li>
                <Link to="/sprint" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Revenue Sprint
                </Link>
              </li>
              <li>
                <Link to="/fractional" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Fractional Ops
                </Link>
              </li>
              <li>
                <Link to="/salesforce" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Salesforce
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-mono font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/proof" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Proof
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/sample-report" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Sample Report
                </Link>
              </li>
              <li>
                <Link to="/assessment-tools" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mono font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-white/80 hover:text-white transition-colors font-mono text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono font-semibold text-sm uppercase tracking-wider mb-4 text-white">
              Contact
            </h4>
            <div className="space-y-2">
              <a href="mailto:hello@cwtstudio.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors font-mono text-sm">
                <Mail className="h-3.5 w-3.5" />
                hello@cwtstudio.com
              </a>
              <Button asChild size="sm" variant="outline" className="mt-4 border-white/20 text-white hover:bg-white/10">
                <Link to="/contact">
                  Book Assessment
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-white/40 font-mono text-xs">
            © {currentYear} CWT Studio
          </p>
          <span className="text-white/30 font-mono text-xs uppercase tracking-wider">
            Revenue Infrastructure • Systematized Growth • Operational Excellence
          </span>
        </div>
      </div>
    </footer>;
};

export default memo(Footer);