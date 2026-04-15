import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import ServiceAreas from './components/ServiceAreas'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SEO from './components/SEO'
import ResidentialPage from './pages/ResidentialPage'
import CommercialPage from './pages/CommercialPage'
import MarinePage from './pages/MarinePage'
import AgriculturalPage from './pages/AgriculturalPage'
import { localBusinessSchema } from './data/seoData'
import './index.css'

function HomePage() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <SEO
        description="Trusted window tinting specialists on the Eastern Shore, Maryland — commercial, marine, residential & agricultural. Licensed 3M dealer, Flat Glass & PPF certified. Free quotes."
        canonical="/"
        schemas={[localBusinessSchema]}
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

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/residential" element={<ResidentialPage />} />
          <Route path="/services/commercial" element={<CommercialPage />} />
          <Route path="/services/marine" element={<MarinePage />} />
          <Route path="/services/agricultural" element={<AgriculturalPage />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </HelmetProvider>
  )
}

export default App
