import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

const benefits = [
  {
    icon: '☀️',
    title: 'UV Ray Blockage',
    body: 'Block up to 99% of harmful ultraviolet rays that fade furniture, flooring, and artwork — protecting your investment for years to come.',
  },
  {
    icon: '🌡️',
    title: 'Heat Reduction',
    body: 'Reject up to 79% of solar heat, keeping rooms comfortable year-round and reducing strain on your HVAC system.',
  },
  {
    icon: '👁️',
    title: 'Privacy & Glare Control',
    body: 'Enjoy natural daylight without the harsh glare on screens. One-way privacy films let you see out while preventing outside views in.',
  },
  {
    icon: '🛡️',
    title: 'Safety & Security',
    body: 'Safety films hold shattered glass in place during break-ins, storms, or accidents — adding a critical layer of protection.',
  },
  {
    icon: '⚡',
    title: 'Energy Savings',
    body: 'Lower your utility bills by reducing cooling and heating loads. Many homeowners see a return on investment within 3–5 years.',
  },
  {
    icon: '🎨',
    title: 'Curb Appeal',
    body: "Decorative and frosted films enhance your home's aesthetic without permanent alterations — ideal for rentals and HOAs.",
  },
]

const filmTypes = [
  {
    name: 'Solar / Heat-Rejection Film',
    desc: 'Our most popular residential choice. Blocks infrared heat and UV while maintaining clarity and natural light.',
  },
  {
    name: 'Privacy Film',
    desc: 'Frosted, one-way, or patterned — designed for bathrooms, entryways, street-facing windows, and sidelights.',
  },
  {
    name: 'Decorative Film',
    desc: 'Stained glass patterns, etched designs, and custom graphics that transform ordinary windows into design features.',
  },
  {
    name: 'Safety & Security Film',
    desc: 'Thick, impact-resistant films that prevent glass from shattering on impact — ideal for ground-floor windows and doors.',
  },
  {
    name: 'Low-E Film',
    desc: 'Improves insulation in both summer and winter by reflecting interior heat back into the room during cold months.',
  },
]

const process = [
  { step: '01', title: 'Free Consultation', desc: 'We assess your home, discuss goals, and recommend the right film for your needs and budget.' },
  { step: '02', title: 'Film Selection', desc: 'Choose from our catalog of films with varying tint levels, heat rejection, and aesthetic finishes.' },
  { step: '03', title: 'Professional Installation', desc: 'Our certified installers apply the film cleanly and precisely — most homes are completed in a single day.' },
  { step: '04', title: 'Quality Inspection', desc: 'We walk through every window with you before we leave to ensure a flawless, bubble-free result.' },
]

const faqs = [
  {
    q: 'How long does residential window tinting last?',
    a: 'Quality window film typically lasts 10–20 years depending on the film grade, sun exposure, and maintenance. All our films come with manufacturer warranties.',
  },
  {
    q: 'Will window film damage my glass or void the warranty?',
    a: 'Professional-grade films installed correctly will not damage standard residential glass. We assess your window type before installation to ensure compatibility.',
  },
  {
    q: 'How long after installation before I can clean my windows?',
    a: 'We recommend waiting 30 days before cleaning newly tinted windows to allow the adhesive to fully cure.',
  },
  {
    q: 'Can window film be removed?',
    a: 'Yes. Window film is removable without permanent damage to your glass. Removal is typically done by a professional to avoid residue.',
  },
]

// Placeholder pairs — replace src values with real photo paths when available
const beforeAfterPairs = [
  { label: 'Living Room — Heat Rejection Film' },
  { label: 'Master Bedroom — Privacy Film' },
  { label: 'Kitchen Skylight — Solar Film' },
  { label: 'Front Door Sidelights — Decorative Film' },
]

export default function ResidentialPage() {
  return (
    <div className="bg-navy-950 min-h-screen">
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
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="text-sun-500 text-xs font-semibold tracking-widest uppercase">Residential Tinting</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Your Home,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sun-500 to-sun-300">Elevated.</span>
          </h1>
          <p className="text-white/55 text-lg max-w-2xl leading-relaxed mb-8">
            Solara's residential tinting solutions protect your family from harmful UV rays, reduce energy costs, and enhance the comfort and privacy of every room — without compromising on natural light or style.
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
            <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">Why Tint Your Home</p>
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

      {/* Film Types */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">Film Options</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">The Right Film<br />for Every Room</h2>
              <p className="text-white/45 leading-relaxed">
                Not all windows are the same — and neither are your needs. We carry a full range of professional-grade films to match every application, from sun-drenched living rooms to private bathrooms.
              </p>
            </div>
            <div className="space-y-4">
              {filmTypes.map((f, i) => (
                <div key={f.name} className="flex gap-5 bg-navy-800/50 border border-navy-700/40 rounded-xl p-5 hover:border-sun-500/30 transition-colors">
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
        </div>
      </section>

      {/* Before & After — uncomment when photos are ready */}
      {/* <section className="py-20 px-6 bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Before & After</h2>
            <p className="text-white/40 max-w-lg mx-auto text-sm leading-relaxed">
              Drag the slider to compare results. Photos from completed residential installations across the DC Metro Area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beforeAfterPairs.map((pair) => (
              <BeforeAfterSlider
                key={pair.label}
                label={pair.label}
                before={pair.before}
                after={pair.after}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Process */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="relative bg-navy-800/60 border border-navy-700/50 rounded-2xl p-7">
                <div className="text-6xl font-black text-navy-700/70 leading-none mb-4 select-none">{p.step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-navy-950">
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
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to protect your home?</h2>
          <p className="text-white/45 mb-8">Get a free, no-obligation quote from our residential tinting specialists today.</p>
          <a href="/#contact" className="inline-block bg-sun-500 hover:bg-sun-400 text-navy-950 font-bold px-10 py-4 rounded text-sm tracking-wide uppercase transition-colors">
            Request a Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
