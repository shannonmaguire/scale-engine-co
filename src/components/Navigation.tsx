import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import cwtLogoMark from "@/assets/cwt-logo-mark.svg";
import cwtLogoHorizontal from "@/assets/cwt-logo-horizontal.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Proof", href: "/proof" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ];

  const solutionsLinks = [
    { label: "Services", href: "/services" },
    { label: "Salesforce", href: "/salesforce" },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isSolutionsActive = () => solutionsLinks.some(link => isActive(link.href));

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* CWT Studio Official Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
            <div className="relative">
              <img 
                src={cwtLogoMark} 
                alt="CWT Studio - Revenue Systems Consulting"
                className="h-10 w-10 transition-transform group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-mono font-bold text-xl text-foreground tracking-tight">
                CWT
              </div>
              <div className="font-mono text-xs text-muted-foreground -mt-1 tracking-wider">
                STUDIO
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-mono font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`text-sm font-mono font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                isSolutionsActive() ? "text-primary" : "text-foreground"
              }`}>
                Solutions
                <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {solutionsLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      to={link.href}
                      className={`w-full font-mono font-medium ${
                        isActive(link.href) ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
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
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block px-3 py-2 text-base font-mono font-medium transition-colors hover:text-primary ${
                    isActive(link.href) ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Solutions section in mobile */}
              <div className="px-3 py-1">
                <div className="text-sm font-mono font-semibold text-muted-foreground mb-2">Solutions</div>
                {solutionsLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block px-3 py-2 text-base font-mono font-medium transition-colors hover:text-primary ${
                      isActive(link.href) ? "text-primary" : "text-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <div className="px-3 py-2">
                <Button asChild className="btn-console w-full">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;