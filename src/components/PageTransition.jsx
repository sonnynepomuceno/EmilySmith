import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, y: 18 },
  enter:   { opacity: 1, y: 0,  transition: { duration: 0.45, ease: [0.33, 1, 0.68, 1] } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.3,  ease: [0.76, 0, 0.24, 1] } },
}

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
