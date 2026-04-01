const areas = [
  {
    state: 'Washington D.C.',
    description: 'Capitol Hill, Georgetown, NoMa, and surrounding neighborhoods.',
  },
  {
    state: 'Maryland',
    description: "Montgomery County, Prince George's, Baltimore Metro, and the Eastern Shore.",
  },
  {
    state: 'Virginia',
    description: 'Northern Virginia, Richmond, Hampton Roads, and coastal areas.',
  },
  {
    state: 'Pennsylvania',
    description: 'Philadelphia Metro, Pittsburgh, and surrounding communities.',
  },
  {
    state: 'Delaware',
    description: 'Wilmington, Dover, the Beaches, and coastal waterfront properties.',
  },
]

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-navy-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">
            Coverage
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Where We Serve
          </h2>
          <p className="text-white/45 mt-4 max-w-xl mx-auto">
            Proudly serving the greater Mid-Atlantic region with the same
            dedication to quality in every market.
          </p>
        </div>

        {/* Area cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {areas.map((a, i) => (
            <div
              key={a.state}
              className="relative bg-navy-800 border border-navy-700/60 rounded-2xl p-6 hover:border-sun-500/40 transition-all group text-center"
            >
              <div className="text-4xl font-black text-navy-700 group-hover:text-navy-600 transition-colors mb-3 select-none">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{a.state}</h3>
              <p className="text-white/35 text-xs leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-navy-600/20 border border-navy-600/40 rounded-2xl p-8 text-center">
          <p className="text-navy-500 text-sm mb-2">Not sure if we cover your area?</p>
          <p className="text-white text-xl font-bold mb-6">
            Call us — we travel for the right project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:2405930019"
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-navy-600/50 text-white px-6 py-3 rounded-xl transition-colors font-semibold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-sun-500">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.5a16 16 0 006.59 6.59l1.4-1.4a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              240-593-0019
            </a>
            <a
              href="mailto:solaratinting@gmail.com"
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-navy-600/50 text-white px-6 py-3 rounded-xl transition-colors font-semibold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-sun-500">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              solaratinting@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
