import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import ServiceAreas from '@/components/ServiceAreas'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { localBusinessSchema, SITE_URL } from '@/data/seoData'

export const metadata = {
  description:
    'Trusted window tinting specialists on the Eastern Shore, Maryland — commercial, marine, residential & agricultural. Licensed 3M dealer, Flat Glass & PPF certified. Free quotes.',
  alternates: { canonical: SITE_URL },
  openGraph: { url: SITE_URL },
}

export default function HomePage() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <ServiceAreas />
      <Contact />
      <Footer />
    </div>
  )
}
