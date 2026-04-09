import SolaraLogo from './SolaraLogo'
import { BUSINESS } from '../data/seoData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 border-t border-navy-700/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <SolaraLogo size={40} id="footer-logo" />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-black text-base tracking-widest uppercase">Solara</span>
                <span className="text-navy-500 text-[10px] tracking-[0.2em] uppercase">Tinting Solutions</span>
              </div>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-4">
              Licensed 3M authorized dealer specializing in commercial, marine,
              residential, and agricultural window tinting across Eastern Maryland,
              Delaware, and Pennsylvania.
            </p>
            {/* Certification badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-[10px] font-semibold tracking-widest uppercase border border-sun-500/30 text-sun-500/70 rounded px-2.5 py-1">
                Licensed 3M Dealer
              </span>
              <span className="text-[10px] font-semibold tracking-widest uppercase border border-navy-600/40 text-navy-500 rounded px-2.5 py-1">
                Flat Glass Certified
              </span>
              <span className="text-[10px] font-semibold tracking-widest uppercase border border-navy-600/40 text-navy-500 rounded px-2.5 py-1">
                PPF Certified
              </span>
            </div>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solara Tinting Solutions on Facebook"
                className="w-8 h-8 rounded-lg bg-navy-800 border border-navy-700/50 flex items-center justify-center text-white/40 hover:text-sun-500 hover:border-sun-500/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solara Tinting Solutions on Instagram"
                className="w-8 h-8 rounded-lg bg-navy-800 border border-navy-700/50 flex items-center justify-center text-white/40 hover:text-sun-500 hover:border-sun-500/30 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Residential Tinting', href: '/services/residential' },
                { label: 'Commercial Tinting', href: '/services/commercial' },
                { label: 'Marine Tinting', href: '/services/marine' },
                { label: 'Agricultural Tinting', href: '/services/agricultural' },
              ].map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-sun-500 text-sm transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href={`tel:${BUSINESS.phone}`} className="text-white/35 hover:text-sun-500 text-sm transition-colors">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="text-white/35 hover:text-sun-500 text-sm transition-colors">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="text-white/35 text-sm">Windsor Mill, MD</li>
              <li className="text-white/35 text-sm">Eastern MD · DE · PA</li>
              <li className="text-white/20 text-xs mt-1">{BUSINESS.hoursDisplay}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {year} Solara Tinting Solutions. All rights reserved.
          </p>
          <p className="text-white/15 text-xs">
            Licensed 3M Dealer · Flat Glass & PPF Certified · Eastern Maryland
          </p>
        </div>
      </div>
    </footer>
  )
}
