export const SITE_URL = 'https://solaratinting.com'

export const BUSINESS = {
  name: 'Solara Tinting Solutions',
  url: SITE_URL,
  phone: '+12405930019',
  phoneDisplay: '240-593-0019',
  email: 'solaratinting@gmail.com',
  address: {
    street: '3112 Rices Ln',
    city: 'Windsor Mill',
    state: 'MD',
    zip: '21224',
    country: 'US',
  },
  geo: { lat: 39.3315, lng: -76.7791 },
  hours: 'Mo-Su 07:00-19:00',
  hoursDisplay: 'Monday – Sunday, 7:00 AM – 7:00 PM',
  priceRange: '$$',
  facebook: 'https://www.facebook.com/profile.php?id=61583310317754',
  instagram: 'https://www.instagram.com/solaratinting/',
  areaServed: [
    'Eastern Maryland',
    'Baltimore County, MD',
    'Anne Arundel County, MD',
    'Queen Anne\'s County, MD',
    'Talbot County, MD',
    'Kent County, MD',
    'Cecil County, MD',
    'Harford County, MD',
    'Sussex County, DE',
    'Kent County, DE',
    'Chester County, PA',
    'Lancaster County, PA',
    'Washington DC',
    'Northern Virginia',
  ],
  certifications: [
    '3M Authorized Dealer',
    'Flat Glass Certified',
    'PPF (Paint Protection Film) Certified',
  ],
}

/** Base LocalBusiness JSON-LD — used on every page */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: BUSINESS.name,
  url: BUSINESS.url,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/favicon.svg`,
  priceRange: BUSINESS.priceRange,
  openingHours: BUSINESS.hours,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: BUSINESS.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  areaServed: BUSINESS.areaServed.map((area) => ({
    '@type': 'AdministrativeArea',
    name: area,
  })),
  sameAs: [BUSINESS.facebook, BUSINESS.instagram],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Window Tinting Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Window Tinting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marine Window Tinting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Window Tinting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agricultural Equipment Window Tinting' } },
    ],
  },
  description:
    'Solara Tinting Solutions is a licensed 3M authorized dealer specializing in commercial, marine, residential, and agricultural window tinting across Eastern Maryland, Delaware, and Pennsylvania. Flat Glass and PPF certified.',
}

/** Build a FAQPage schema from an array of {q, a} objects */
export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

/** Build a Service schema */
export function serviceSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: BUSINESS.name,
    },
    areaServed: BUSINESS.areaServed.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
  }
}
