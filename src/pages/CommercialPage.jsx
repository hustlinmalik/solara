import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import SEO from '../components/SEO'
import { localBusinessSchema, faqSchema, serviceSchema, SITE_URL } from '../data/seoData'

const benefits = [
  {
    icon: '💰',
    title: 'Reduce Energy Costs',
    body: 'Commercial buildings lose up to 30% of their HVAC energy through untreated glass. Our films reduce solar heat gain, cutting cooling bills significantly.',
  },
  {
    icon: '👷',
    title: 'Employee Comfort & Productivity',
    body: 'Eliminate uncomfortable hot spots and screen glare that reduce productivity. A comfortable workspace means a more focused, happier team.',
  },
  {
    icon: '🏢',
    title: 'Brand & Aesthetic Enhancement',
    body: 'Frosted logos, patterned glass, and tinted facades create a polished, professional appearance that reinforces your brand identity.',
  },
  {
    icon: '🔒',
    title: 'Security & Safety',
    body: 'Safety films hold glass together after impact, deterring smash-and-grab theft and protecting occupants from flying shards during storms.',
  },
  {
    icon: '🌿',
    title: 'Sustainability & LEED Credits',
    body: 'Window film is one of the most cost-effective green retrofits available. Our films can contribute to LEED certification points for your building.',
  },
  {
    icon: '🪟',
    title: 'No Disruption to Operations',
    body: 'Our commercial teams work around your schedule — nights, weekends, and phased installations — to ensure zero disruption to your business.',
  },
]

const industries = [
  'Office Buildings & Corporate Campuses',
  'Retail Storefronts & Shopping Centers',
  'Restaurants & Hospitality',
  'Medical & Healthcare Facilities',
  'Schools & Universities',
  'Government Buildings',
  'Hotels & Resorts',
  'Warehouses & Industrial',
]

const filmTypes = [
  {
    name: 'Solar Control Film',
    desc: 'Dramatically reduces heat and glare while maintaining outward visibility — the most requested commercial film.',
  },
  {
    name: 'Safety & Anti-Shatter Film',
    desc: 'Holds broken glass in place, meeting safety codes and reducing liability in high-traffic areas.',
  },
  {
    name: 'Decorative & Branding Film',
    desc: 'Frosted, etched, and custom-printed films for privacy partitions, conference rooms, and branded storefronts.',
  },
  {
    name: 'Low-E / Insulating Film',
    desc: 'Improves year-round energy efficiency by reflecting heat in summer and retaining warmth in winter.',
  },
  {
    name: 'Anti-Graffiti Film',
    desc: 'A sacrificial layer that protects glass surfaces from etching, scratching, and vandalism — easily replaced.',
  },
]

const process = [
  { step: '01', title: 'Site Assessment', desc: 'We evaluate your building\'s glazing, orientation, and existing systems to identify the highest-impact areas.' },
  { step: '02', title: 'Custom Proposal', desc: 'Receive a detailed scope, film specifications, projected energy savings, and transparent pricing.' },
  { step: '03', title: 'Scheduled Installation', desc: 'Our commercial crew works to your timeline, minimizing disruption with efficient, professional execution.' },
  { step: '04', title: 'Sign-Off & Warranty', desc: 'A final walkthrough with your facilities manager and full documentation for manufacturer warranties.' },
]

const faqs = [
  {
    q: 'How much can commercial window film reduce energy costs?',
    a: 'Studies show commercial window film can reduce cooling costs by 5–15% annually. In sun-exposed glass-heavy buildings, ROI is typically achieved within 2–4 years.',
  },
  {
    q: 'Can you film an entire multi-story building?',
    a: 'Yes. We have the equipment and crew to handle large-scale commercial projects including high-rise applications. Multi-building contracts are welcome.',
  },
  {
    q: 'Will tinting affect the appearance of our storefront from the outside?',
    a: 'We offer a wide range of visible light transmission levels. We\'ll work with you to select a film that meets your aesthetic requirements and local codes.',
  },
  {
    q: 'Do you offer maintenance or replacement services?',
    a: 'Yes. We offer ongoing maintenance programs and will replace any film that fails within the warranty period at no cost.',
  },
]

const beforeAfterPairs = [
  { label: 'Office Lobby — Solar Control Film' },
  { label: 'Conference Room — Frosted Privacy Film' },
  { label: 'Retail Storefront — Branded Decorative Film' },
  { label: 'Open Floor Plan — Glare Reduction Film' },
]

export default function CommercialPage() {
  const schemas = [
    localBusinessSchema,
    serviceSchema({
      name: 'Commercial Window Tinting',
      description: 'Expert commercial window tinting for offices, retail, industrial, and institutional buildings across Eastern Maryland and the Delmarva Peninsula. Energy savings, glare reduction, safety and branding films. Licensed 3M authorized dealer.',
      url: `${SITE_URL}/services/commercial`,
    }),
    faqSchema(faqs),
  ]

  return (
    <div className="bg-navy-950 min-h-screen">
      <SEO
        title="Commercial Window Tinting in Eastern Maryland & Delmarva"
        description="Lower energy costs and improve employee comfort with commercial window tinting from Solara Tinting Solutions — a licensed 3M dealer serving Eastern Maryland, Delaware & Pennsylvania. Energy-efficient, safety, and decorative film solutions. Free quote."
        canonical="/services/commercial"
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
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
              </svg>
            </div>
            <span className="text-sun-500 text-xs font-semibold tracking-widest uppercase">Commercial Tinting</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Built for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sun-500 to-sun-300">Business.</span>
          </h1>
          <p className="text-white/55 text-lg max-w-2xl leading-relaxed mb-8">
            From single storefronts to multi-story office campuses, Solara delivers commercial tinting solutions that cut energy costs, enhance employee comfort, and elevate your building's professional image.
          </p>
          <a href="/#contact" className="inline-block bg-sun-500 hover:bg-sun-400 text-navy-950 font-bold px-8 py-4 rounded text-sm tracking-wide uppercase transition-colors">
            Get a Commercial Quote
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">Why It Matters</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Business Benefits</h2>
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

      {/* Industries */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">Who We Serve</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Industries We Work With</h2>
              <p className="text-white/45 leading-relaxed">
                Our commercial team has experience across a wide range of property types and industries. Whether you manage a single office or a portfolio of buildings, we have the expertise to deliver.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {industries.map((ind) => (
                <div key={ind} className="flex items-center gap-3 bg-navy-800/50 border border-navy-700/40 rounded-xl px-4 py-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sun-500 flex-shrink-0" />
                  <span className="text-white/70 text-sm">{ind}</span>
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
            <h2 className="text-3xl md:text-4xl font-black text-white">Commercial Film Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
              Drag the slider to compare results from completed commercial installations.
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
            <h2 className="text-3xl md:text-4xl font-black text-white">Our Commercial Process</h2>
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Let's upgrade your building.</h2>
          <p className="text-white/45 mb-8">Request a commercial assessment and quote — no obligation, no pressure.</p>
          <a href="/#contact" className="inline-block bg-sun-500 hover:bg-sun-400 text-navy-950 font-bold px-10 py-4 rounded text-sm tracking-wide uppercase transition-colors">
            Request a Commercial Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
