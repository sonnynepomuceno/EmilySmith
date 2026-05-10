import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { label: 'Behance', href: '#' },
  { label: 'Dribbble', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-heading text-2xl font-bold mb-3">
              Emily <span className="text-accent">Smith</span>
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              Freelance graphic designer passionate about crafting beautiful, purposeful visuals that help brands make a lasting impression.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">Navigation</p>
            <ul className="flex flex-col gap-2">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-sm text-neutral-400 hover:text-accent transition-colors"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">Follow My Work</p>
            <ul className="flex flex-col gap-2">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-neutral-400 hover:text-accent transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">&copy; 2026 Emily Smith. All rights reserved.</p>
          <p className="text-xs text-neutral-600">Freelance Graphic Designer · Portland, OR</p>
        </div>
      </div>
    </footer>
  )
}
