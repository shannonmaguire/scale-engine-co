import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

const SEOHead = ({ 
  title = "CWT Studio - Revenue System Infrastructure",
  description = "We install the systems that drive revenue. Infrastructure assessments, revenue sprints, and fractional ops for scaling businesses.",
  keywords = "revenue infrastructure, sales operations, revenue sprint, fractional ops, Salesforce consulting, B2B sales systems",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  canonicalUrl,
  noindex = false
}: SEOHeadProps) => {
  const location = useLocation();
  const baseUrl = "https://cwtstudio.com";
  const fullUrl = canonicalUrl || `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Update meta description
    updateMetaTag('description', description);
    
    // Update keywords
    updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', 'website', true);

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Update robots meta tag
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      const robotsTag = document.querySelector('meta[name="robots"]');
      if (robotsTag) {
        robotsTag.remove();
      }
    }

    // Enhanced structured data for Organization + Services
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "CWT Studio",
      "description": description,
      "url": baseUrl,
      "logo": `${baseUrl}/favicon.ico`,
      "image": ogImage,
      "priceRange": "$$$",
      "areaServed": "US",
      "serviceType": ["Revenue Operations", "Sales Infrastructure", "Salesforce Consulting", "Fractional Operations"],
      "knowsAbout": ["Revenue Infrastructure", "Sales Operations", "B2B Systems", "CRM Optimization"],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "hello@cwtstudio.com",
        "contactType": "Sales",
        "availableLanguage": "English"
      },
      "founder": {
        "@type": "Person",
        "name": "Chris Taylor"
      },
      "sameAs": [
        "https://www.linkedin.com/company/cwt-studio"
      ]
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, ogImage, fullUrl, noindex]);

  return null;
};

export default SEOHead;
