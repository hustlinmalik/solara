import { useState, useEffect } from 'react'
import SolaraLogo from './SolaraLogo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isServicePage = typeof window !== 'undefined' && window.location.pathname.startsWith('/services/')

  const links = [
    { label: 'Services', href: isServicePage ? '/#services' : '#services' },
    { label: 'Why Solara', href: isServicePage ? '/#why' : '#why' },
    { label: 'Service Areas', href: isServicePage ? '/#areas' : '#areas' },
    { label: 'Contact', href: isServicePage ? '/#contact' : '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-md shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <SolaraLogo size={44} id="nav-logo" />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-black text-lg tracking-widest uppercase">
              Solara
            </span>
            <span className="text-navy-500 text-[10px] tracking-[0.2em] uppercase font-medium">
              Tinting Solutions
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/60 hover:text-sun-500 transition-colors text-sm tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-sun-500 hover:bg-sun-400 text-navy-950 font-bold text-sm px-5 py-2.5 rounded transition-colors"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-950/98 backdrop-blur-md border-t border-navy-700/40 px-6 pb-6 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-white/60 hover:text-sun-500 transition-colors border-b border-navy-700/30 text-sm tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center bg-sun-500 hover:bg-sun-400 text-navy-950 font-bold text-sm px-5 py-3 rounded transition-colors"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  )
}
