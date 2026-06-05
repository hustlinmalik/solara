import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import Script from 'next/script'

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
  icons: {
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#050F1A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <Script id="gtm-script" strategy="beforeInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KH6JZK63');`}</Script>
      </head>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KH6JZK63" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <GoogleAnalytics />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
