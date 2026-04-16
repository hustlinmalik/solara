import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata = {
  metadataBase: new URL('https://solaratinting.com'),
  title: {
    default: 'Solara Tinting Solutions | Licensed 3M Dealer | Eastern Shore Maryland',
    template: '%s | Solara Tinting Solutions',
  },
  description:
    'Solara Tinting Solutions — commercial, marine, residential & agricultural window tinting on the Eastern Shore, Maryland, DE & PA. Licensed 3M dealer. Free quotes.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Solara Tinting Solutions',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#050F1A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
