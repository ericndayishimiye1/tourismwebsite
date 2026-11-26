import { MotionConfig } from 'motion/react'
import { useState } from 'react'
import Destinations from './components/Destinations.tsx'
import Features from './components/Features.tsx'
import Footer from './components/Footer.tsx'
import Hero from './components/Hero.tsx'
import Hotels from './components/Hotels.tsx'
import Navbar from './components/Navbar.tsx'
import Newsletter from './components/Newsletter.tsx'
import Testimonials from './components/Testimonials.tsx'
import Tours from './components/Tours.tsx'
import { isEmptyQuery } from './lib/search.ts'
import type { SearchQuery } from './types.ts'

export default function App() {
  const [search, setSearch] = useState<SearchQuery | null>(null)

  // Hero search: filter the destinations, then glide down to the results
  const handleSearch = (query: SearchQuery) => {
    setSearch(isEmptyQuery(query) ? null : query)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document
      .getElementById('destinations')
      ?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    // reducedMotion="user" respects the visitor's "reduce motion" system setting
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink focus:shadow-card"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero onSearch={handleSearch} />
        <Features />
        <Destinations search={search} onClearSearch={() => setSearch(null)} />
        <Tours />
        <Hotels />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </MotionConfig>
  )
}
