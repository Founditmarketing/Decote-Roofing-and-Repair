import { useEffect } from 'react';
import { SITE_URL } from '../lib/business';

const DEFAULT_IMAGE = `${SITE_URL}/Roofinhg.png`;

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  schema?: object | object[];
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function PageSEO({ title, description, path, image, schema }: PageSEOProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const ogImage = image ? `${SITE_URL}${image}` : DEFAULT_IMAGE;

    document.title = title;
    upsertMeta('name', 'description', description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:image', ogImage);

    upsertMeta('property', 'twitter:card', 'summary_large_image');
    upsertMeta('property', 'twitter:title', title);
    upsertMeta('property', 'twitter:description', description);
    upsertMeta('property', 'twitter:image', ogImage);

    const scriptId = 'page-structured-data';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (schema) {
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else if (script) {
      script.remove();
    }
  }, [title, description, path, image, JSON.stringify(schema)]);

  return null;
}
