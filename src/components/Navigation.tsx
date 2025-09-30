import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import cwtLogo from "@/assets/cwt-logo-horizontal-black.png";
import { memo } from "react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    label: "Home",
    href: "/"
  }, {
    label: "Proof",
    href: "/proof"
  }, {
    label: "Blog",
    href: "/blog"
  }, {
    label: "About",
    href: "/about"
  }];
  const solutionsLinks = [{
    label: "Services",
    href: "/services"
  }, {
    label: "Salesforce",
    href: "/salesforce"
  }, {
    label: "For AEs",
    href: "/salesforce/partners"
  }];
  const isActive = (href: string) => location.pathname === href;
  const isSolutionsActive = () => solutionsLinks.some(link => isActive(link.href));
  return <nav className="sticky top-0 z-50 bg-authority backdrop-blur border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* CWT Studio Official Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity group">
            <div className="relative">
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navLinks.map(link => <Link 
                key={link.href} 
                to={link.href} 
                className={`text-sm font-mono font-medium transition-colors hover:text-success focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2 focus:ring-offset-authority rounded px-2 py-1 ${isActive(link.href) ? "text-white font-semibold" : "text-white/80"}`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>)}
            
            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`text-sm font-mono font-medium transition-colors hover:text-success flex items-center gap-1 ${isSolutionsActive() ? "text-white font-semibold" : "text-white/80"}`}>
                Solutions
                <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-authority border-white/20">
                {solutionsLinks.map(link => <DropdownMenuItem key={link.href} asChild>
                    <Link to={link.href} className="w-full font-mono font-medium text-white hover:text-success">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Primary CTA - Console Button */}
          <div className="hidden md:block">
            <Button asChild className="btn-console">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2 focus:ring-offset-authority rounded" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

          {/* Mobile Navigation */}
        {isOpen && <div id="mobile-navigation" className="md:hidden border-t border-white/20 bg-authority">
            <div className="px-2 pt-2 pb-3 space-y-1" role="navigation" aria-label="Mobile navigation">
              {navLinks.map(link => <Link key={link.href} to={link.href} className={`block px-3 py-2 text-base font-mono font-medium transition-colors hover:text-success ${isActive(link.href) ? "text-white font-semibold" : "text-white/80"}`} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>)}
              
              {/* Solutions section in mobile */}
              <div className="px-3 py-1">
                <div className="text-sm font-mono font-semibold text-white/60 mb-2">Solutions</div>
                {solutionsLinks.map(link => <Link key={link.href} to={link.href} className={`block px-3 py-2 text-base font-mono font-medium transition-colors hover:text-success ${isActive(link.href) ? "text-white font-semibold" : "text-white/80"}`} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>)}
              </div>
              
              <div className="px-3 py-2">
                <Button asChild className="btn-console w-full">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};

export default memo(Navigation);