import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import SEO from '../components/SEO'
import { localBusinessSchema, faqSchema, serviceSchema, SITE_URL } from '../data/seoData'

const benefits = [
  {
    icon: '🌊',
    title: 'Marine-Grade Durability',
    body: 'Salt air, humidity, and UV-intense coastal environments demand specialized films. Our marine-grade products are engineered to resist corrosion and delamination.',
  },
  {
    icon: '🌡️',
    title: 'Extreme Heat Rejection',
    body: 'Boat cabins and pilothouse windows absorb intense solar heat. Our films reject up to 79% of solar heat, keeping passengers comfortable on even the hottest days.',
  },
  {
    icon: '🧭',
    title: 'Anti-Glare for Navigation',
    body: 'Reduce dangerous glare on helm screens and windshields that impairs visibility and navigation — especially critical during low-angle morning and afternoon sun.',
  },
  {
    icon: '🔒',
    title: 'Cabin Privacy',
    body: 'One-way and privacy films for salon windows and cabin portholes let you enjoy the views without feeling exposed at marinas and anchorages.',
  },
  {
    icon: '☀️',
    title: 'UV Protection Onboard',
    body: "Protect upholstery, teak, and interior surfaces from UV fading and degradation — extending the life and value of your vessel's interior.",
  },
  {
    icon: '🏠',
    title: 'Waterfront Properties',
    body: 'We specialize in waterfront homes and condos that face unique challenges from reflective water glare and intense sun exposure on coastal elevations.',
  },
]

const vesselTypes = [
  'Cruising Yachts & Sailboats',
  'Motor Yachts & Express Cruisers',
  'Center Console & Sport Fishing Boats',
  'Pontoon & Deck Boats',
  'Commercial Vessels & Ferries',
  'Waterfront Homes & Condos',
  'Marina Clubhouses & Facilities',
  'Custom & New Construction Builds',
]

const filmTypes = [
  {
    name: 'Marine Solar Control Film',
    desc: 'Formulated specifically for marine environments — high heat rejection with enhanced resistance to salt water and humidity.',
  },
  {
    name: 'Anti-Glare Navigation Film',
    desc: 'Low-reflectivity film designed for helm stations, chart tables, and forward-facing windows where glare directly affects safety.',
  },
  {
    name: 'Marine Privacy Film',
    desc: 'One-way and frosted films for salon windows, cabin hatches, and below-decks portholes.',
  },
  {
    name: 'UV-Block Protective Film',
    desc: 'Colorless, nearly invisible film that blocks up to 99% of UV without altering the appearance of your vessel.',
  },
]

const process = [
  { step: '01', title: 'Vessel / Property Assessment', desc: 'We inspect your glass, discuss navigation and privacy priorities, and identify the best film for each zone.' },
  { step: '02', title: 'Marine Film Selection', desc: 'Choose from our marine-certified film options — we\'ll match the right product to each unique application.' },
  { step: '03', title: 'On-Site Installation', desc: 'We come to your marina, boatyard, or waterfront property. Most vessels are completed in a single day.' },
  { step: '04', title: 'Sea-Trial Confidence', desc: 'We verify every installation before you leave — ensuring crystal-clear visibility and a flawless finish.' },
]

const faqs = [
  {
    q: 'Can window film be applied to curved or tempered marine glass?',
    a: 'Yes. Many marine windows feature curved or tempered glass. We assess compatibility before installation and use flexible films suited to non-flat surfaces.',
  },
  {
    q: 'Will tinting affect my navigation visibility at night?',
    a: 'Properly selected marine films maintain excellent nighttime visibility. We\'ll recommend VLT (visible light transmission) levels appropriate for navigation windows.',
  },
  {
    q: 'How does salt air affect window film durability?',
    a: 'Standard films can degrade faster in marine environments. All films we use for marine applications are specifically rated for coastal and offshore conditions.',
  },
  {
    q: 'Do you work on new boat builds and refit projects?',
    a: 'Yes. We partner with boatbuilders, yards, and refit teams for new construction and major refits. Early coordination allows us to plan for the optimal film solution.',
  },
]

const beforeAfterPairs = [
  { label: 'Motor Yacht — Salon Solar Film' },
  { label: 'Pilothouse — Anti-Glare Navigation Film' },
  { label: 'Waterfront Home — Coastal Heat Rejection' },
  { label: 'Sailboat Cabin — UV-Block Privacy Film' },
]

