import { useState } from 'react'
import { motion } from 'framer-motion'
import { BackgroundGradient } from '../components/ui/background-gradient'
import { BackgroundBeams } from '../components/ui/background-beams'

const contactDetails = [
  { icon: '✉', label: 'Email', value: 'hello@emilysmithdesign.com' },
  { icon: '📍', label: 'Location', value: 'Portland, Oregon — remote worldwide' },
  { icon: '🕐', label: 'Response Time', value: '1–2 business days' },
  { icon: '🗓', label: 'Availability', value: 'Accepting projects for Q3 2026' },
]

const process = [
  { num: '01', title: 'Discovery Call', desc: "We discuss your goals, timeline, and budget to make sure we're the right fit." },
  { num: '02', title: 'Proposal & Brief', desc: 'I send a detailed scope of work, timeline, and pricing for your review.' },
  { num: '03', title: 'Design & Revisions', desc: 'I present concepts and refine them through a structured round of revisions.' },
  { num: '04', title: 'Final Delivery', desc: 'You receive all final files, print-ready artwork, and full usage rights.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
    }, 900)
  }

  return (
    <>
      {/* Page header */}
      <section className="bg-[#0d0d0d] pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Contact</span>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch
            </h1>
            <p className="text-neutral-400 mt-4 max-w-md mx-auto">
              Have a project in mind? I'd love to hear about it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main contact section */}
      <section className="page-section bg-brand-bg-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-14 items-start">

            {/* Left — Info */}
            <motion.aside
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="text-3xl font-bold text-brand-text mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Let's Work Together
              </h2>
              <p className="text-brand-muted leading-relaxed mb-8">
                I'm currently accepting new projects. Whether you need a complete brand identity, a single print piece, or something in between — let's talk.
              </p>

              <div className="space-y-5">
                {contactDetails.map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="text-xl mt-0.5 flex-shrink-0">{icon}</span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand-text mb-0.5">{label}</p>
                      <p className="text-brand-muted text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-text mb-3">Follow My Work</p>
                <div className="flex gap-4 flex-wrap">
                  {['Behance', 'Dribbble', 'Instagram', 'LinkedIn'].map(s => (
                    <a
                      key={s}
                      href="#"
                      className="text-sm text-accent font-medium hover:text-accent-dark transition-colors"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>

            {/* Right — Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <BackgroundGradient containerClassName="rounded-2xl" className="rounded-2xl bg-white p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center"
                  >
                    <div className="text-5xl mb-4">✓</div>
                    <h3
                      className="text-2xl font-bold text-brand-text mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-brand-muted">
                      Thank you for reaching out. I'll be in touch within 1–2 business days.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-brand-text">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          required
                          className="px-4 py-3 border border-brand-border rounded-lg text-sm text-brand-text bg-brand-bg-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-brand-text">
                          Email Address <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@example.com"
                          required
                          className="px-4 py-3 border border-brand-border rounded-lg text-sm text-brand-text bg-brand-bg-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-brand-text">
                        Subject <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Brand identity project"
                        required
                        className="px-4 py-3 border border-brand-border rounded-lg text-sm text-brand-text bg-brand-bg-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-brand-text">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="px-4 py-3 border border-brand-border rounded-lg text-sm text-brand-text bg-brand-bg-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      >
                        <option value="">Select a service (optional)</option>
                        <option value="brand-identity">Brand Identity</option>
                        <option value="print">Print Design</option>
                        <option value="packaging">Packaging Design</option>
                        <option value="digital">UI &amp; Digital Design</option>
                        <option value="illustration">Illustration</option>
                        <option value="art-direction">Art Direction</option>
                        <option value="other">Other / Not sure yet</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-brand-text">
                        Message <span className="text-accent">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell me about your project — goals, timeline, budget range, and any details that would be helpful."
                        required
                        className="px-4 py-3 border border-brand-border rounded-lg text-sm text-brand-text bg-brand-bg-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-vertical"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {sending ? 'Sending…' : 'Send Message →'}
                    </button>
                  </form>
                )}
              </BackgroundGradient>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="relative py-24 bg-[#0d0d0d] overflow-hidden">
        <BackgroundBeams className="opacity-40" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag">Process</span>
            <h2
              className="text-4xl font-bold text-white mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How I Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-accent/40 transition-all duration-300"
              >
                <p
                  className="text-4xl font-bold text-accent mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {num}
                </p>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
