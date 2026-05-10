import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LETTERS = 'Emily Smith'.split('')

export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState('logo')   // logo → tagline → exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('tagline'), 1200)
    const t2 = setTimeout(() => setPhase('exit'),    2400)
    // Tell the site it can reveal itself (fade-in starts)
    const t3 = setTimeout(() => onComplete(),        3000)
    // THEN unmount the overlay so it no longer blocks interaction
    const t4 = setTimeout(() => setPhase('done'),    3500)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d0d0d] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Top curtain */}
          <motion.div
            className="absolute inset-x-0 top-0 bg-[#c8956c] origin-top"
            initial={{ scaleY: 1 }}
            animate={phase === 'exit' ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
            style={{ height: '50%' }}
          />
          {/* Bottom curtain */}
          <motion.div
            className="absolute inset-x-0 bottom-0 bg-[#c8956c] origin-bottom"
            initial={{ scaleY: 1 }}
            animate={phase === 'exit' ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
            style={{ height: '50%' }}
          />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Name — letters animate in one by one */}
            <div className="overflow-hidden flex gap-[0.02em] mb-3">
              {LETTERS.map((char, i) => (
                <motion.span
                  key={i}
                  className="font-heading text-5xl md:text-7xl font-bold text-white inline-block"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.33, 1, 0.68, 1],
                    delay: 0.05 + i * 0.045,
                  }}
                >
                  {char === ' ' ? ' ' : char}
                </motion.span>
              ))}
            </div>

            {/* Accent line */}
            <motion.div
              className="h-[2px] bg-white/70"
              initial={{ width: 0 }}
              animate={{ width: phase === 'logo' ? 0 : 160 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            />

            {/* Tagline */}
            <motion.p
              className="mt-4 text-xs tracking-[0.3em] uppercase text-white/70 font-medium"
              initial={{ opacity: 0, y: 6 }}
              animate={phase !== 'logo' ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Freelance Graphic Designer
            </motion.p>
          </div>

          {/* Noise / grain overlay for cinematic feel */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
