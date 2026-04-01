const pillars = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Local Expertise',
    body: 'Deep roots in DC, Maryland, Virginia, Pennsylvania, and Delaware mean we understand the climate, regulations, and community needs of each market we serve.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Fast Turnaround',
    body: 'We respect your time. Most residential and commercial jobs are scheduled and completed within days, not weeks, with minimal disruption to your routine.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Fair & Transparent Pricing',
    body: "No hidden fees, no bait-and-switch. We provide clear, itemized quotes upfront so you know exactly what you're paying for before any work begins.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    title: 'Satisfaction Guaranteed',
    body: "We stand behind every installation. If you're not completely satisfied with the result, we'll make it right — no questions asked.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
    title: 'Eco-Friendly Materials',
    body: 'All our films are selected with sustainability in mind. Reduce your carbon footprint while cutting energy costs — a win for your wallet and the planet.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Specialty Projects',
    body: 'From unique waterfront properties to custom yacht builds, we take on the projects others turn away. Complex jobs are our specialty.',
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="bg-navy-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">
              Why Choose Solara
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              The standard you
              <br />
              deserve.
            </h2>
          </div>
          <p className="text-white/45 leading-relaxed">
            Solara is more than a tinting company — we are craftsmen committed to
            enhancing the comfort, efficiency, and beauty of every space we touch.
            Here is what sets us apart.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-navy-800/60 border border-navy-700/50 rounded-2xl p-7 hover:border-sun-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-sun-500/10 flex items-center justify-center text-sun-500 mb-5 group-hover:bg-sun-500/20 transition-colors">
                {p.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
