import { useState } from 'react'

const serviceTypes = ['Residential', 'Commercial', 'Marine', 'Agricultural', 'Other']

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `New Quote Request — ${form.serviceType || 'General'} Tinting`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          service_type: form.serviceType || 'Not specified',
          message: form.message || 'No details provided',
          botcheck: '',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or call us directly.')
      }
    } catch {
      setError('Unable to send message. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-navy-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div>
            <p className="text-sun-500 text-xs font-semibold tracking-widest uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Ready to get
              <br />
              started?
            </h2>
            <p className="text-white/45 leading-relaxed mb-10">
              Request a free, no-obligation quote today. Tell us about your project
              and we will get back to you promptly with options tailored to your
              needs and budget.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a href="tel:2405930019" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-navy-800 border border-navy-700/60 flex items-center justify-center text-sun-500 flex-shrink-0 group-hover:border-sun-500/40 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.5a16 16 0 006.59 6.59l1.4-1.4a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/35 text-xs uppercase tracking-widest mb-0.5">Phone</div>
                  <div className="text-white font-semibold group-hover:text-sun-500 transition-colors">240-593-0019</div>
                </div>
              </a>

              <a href="mailto:solaratinting@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-navy-800 border border-navy-700/60 flex items-center justify-center text-sun-500 flex-shrink-0 group-hover:border-sun-500/40 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/35 text-xs uppercase tracking-widest mb-0.5">Email</div>
                  <div className="text-white font-semibold group-hover:text-sun-500 transition-colors">solaratinting@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-800 border border-navy-700/60 flex items-center justify-center text-sun-500 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/35 text-xs uppercase tracking-widest mb-0.5">Coverage</div>
                  <div className="text-white font-semibold">DC, MD, VA, PA, DE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-navy-800 border border-navy-700/60 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-sun-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-sun-500">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-white/45">
                  Thank you for reaching out. We will contact you shortly with your
                  free quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/45 text-xs tracking-widest uppercase mb-2">Name *</label>
                    <input
                      type="text" name="name" required
                      value={form.name} onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-navy-700/50 border border-navy-600/60 rounded-xl px-4 py-3 text-white placeholder-navy-500 focus:outline-none focus:border-sun-500/50 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-white/45 text-xs tracking-widest uppercase mb-2">Phone</label>
                    <input
                      type="tel" name="phone"
                      value={form.phone} onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full bg-navy-700/50 border border-navy-600/60 rounded-xl px-4 py-3 text-white placeholder-navy-500 focus:outline-none focus:border-sun-500/50 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/45 text-xs tracking-widest uppercase mb-2">Email *</label>
                  <input
                    type="email" name="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-navy-700/50 border border-navy-600/60 rounded-xl px-4 py-3 text-white placeholder-navy-500 focus:outline-none focus:border-sun-500/50 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-white/45 text-xs tracking-widest uppercase mb-2">Service Type</label>
                  <select
                    name="serviceType"
                    value={form.serviceType} onChange={handleChange}
                    className="w-full bg-navy-700/50 border border-navy-600/60 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sun-500/50 transition-colors text-sm appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    {serviceTypes.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/45 text-xs tracking-widest uppercase mb-2">Project Details</label>
                  <textarea
                    name="message" rows={4}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell us about your project — property type, number of windows, location, etc."
                    className="w-full bg-navy-700/50 border border-navy-600/60 rounded-xl px-4 py-3 text-white placeholder-navy-500 focus:outline-none focus:border-sun-500/50 transition-colors text-sm resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-sun-500 hover:bg-sun-400 disabled:opacity-60 disabled:cursor-not-allowed text-navy-950 font-bold py-4 rounded-xl transition-colors text-sm tracking-wide uppercase"
                >
                  {loading ? 'Sending…' : 'Request Free Quote'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
