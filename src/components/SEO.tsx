import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  keywords?: string[];
  jsonLd?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl = window.location.href,
  ogType = 'website',
  keywords = [
    'چک لیست طراحی',
    'دیزاین چک لیست',
    'اصول UX',
    'طراحی UI',
    'تجربه کاربری',
    'رابط کاربری',
    'طراحی فیگما',
    'دسترسی‌پذیری WCAG',
  ],
  jsonLd,
}) => {
  useEffect(() => {
    // Update Title
    const fullTitle = title.includes('چک‌لیست') || title.includes('مرجع') 
      ? title 
      : `${title} | مرجع چک‌لیست‌های تخصصی طراحی UX`;
    document.title = fullTitle;

    // Helper to update meta tag
    const setMeta = (nameAttr: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta Tags
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords.join(', '));
    setMeta('name', 'author', 'مرجع چک‌لیست‌های تخصصی طراحی UX');
    setMeta('name', 'robots', 'index, follow');

    // Open Graph
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:site_name', 'چک‌لیست طراحی UX');
    setMeta('property', 'og:locale', 'fa_IR');
    setMeta('property', 'og:image', `${window.location.origin}/favicon.svg`);

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', `${window.location.origin}/favicon.svg`);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // JSON-LD Structured Data
    if (jsonLd) {
      let scriptTag = document.querySelector('#jsonld-seo') as HTMLScriptElement;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'jsonld-seo';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, canonicalUrl, ogType, keywords, jsonLd]);

  return null;
};
