import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage?: string;
  schema?: object;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://static.readdy.ai/image/e0c5e77842c26e0cfc24a07e507d4548/3f31564d42cf84692ecc3116573b3fe4.png',
  schema
}: SEOProps) => {
  useEffect(() => {
    // Update title
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

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://wartepolimento.com.br';
    canonicalLink.href = `${siteUrl}${canonical}`;

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', `${siteUrl}${canonical}`, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', 'website', true);

    // Update Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', ogImage, true);

    // Update last-modified
    const today = new Date().toISOString().split('T')[0];
    updateMetaTag('last-modified', today);

    // Add or update Schema.org JSON-LD
    if (schema) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      
      schemaScript.textContent = JSON.stringify(schema);
    }

    // Cleanup function
    return () => {
      const schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [title, description, keywords, canonical, ogImage, schema]);
};

// Helper function to generate LocalBusiness schema
export const generateLocalBusinessSchema = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://wartepolimento.com.br';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#organization`,
    name: 'Warte Polimento',
    image: 'https://static.readdy.ai/image/e0c5e77842c26e0cfc24a07e507d4548/3f31564d42cf84692ecc3116573b3fe4.png',
    description: 'Empresa especializada em limpeza profissional, polimento, cristalização e restauração de pisos em São Paulo com mais de 24 anos de experiência.',
    url: siteUrl,
    telephone: '+5511985641271',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'São Paulo',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -23.623456,
      longitude: -46.723456
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '14:00'
      }
    ],
    sameAs: [
      'https://wa.me/5511985641271'
    ]
  };
};

// Helper function to generate Service schema
export const generateServiceSchema = (serviceName: string, serviceDescription: string, serviceUrl: string) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://wartepolimento.com.br';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Warte Polimento',
      telephone: '+5511985641271',
      url: siteUrl
    },
    areaServed: {
      '@type': 'City',
      name: 'São Paulo'
    },
    url: `${siteUrl}${serviceUrl}`
  };
};

// Helper function to generate FAQPage schema
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

// Helper function to generate BreadcrumbList schema
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://wartepolimento.com.br';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`
    }))
  };
};
