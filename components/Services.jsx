const services = [
  {
    id: 'residential',
    href: '/services/residential',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Residential Tinting',
    tagline: 'Your Home, Elevated',
    description:
      'Reduce heat, block harmful UV rays, and enhance privacy without sacrificing natural light. Our residential films complement any home aesthetic while delivering maximum protection.',
    features: [
      'UV protection up to 99%',
      'Heat & glare reduction',
      'Enhanced privacy options',
      'Safety & security films',
      'Decorative window films',
    ],
  },
  {
    id: 'commercial',
    href: '/services/commercial',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: 'Commercial Tinting',
    tagline: 'Built for Business',
    description:
      'Create a comfortable, energy-efficient workspace while reducing overhead costs. Our commercial solutions improve productivity, protect furnishings, and elevate your brand appearance.',
    features: [
      'Energy cost reduction',
      'Glare control for screens',
      'Branding & frosted films',
      'ADA-compliant solutions',
      'Multi-building contracts',
    ],
  },
  {
    id: 'marine',
    href: '/services/marine',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M2 20a2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1" />
        <path d="M4 18l-1-5h18l-2 5" />
        <path d="M12 2v8" />
        <path d="M8 6l4-4 4 4" />
      </svg>
    ),
    title: 'Marine Tinting',
    tagline: 'For Life on the Water',
    description:
      'Specialized films engineered for the demands of marine environments. Protect your vessel from salt, sun, and heat while maintaining crystal-clear visibility on the open water.',
    features: [
      'Salt-resistant formulas',
      'Extreme heat rejection',
      'Anti-glare for navigation',
      'Cabin privacy films',
      'Waterfront property tinting',
    ],
  },
  {
    id: 'agricultural',
    href: '/services/agricultural',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M3 17l3-8 4 5 3-3 4 6" />
        <circle cx="7.5" cy="18.5" r="2.5" />
        <circle cx="17.5" cy="18.5" r="2.5" />
        <path d="M10 18.5h5" />
      </svg>
    ),
    title: 'Agricultural Tinting',
    tagline: 'Built for the Field',
    description:
      'Protect operators from heat, UV, and glare during long field days. Our agricultural films work on any cab — tractors, combines, sprayers, and specialty equipment.',
    features: [
      'Operator heat & UV protection',
      'Anti-glare for safe operation',
      'Impact & debris safety film',
      'Display screen legibility',
      'All makes & models',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-navy-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Our Services
          </h2>
          <p className="text-white/45 mt-4 max-w-xl mx-auto">
            Four specialized disciplines, one uncompromising standard of quality.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <a
              key={svc.id}
              href={svc.href}
              className="group relative bg-navy-800 border border-navy-700/60 rounded-2xl p-8 hover:border-sun-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Number accent */}
              <div className="absolute top-6 right-6 text-7xl font-black text-navy-700/60 group-hover:text-navy-700 transition-colors select-none leading-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10 flex flex-col flex-1">
                <div className="text-sun-500 mb-6">{svc.icon}</div>
                <p className="text-sun-500/70 text-xs font-semibold tracking-widest uppercase mb-1">
                  {svc.tagline}
                </p>
                <h3 className="text-white text-2xl font-bold mb-4">{svc.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-6">
                  {svc.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-white/55 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-sun-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center gap-2 text-sun-500 text-sm font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
