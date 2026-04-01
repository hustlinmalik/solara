import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import ServiceAreas from './components/ServiceAreas'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResidentialPage from './pages/ResidentialPage'
import CommercialPage from './pages/CommercialPage'
import MarinePage from './pages/MarinePage'
import AgriculturalPage from './pages/AgriculturalPage'
import './index.css'

function HomePage() {
  return (
    <div className="bg-navy-950 min-h-screen">
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/residential" element={<ResidentialPage />} />
        <Route path="/services/commercial" element={<CommercialPage />} />
        <Route path="/services/marine" element={<MarinePage />} />
        <Route path="/services/agricultural" element={<AgriculturalPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
