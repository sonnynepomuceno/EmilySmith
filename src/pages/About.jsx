import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Timeline } from '../components/ui/timeline'
import { WobbleCard } from '../components/ui/wobble-card'
import { BackgroundGradient } from '../components/ui/background-gradient'

const skills = [
  'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Figma',
  'Brand Identity', 'Typography', 'Packaging Design', 'Print Design',
  'UI/UX Design', 'Motion Graphics', 'Illustration', 'Art Direction',
]

const services = [
  {
    icon: '✦',
    title: 'Brand Identity',
    desc: 'Logo design, color systems, typography, brand guidelines, and the full visual language your business needs to stand out.',
  },
  {
    icon: '◈',
    title: 'Print Design',
    desc: 'Brochures, annual reports, event programs, posters, stationery — beautifully designed print materials.',
  },
  {
    icon: '⬡',
    title: 'Packaging Design',
    desc: 'Product packaging that earns shelf space — structural layouts, label design, and complete packaging systems.',
  },
  {
    icon: '▣',
    title: 'UI & Digital',
    desc: 'Website mockups, app interfaces, social media assets, and digital marketing materials for visual impact.',
  },
  {
    icon: '❋',
    title: 'Illustration',
    desc: 'Custom hand-drawn or digital illustrations to add a distinctive, human touch to your brand or publication.',
  },
  {
    icon: '◉',
    title: 'Art Direction',
    desc: 'Creative leadership for photo shoots, campaigns, and multi-channel projects — ensuring a unified story.',
  },
]

const timelineData = [
  {
    title: '2020 – Now',
    content: (
      <div>
        <h3 className="font-bold text-brand-text text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
          Freelance Graphic Designer
        </h3>
        <p className="text-brand-muted text-sm leading-relaxed">
          Independent practice serving clients across branding, packaging, print, and digital. Clients include startups, established brands, and non-profit organizations.
        </p>
      </div>
    ),
  },
  {
    title: '2017–2020',
    content: (
      <div>
        <h3 className="font-bold text-brand-text text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
          Senior Designer — Studio Maren
        </h3>
        <p className="text-brand-muted text-sm leading-relaxed">
          Led brand identity projects for mid-size retail and hospitality clients. Mentored junior designers and managed client presentations in Portland, OR.
        </p>
      </div>
    ),
  },
  {
    title: '2015–2017',
    content: (
      <div>
        <h3 className="font-bold text-brand-text text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
          Graphic Designer — Brightline Agency
        </h3>
        <p className="text-brand-muted text-sm leading-relaxed">
          Designed print and digital marketing materials across a range of consumer product brands. Worked closely with copywriters and account managers.
        </p>
      </div>
    ),
  },
  {
    title: '2015',
    content: (
      <div>
        <h3 className="font-bold text-brand-text text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
          BFA in Graphic Design — Portland State University
        </h3>
        <p className="text-brand-muted text-sm leading-relaxed">
          Graduated with honors. Senior thesis focused on typographic identity systems for cultural institutions.
        </p>
      </div>
    ),
  },
]

export default function About() {
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
            <span className="section-tag">About Me</span>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hello, I'm Emily
            </h1>
            <p className="text-neutral-400 mt-4 max-w-md mx-auto">
              Designer, storyteller, and creative problem-solver based in Portland, OR.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="page-section bg-brand-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <BackgroundGradient containerClassName="rounded-2xl" className="rounded-2xl">
                <img
                  src="https://placehold.co/480x580/faf9f7/c8956c?text=Emily+Smith"
                  alt="Emily Smith"
                  className="rounded-2xl w-full object-cover"
                />
              </BackgroundGradient>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-tag">My Story</span>
              <h2 className="section-heading mb-5">
                Graphic Designer with a Passion for Meaningful Visuals
              </h2>
              <p className="text-brand-muted leading-relaxed mb-4">
                I'm a freelance graphic designer with over 7 years of experience helping brands communicate with clarity and confidence. I specialize in brand identity, print design, packaging, and digital UI — with a belief that every visual decision should serve a purpose.
              </p>
              <p className="text-brand-muted leading-relaxed mb-4">
                My work spans a wide range of industries: from independent food and beverage brands to corporate clients in law, tech, and non-profit sectors.
              </p>
              <p className="text-brand-muted leading-relaxed mb-8">
                When I'm not designing, you'll find me exploring Portland's art galleries, hiking the Columbia River Gorge, or experimenting with hand-lettering in my home studio.
              </p>

              <h3
                className="text-lg font-bold text-brand-text mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Tools &amp; Skills
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="px-3 py-1.5 text-xs font-medium text-brand-muted border border-brand-border rounded-full bg-brand-bg-light hover:border-accent hover:text-accent transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <Link to="/contact" className="btn-primary">Work With Me</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="page-section bg-[#0d0d0d]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-tag">What I Do</span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mt-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Services I Offer
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <WobbleCard containerClassName="h-full">
                  <div className="text-2xl mb-3 text-accent">{s.icon}</div>
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
                </WobbleCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="page-section bg-brand-bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <span className="section-tag">My Journey</span>
            <h2 className="section-heading">Experience</h2>
          </motion.div>
          <Timeline data={timelineData} />
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
            <span className="section-tag">Collaborate</span>
            <h2 className="section-heading mb-4">Ready to Work Together?</h2>
            <p className="text-brand-muted max-w-md mx-auto mb-8">
              I take on a limited number of projects each month to ensure every client receives my full attention.
            </p>
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
