import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import SEO from '../components/SEO'
import { localBusinessSchema, faqSchema, serviceSchema, SITE_URL } from '../data/seoData'

const benefits = [
  {
    icon: '☀️',
    title: 'Operator UV & Heat Protection',
    body: 'Cab glass on tractors and harvesters creates a greenhouse effect. Our films reject up to 79% of solar heat and block 99% of UV — keeping operators cool and safe during long field days.',
  },
  {
    icon: '🕶️',
    title: 'Glare Reduction for Safety',
    body: 'Early morning and late afternoon sun creates dangerous glare for operators. Tinted cab glass dramatically reduces eye strain and improves visibility across open fields.',
  },
  {
    icon: '📱',
    title: 'Display & GPS Screen Protection',
    body: 'Precision ag displays and GPS monitors are harder to read in direct sunlight. Anti-glare films improve screen legibility without dimming the cab interior.',
  },
  {
    icon: '🛡️',
    title: 'Impact & Debris Resistance',
    body: 'Safety films hold cracked or shattered glass together after rock strikes and debris impacts — reducing injury risk and downtime during critical harvest windows.',
  },
  {
    icon: '💰',
    title: 'Protect Equipment Investment',
    body: 'UV degradation fades cab interiors, damages electronics, and cracks dashboards. Our films extend the life and resale value of your machinery.',
  },
  {
    icon: '🌿',
    title: 'Works on All Machinery Types',
    body: 'From small utility tractors to full-size combines, sprayers, telehandlers, and specialty harvest equipment — we film any glass cab regardless of make or model.',
  },
]

const equipmentTypes = [
  'Row Crop Tractors',
  'Combine Harvesters',
  'Sprayers & Application Equipment',
  'Telehandlers & Loaders',
  'Skid Steers & Compact Equipment',
  'Hay & Forage Equipment',
  'Cotton Pickers & Strippers',
  'Specialty & Orchard Equipment',
  'Construction Equipment Cabs',
  'Fleet & Equipment Dealerships',
]

const filmTypes = [
  {
    name: 'Solar Heat-Rejection Film',
    desc: 'Blocks infrared heat while maintaining outward visibility — the most impactful upgrade for operator comfort on long work days.',
  },
  {
    name: 'Anti-Glare Film',
    desc: 'Low-reflectivity film for forward-facing and side cab windows where sun angle creates dangerous glare during field operations.',
  },
  {
    name: 'Safety & Shatter-Resistant Film',
    desc: 'Holds glass in place after rock strikes and debris impacts — critical protection for operators in the field.',
  },
  {
    name: 'UV-Block Protective Film',
    desc: 'Colorless film that blocks up to 99% of UV rays without altering cab appearance — protects operators and interior surfaces.',
  },
  {
    name: 'Privacy & Tinted Film',
    desc: 'Lightly tinted films that reduce interior visibility while keeping outward sight lines clear for safe equipment operation.',
  },
]

const process = [
  { step: '01', title: 'Equipment Assessment', desc: 'We evaluate your cab glass type, curvature, and primary use case to select the right film for each window panel.' },
  { step: '02', title: 'Film Selection', desc: 'We recommend the optimal combination of heat rejection, anti-glare, and safety film for your specific equipment and field conditions.' },
  { step: '03', title: 'On-Site or Shop Install', desc: 'We come to your farm, equipment yard, or dealership. Most single-machine installs are completed the same day.' },
  { step: '04', title: 'Quality Check', desc: 'Every panel is inspected for clarity and adhesion before we sign off — ensuring zero visual distortion for the operator.' },
]

