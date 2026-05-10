import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import IntroAnimation from './components/IntroAnimation'
import PageTransition from './components/PageTransition'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"          element={<PageTransition><Home /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
        <Route path="/about"     element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact"   element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)

  useSmoothScroll({ disabled: !introComplete })

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  return (
    <>
      <IntroAnimation onComplete={handleIntroComplete} />

      {/* Site fades in after intro curtain lifts */}
      <div
        style={{
          opacity: introComplete ? 1 : 0,
          transition: 'opacity 0.5s ease 0.1s',
          pointerEvents: introComplete ? 'auto' : 'none',
        }}
      >
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}
