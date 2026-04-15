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
        description="Solara Tinting Solutions is a licensed 3M authorized dealer specializing in commercial and marine window tinting across Eastern Maryland, Delaware, and Pennsylvania. Flat Glass & PPF certified. Free quotes."
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