const faqs = [
  {
    q: 'Can window film be applied to curved cab glass?',
    a: 'Yes. Most agricultural cab windows feature compound curves. We use flexible, heat-formable films designed for non-flat glass surfaces and have experience with a wide range of cab geometries.',
  },
  {
    q: 'Will tinting affect operator visibility or safety?',
    a: 'We select films with visible light transmission levels appropriate for agricultural equipment — typically 35–70% VLT — to maintain safe outward visibility in all lighting conditions.',
  },
  {
    q: 'Do you work with equipment dealerships and fleets?',
    a: 'Yes. We offer fleet pricing and can work with dealers to film new and used equipment inventory. Multi-unit contracts are welcome.',
  },
  {
    q: 'How long does a cab tinting installation take?',
    a: 'Most tractors and combines can be completed in 2–4 hours. Larger machines with more glass panels may take a full day. We work around your schedule to minimize equipment downtime.',
  },
]

const beforeAfterPairs = [
  { label: 'Row Crop Tractor — Solar Heat-Rejection Film' },
  { label: 'Combine Harvester — Anti-Glare Cab Film' },
  { label: 'Sprayer Cab — UV-Block & Privacy Film' },
  { label: 'Telehandler — Safety Film Installation' },
]

export default function AgriculturalPage() {
  const schemas = [
    localBusinessSchema,
    serviceSchema({
      name: 'Agricultural Equipment Window Tinting',
      description: 'Window tinting for tractor cabs, combine harvesters, sprayers and agricultural equipment across the Eastern Shore, Maryland, and the Delmarva Peninsula. UV protection, heat rejection, anti-glare, and safety film for operators. Licensed 3M authorized dealer.',
      url: `${SITE_URL}/services/agricultural`,
    }),
    faqSchema(faqs),
  ]

  return (
    <div className="bg-navy-950 min-h-screen">
      <SEO
        title="Agricultural Equipment Window Tinting | Eastern Shore & Maryland"
        description="Agricultural window tinting for tractors & equipment cabs on the Eastern Shore & Maryland. Heat rejection, UV protection & anti-glare film. Licensed 3M dealer. Free quote."
        canonical="/services/agricultural"
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
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
                <path d="M3.05 11a9 9 0 1 0 .5-2.5" />
              </svg>
            </div>
            <span className="text-sun-500 text-xs font-semibold tracking-widest uppercase">Agricultural Tinting</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Built for the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sun-500 to-sun-300">Field.</span>
          </h1>
          <p className="text-white/55 text-lg max-w-2xl leading-relaxed mb-8">
            Agricultural machinery operators spend long hours in glass cabs exposed to intense sun, glare, and UV radiation. Solara's agricultural tinting solutions protect operators, preserve equipment interiors, and improve on-field safety — on any make or model.
          </p>
          <a href="/#contact" className="inline-block bg-sun-500 hover:bg-sun-400 text-navy-950 font-bold px-8 py-4 rounded text-sm tracking-wide uppercase transition-colors">
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">Why It Matters</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Key Benefits</h2>
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

      {/* Equipment Types */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">What We Tint</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Equipment &<br />Machinery We Serve</h2>
              <p className="text-white/45 leading-relaxed">
                If it has a glass cab and an operator inside, we can tint it. We work with individual farmers, custom operators, and equipment dealerships across the Mid-Atlantic region.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {equipmentTypes.map((e) => (
                <div key={e} className="flex items-center gap-3 bg-navy-800/50 border border-navy-700/40 rounded-xl px-4 py-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sun-500 flex-shrink-0" />
                  <span className="text-white/70 text-sm">{e}</span>
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
            <h2 className="text-3xl md:text-4xl font-black text-white">Agricultural Film Solutions</h2>
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
              Drag the slider to compare completed agricultural machinery tinting installations.
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
            <h2 className="text-3xl md:text-4xl font-black text-white">Our Process</h2>
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to upgrade your equipment?</h2>
          <p className="text-white/45 mb-8">Get a free agricultural tinting assessment — we come to your farm, yard, or dealership.</p>
          <a href="/#contact" className="inline-block bg-sun-500 hover:bg-sun-400 text-navy-950 font-bold px-10 py-4 rounded text-sm tracking-wide uppercase transition-colors">
            Request a Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
