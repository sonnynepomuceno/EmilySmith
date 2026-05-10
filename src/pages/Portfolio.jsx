import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BackgroundGradient } from '../components/ui/background-gradient'

const projects = [
  {
    id: 1,
    category: 'branding',
    categoryLabel: 'Branding',
    title: 'Bloom Bakery Identity',
    description: 'Full brand identity with logo, palette, and packaging for a boutique artisan bakery.',
    detail: 'A complete brand identity system for Bloom Bakery — a boutique artisan bakery in Portland. The project included logo design, a custom color palette, typography selection, business cards, and packaging. The warm, organic aesthetic reflects the handcrafted nature of their products.',
    image: 'https://placehold.co/560x340/f0e6d9/c8956c?text=Bloom+Bakery',
    modalImage: 'https://placehold.co/720x400/f0e6d9/c8956c?text=Bloom+Bakery+Identity',
  },
  {
    id: 2,
    category: 'print',
    categoryLabel: 'Print',
    title: 'Verdant Annual Report',
    description: 'Elegant 48-page annual report balancing data visualization with compelling photography.',
    detail: 'Annual report design for Verdant, an environmental non-profit. The challenge was to present dense financial and impact data in an engaging, readable format. Custom infographics, full-bleed photography layouts, and a cohesive green-toned palette brought the story to life across 48 pages.',
    image: 'https://placehold.co/560x340/e8f0ec/5c9e70?text=Verdant+Report',
    modalImage: 'https://placehold.co/720x400/e8f0ec/5c9e70?text=Verdant+Annual+Report',
  },
  {
    id: 3,
    category: 'digital',
    categoryLabel: 'Digital',
    title: 'Lumino App Interface',
    description: 'Wireframes through high-fidelity mockups for a clean productivity app.',
    detail: 'UI/UX design for Lumino, a productivity and focus app. Starting from user research and wireframes, I developed a clean, distraction-free interface that prioritizes readability and quick task access. Delivered in Figma with a full design system including components and interaction specs.',
    image: 'https://placehold.co/560x340/e8eaf6/5c6bc0?text=Lumino+App',
    modalImage: 'https://placehold.co/720x400/e8eaf6/5c6bc0?text=Lumino+App',
  },
  {
    id: 4,
    category: 'packaging',
    categoryLabel: 'Packaging',
    title: 'Terra Skincare Packaging',
    description: 'Sophisticated, sustainable packaging for 8 natural skincare product lines.',
    detail: 'Packaging design for Terra, a new line of natural skincare products. The brief called for a sophisticated yet approachable look that communicates purity and sustainability. Each of the 8 product lines received a unique color code while maintaining a unified visual language.',
    image: 'https://placehold.co/560x340/f5e6d0/b07840?text=Terra+Skincare',
    modalImage: 'https://placehold.co/720x400/f5e6d0/b07840?text=Terra+Packaging',
  },
  {
    id: 5,
    category: 'branding',
    categoryLabel: 'Branding',
    title: 'Crestwood Law Rebrand',
    description: 'Modern rebrand for a legal firm — logo, brand guidelines, stationery, and web mockup.',
    detail: 'Complete rebrand for Crestwood Law, a mid-size legal firm looking to modernize its image while retaining professional authority. Deliverables included a new logo, brand guidelines, stationery suite, website homepage mockup, and email signature templates.',
    image: 'https://placehold.co/560x340/e8e8e8/555555?text=Crestwood+Law',
    modalImage: 'https://placehold.co/720x400/e8e8e8/555555?text=Crestwood+Law',
  },
  {
    id: 6,
    category: 'print',
    categoryLabel: 'Print',
    title: 'Solstice Festival Posters',
    description: 'Series of 4 genre-themed event posters with bold typography and illustration.',
    detail: 'A series of 4 event posters for the Solstice Music Festival. Each poster celebrated a different genre (jazz, folk, electronic, classical) while maintaining a cohesive look for the festival brand. Bold typography, hand-drawn illustration elements, and risograph-inspired color separations defined the aesthetic.',
    image: 'https://placehold.co/560x340/fce4ec/c2185b?text=Solstice+Festival',
    modalImage: 'https://placehold.co/720x400/fce4ec/c2185b?text=Festival+Posters',
  },
]

const filters = [
  { key: 'all', label: 'All' },
  { key: 'branding', label: 'Branding' },
  { key: 'print', label: 'Print' },
  { key: 'digital', label: 'Digital' },
  { key: 'packaging', label: 'Packaging' },
]

export default function Portfolio() {
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

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
            <span className="section-tag">My Work</span>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Portfolio
            </h1>
            <p className="text-neutral-400 mt-4 max-w-md mx-auto">
              A curated collection of branding, print, and digital design projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="page-section bg-brand-bg-light">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                  active === key
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white text-brand-muted border-brand-border hover:border-accent hover:text-accent'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelected(project)}
                >
                  <BackgroundGradient containerClassName="h-full" className="bg-white h-full rounded-xl">
                    <div className="overflow-hidden rounded-xl bg-white h-full flex flex-col">
                      <div className="overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-1">
                          {project.categoryLabel}
                        </span>
                        <h3
                          className="font-bold text-brand-text text-lg mb-2 leading-tight"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {project.title}
                        </h3>
                        <p className="text-brand-muted text-sm leading-relaxed flex-1">
                          {project.description}
                        </p>
                        <span className="mt-4 text-accent text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </BackgroundGradient>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section bg-brand-bg text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Work With Me</span>
            <h2 className="section-heading mb-4">Like What You See?</h2>
            <p className="text-brand-muted max-w-md mx-auto mb-8">
              Let's create something remarkable together. I'm currently accepting new clients.
            </p>
            <Link to="/contact" className="btn-primary">Start a Project</Link>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selected.modalImage}
                  alt={selected.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center text-lg transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-7">
                <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                  {selected.categoryLabel}
                </span>
                <h2
                  className="text-2xl font-bold text-brand-text mt-1 mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {selected.title}
                </h2>
                <p className="text-brand-muted leading-relaxed">{selected.detail}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
