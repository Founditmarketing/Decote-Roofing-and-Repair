export const SITE_URL = 'https://www.ducoteroofingandrepair.com';

export const BUSINESS = {
  name: 'Ducote Roofing & Repair',
  telephone: '+1-318-880-6777',
  email: 'caleb.ducoteroofing@gmail.com',
  address: {
    '@type': 'PostalAddress' as const,
    streetAddress: '6734 Bayou Rapides Road',
    addressLocality: 'Alexandria',
    addressRegion: 'LA',
    addressCountry: 'US',
  },
  areaServed: 'Alexandria, LA',
  sameAs: ['https://www.facebook.com/DucoteRoofingAndRepair'],
  foundingDate: '2012',
};

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: BUSINESS.name,
    image: `${SITE_URL}/Roofinhg.png`,
    url: SITE_URL,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    address: BUSINESS.address,
    areaServed: BUSINESS.areaServed,
    sameAs: BUSINESS.sameAs,
    foundingDate: BUSINESS.foundingDate,
  };
}

export function buildServiceSchema(serviceType: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    provider: {
      '@type': 'RoofingContractor',
      name: BUSINESS.name,
      telephone: BUSINESS.telephone,
      address: BUSINESS.address,
    },
    areaServed: BUSINESS.areaServed,
    url: `${SITE_URL}${path}`,
  };
}
