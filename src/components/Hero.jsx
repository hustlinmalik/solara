export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />

      {/* Sun glow accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sun-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-navy-600/10 blur-2xl pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
        {/* Certification badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 bg-sun-500/10 border border-sun-500/30 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-sun-500 animate-pulse" />
            <span className="text-sun-500 text-xs font-semibold tracking-widest uppercase">
              3M Authorized Dealer
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-navy-600/20 border border-navy-600/40 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-navy-500" />
            <span className="text-navy-500 text-xs font-semibold tracking-widest uppercase">
              Flat Glass &amp; PPF Certified
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
          Protect, Enhance &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sun-500 to-sun-300">
            Transform
          </span>
          <br />
          Every Window
        </h1>

        <p className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Eastern Maryland's licensed 3M dealer for commercial, marine,
          residential, and agricultural window tinting. Serving the Chesapeake
          Bay region, Delaware, and Pennsylvania.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-sun-500 hover:bg-sun-400 text-navy-950 font-bold px-8 py-4 rounded text-sm tracking-wide uppercase transition-colors w-full sm:w-auto"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="border border-navy-600 hover:border-sun-500/50 text-white hover:text-sun-500 font-semibold px-8 py-4 rounded text-sm tracking-wide uppercase transition-all w-full sm:w-auto"
          >
            Our Services
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-navy-700/50 pt-10">
          {[
            { value: '5', label: 'States Served' },
            { value: '100%', label: 'Satisfaction' },
            { value: '4', label: 'Specialties' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-sun-500">{s.value}</div>
              <div className="text-white/35 text-xs tracking-widest uppercase mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/25 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  )
}
