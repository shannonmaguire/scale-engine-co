import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  ogImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

const SEOHead = ({
  title = 'CWT Studio | Business Automation & Salesforce Specialists',
  description = 'CWT Studio delivers business automation, Salesforce optimization, and custom software to help operators scale with confidence.',
  keywords = [
    'studio',
    'cwtstudio.com',
    'Creator Wealth Tools',
    'business automation services',
    'Salesforce implementation',
    'web development agency',
    'mobile app development',
    'revenue operations consultant'
  ],
  ogImage = 'https://lovable.dev/opengraph-image-p98pqg.png',
  canonicalUrl,
  noindex = false
}: SEOHeadProps) => {
  const location = useLocation();
  const baseUrl = 'https://cwtstudio.com';
  const fullUrl = canonicalUrl
    ? canonicalUrl.startsWith('http')
      ? canonicalUrl
      : `${baseUrl}${canonicalUrl}`
    : `${baseUrl}${location.pathname}${location.search}`;

  const resolvedKeywords = Array.isArray(keywords)
    ? keywords
    : keywords.split(',').map((value) => value.trim()).filter(Boolean);

  const mergedKeywords = Array.from(
    new Set([
      'studio',
      'cwtstudio.com',
      'Creator Wealth Tools',
      'business automation',
      'Salesforce experts',
      'web development agency',
      'mobile app development',
      'revenue operations',
      ...resolvedKeywords
    ])
  ).join(', ');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'CWT Studio',
    description,
    url: fullUrl,
    logo: `${baseUrl}/favicon.ico`,
    image: ogImage,
    priceRange: '$$$',
    areaServed: ['United States', 'Canada'],
    serviceType: [
      'Business Automation',
      'Salesforce Consulting',
      'Web Application Development',
      'Mobile App Development',
      'Revenue Operations'
    ],
    knowsAbout: [
      'Salesforce implementation',
      'automation architecture',
      'RevOps playbooks',
      'go-to-market systems'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@cwtstudio.com',
      contactType: 'Sales',
      availableLanguage: ['English']
    },
    sameAs: ['https://www.linkedin.com/company/cwt-studio']
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={mergedKeywords} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="author" content="CWT Studio" />
      <meta name="theme-color" content="#681038" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="CWT Studio" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@cwtstudio" />

      <link rel="canonical" href={fullUrl} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default SEOHead;
