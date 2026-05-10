import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Spotlight } from '../components/ui/spotlight'
import { HoverEffect } from '../components/ui/card-hover-effect'
import { BackgroundBeams } from '../components/ui/background-beams'
import { BackgroundGradient } from '../components/ui/background-gradient'

const featuredWork = [
  {
    category: 'Branding',
    title: 'Bloom Bakery Identity',
    description: 'Full brand identity including logo, color palette, and packaging design for a boutique artisan bakery.',
    image: 'https://placehold.co/560x340/f0e6d9/c8956c?text=Bloom+Bakery',
    link: '/portfolio',
  },
  {
    category: 'Print Design',
    title: 'Verdant Annual Report',
    description: 'Elegant 48-page annual report balancing data visualization with compelling photography for an environmental non-profit.',
    image: 'https://placehold.co/560x340/e8f0ec/5c9e70?text=Verdant+Report',
    link: '/portfolio',
  },
  {
    category: 'UI / Digital',
    title: 'Lumino App Interface',
    description: 'Clean, intuitive UI design for a productivity app — from wireframes through high-fidelity Figma mockups.',
    image: 'https://placehold.co/560x340/e8eaf6/5c6bc0?text=Lumino+App',
    link: '/portfolio',
  },
]

const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '80+', label: 'Projects Delivered' },
  { value: '40+', label: 'Happy Clients' },
  { value: '12', label: 'Design Awards' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d0d0d]">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#c8956c" />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container-custom relative z-10 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-5 px-3 py-1.5 border border-accent/30 rounded-full bg-accent/10"
              >
                Freelance Graphic Designer
              </motion.span>

              <h1
                className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Creative Design
                <br />
                That{' '}
                <span className="shimmer-text">Tells Your Story</span>
              </h1>

              <p className="text-neutral-400 text-lg leading-relaxed max-w-md mb-8">
                Hi, I'm Emily Smith — a graphic designer passionate about crafting beautiful, purposeful visuals. From brand identities to print and digital design, I help businesses make a lasting impression.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/portfolio" className="btn-primary">
                  View My Portfolio
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-sm font-medium text-sm tracking-wide text-white border-2 border-white/20 hover:border-accent/60 transition-all duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent/30 rounded-2xl blur opacity-30" />
                <img
                  src="https://placehold.co/540x600/1a1a2e/c8956c?text=Emily+Smith"
                  alt="Emily Smith — Graphic Designer"
                  className="relative rounded-2xl w-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-8 bottom-10 bg-white rounded-xl px-4 py-3 shadow-2xl"
              >
                <p className="text-xs text-brand-muted font-medium">Available for projects</p>
                <p className="text-sm font-bold text-brand-text">Q3 2026</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold text-accent font-heading">{value}</p>
                <p className="text-xs text-neutral-500 tracking-wider uppercase mt-1">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="page-section bg-brand-bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-tag">Selected Work</span>
            <h2 className="section-heading">Featured Projects</h2>
            <p className="text-brand-muted mt-3 max-w-md mx-auto">
              A selection of recent projects across branding, print, and digital design.
            </p>
          </motion.div>

          <HoverEffect items={featuredWork} />

          <div className="text-center mt-10">
            <Link to="/portfolio" className="btn-outline">
              See All Work
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="page-section bg-brand-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-sm" />
                <img
                  src="https://placehold.co/540x400/faf9f7/c8956c?text=About+Emily"
                  alt="About Emily Smith"
                  className="relative rounded-2xl w-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-tag">About Me</span>
              <h2 className="section-heading mb-5">Designing With Purpose &amp; Passion</h2>
              <p className="text-brand-muted leading-relaxed mb-4">
                With over 7 years of experience working with clients ranging from startups to established brands, I bring a thoughtful, collaborative approach to every project.
              </p>
              <p className="text-brand-muted leading-relaxed mb-8">
                I believe great design is more than aesthetics — it's strategy, communication, and emotion all working together.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Me
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <section className="py-12 bg-brand-bg-light border-y border-brand-border overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['Brand Identity', 'Print Design', 'Packaging', 'UI / Digital', 'Illustration', 'Art Direction'].map(
              (service, i) => (
                <motion.span
                  key={service}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 text-sm font-medium text-brand-muted border border-brand-border rounded-full bg-white hover:border-accent hover:text-accent transition-all cursor-default"
                >
                  {service}
                </motion.span>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 bg-[#0d0d0d] overflow-hidden">
        <BackgroundBeams />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag text-accent/80">Let's Work Together</span>
            <h2
              className="text-4xl lg:text-6xl font-bold text-white mb-6 mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Have a Project in Mind?
            </h2>
            <p className="text-neutral-400 max-w-md mx-auto mb-10 text-lg">
              I'd love to hear about your vision and discuss how we can create something remarkable together.
            </p>
            <BackgroundGradient containerClassName="inline-block" className="rounded-sm">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-[#0d0d0d] text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-[#1a1a1a] transition-colors"
              >
                Get in Touch →
              </Link>
            </BackgroundGradient>
          </motion.div>
        </div>
      </section>
    </>
  )
}