export default function MarinePage() {
  const schemas = [
    localBusinessSchema,
    serviceSchema({
      name: 'Marine Window Tinting',
      description: 'Specialized marine window tinting for boats, yachts, and waterfront properties on the Chesapeake Bay and Eastern Maryland coast. Salt-resistant, marine-grade films for heat rejection, anti-glare navigation, and cabin privacy. Licensed 3M authorized dealer.',
      url: `${SITE_URL}/services/marine`,
    }),
    faqSchema(faqs),
  ]

  return (
    <div className="bg-navy-950 min-h-screen">
      <SEO
        title="Marine Window Tinting | Chesapeake Bay & Eastern Maryland"
        description="Marine-grade window tinting for boats, yachts & waterfront properties on the Chesapeake Bay and Eastern Maryland coast. Salt-resistant films, anti-glare navigation, cabin privacy. Licensed 3M dealer. Free quote."
        canonical="/services/marine"
        schemas={schemas}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-navy-900 to-navy-950 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <a href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-sun-500 text-sm mb-8 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Home
          </a>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-sun-500/10 flex items-center justify-center text-sun-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                <path d="M2 20a2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1" />
                <path d="M4 18l-1-5h18l-2 5" />
                <path d="M12 2v8" />
                <path d="M8 6l4-4 4 4" />
              </svg>
            </div>
            <span className="text-sun-500 text-xs font-semibold tracking-widest uppercase">Marine Tinting</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            For Life<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sun-500 to-sun-300">on the Water.</span>
          </h1>
          <p className="text-white/55 text-lg max-w-2xl leading-relaxed mb-8">
            Marine environments are among the most demanding for window film. Solara's specialized marine tinting protects your vessel and waterfront property from the harshest coastal conditions while maintaining clear, safe visibility on the water.
          </p>
          <a href="/#contact" className="inline-block bg-sun-500 hover:bg-sun-400 text-navy-950 font-bold px-8 py-4 rounded text-sm tracking-wide uppercase transition-colors">
            Get a Marine Quote
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">Why Marine Tinting</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Built for the Sea</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-navy-800/60 border border-navy-700/50 rounded-2xl p-7 hover:border-sun-500/30 transition-colors">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vessel Types */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">What We Tint</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Vessels & Properties<br />We Serve</h2>
              <p className="text-white/45 leading-relaxed">
                From compact center consoles to 100-foot motor yachts, and from seaside condos to commercial marina facilities — if it's on or near the water, we have a tinting solution for it.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {vesselTypes.map((v) => (
                <div key={v} className="flex items-center gap-3 bg-navy-800/50 border border-navy-700/40 rounded-xl px-4 py-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sun-500 flex-shrink-0" />
                  <span className="text-white/70 text-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Film Types */}
      <section className="py-20 px-6 bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">Film Options</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Marine-Grade Film Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filmTypes.map((f, i) => (
              <div key={f.name} className="flex gap-5 bg-navy-800/50 border border-navy-700/40 rounded-xl p-6 hover:border-sun-500/30 transition-colors">
                <div className="text-sun-500 font-black text-2xl w-8 flex-shrink-0 leading-none mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{f.name}</h4>
                  <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After — uncomment when photos are ready */}
      {/* <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Before & After</h2>
            <p className="text-white/40 max-w-lg mx-auto text-sm leading-relaxed">
              Drag the slider to compare completed marine tinting installations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beforeAfterPairs.map((pair) => (
              <BeforeAfterSlider key={pair.label} label={pair.label} before={pair.before} after={pair.after} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Process */}
      <section className="py-20 px-6 bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Our Marine Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-navy-800/60 border border-navy-700/50 rounded-2xl p-7">
                <div className="text-6xl font-black text-navy-700/70 leading-none mb-4 select-none">{p.step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-navy-800/60 border border-navy-700/50 rounded-xl p-7">
                <h4 className="text-white font-bold mb-3">{f.q}</h4>
                <p className="text-white/45 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-navy-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to protect your vessel?</h2>
          <p className="text-white/45 mb-8">Get a free marine tinting assessment — we'll come to your marina or boatyard.</p>
          <a href="/#contact" className="inline-block bg-sun-500 hover:bg-sun-400 text-navy-950 font-bold px-10 py-4 rounded text-sm tracking-wide uppercase transition-colors">
            Request a Marine Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
