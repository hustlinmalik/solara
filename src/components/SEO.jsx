import { Helmet } from 'react-helmet-async'
import { SITE_URL } from '../data/seoData'

const DEFAULT_TITLE = 'Solara Tinting Solutions | Licensed 3M Dealer | Eastern Maryland'
const DEFAULT_DESC =
  'Solara Tinting Solutions is a licensed 3M authorized dealer offering commercial, marine, residential, and agricultural window tinting across Eastern Maryland, Delaware, and Pennsylvania. Free quotes available.'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

export default function SEO({
  title,
  description = DEFAULT_DESC,
  canonical = '',
  image = DEFAULT_IMAGE,
  schemas = [],
}) {
  const fullTitle = title
    ? `${title} | Solara Tinting Solutions`
    : DEFAULT_TITLE

  const canonicalUrl = `${SITE_URL}${canonical}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Solara Tinting Solutions" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
