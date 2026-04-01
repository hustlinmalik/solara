import SolaraLogo from './SolaraLogo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 border-t border-navy-700/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <SolaraLogo size={40} id="footer-logo" />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-black text-base tracking-widest uppercase">Solara</span>
                <span className="text-navy-500 text-[10px] tracking-[0.2em] uppercase">Film Solutions</span>
              </div>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Premium eco-friendly glass tinting for commercial, residential, and
              marine properties across the Mid-Atlantic region.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {['Residential Tinting', 'Commercial Tinting', 'Marine Tinting', 'Agricultural Tinting'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/35 hover:text-sun-500 text-sm transition-colors">
                    {s}
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
                <a href="tel:2405930019" className="text-white/35 hover:text-sun-500 text-sm transition-colors">
                  240-593-0019
                </a>
              </li>
              <li>
                <a href="mailto:solaratinting@gmail.com" className="text-white/35 hover:text-sun-500 text-sm transition-colors">
                  solaratinting@gmail.com
                </a>
              </li>
              <li className="text-white/35 text-sm">DC · MD · VA · PA · DE</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {year} Solara Tinting. All rights reserved.
          </p>
          <p className="text-white/15 text-xs">
            Premium Glass Tinting · Est. Washington D.C.
          </p>
        </div>
      </div>
    </footer>
  )
}
