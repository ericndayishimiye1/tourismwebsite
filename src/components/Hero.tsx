import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import hero1600 from '../assets/images/hero-1600.webp'
import hero2560 from '../assets/images/hero-2560.webp'
import heroPortrait from '../assets/images/hero-portrait.webp'
import { easeOut } from '../lib/motion.ts'
import type { SearchQuery } from '../types.ts'
import SearchBar from './SearchBar.tsx'

interface HeroProps {
  onSearch: (query: SearchQuery) => void
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: easeOut },
})

export default function Hero({ onSearch }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)

  // Gentle parallax: the photo drifts down a little as the hero scrolls away
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      id="home"
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh items-center overflow-hidden pt-28 pb-44 sm:pb-52"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: easeOut }}
          className="size-full"
        >
          {/* Portrait crop for phones & tablets held upright, wide photo everywhere else */}
          <picture className="block size-full">
            <source media="(orientation: portrait)" srcSet={heroPortrait} />
            <img
              src={hero1600}
              srcSet={`${hero1600} 1600w, ${hero2560} 2560w`}
              sizes="100vw"
              alt="Turquoise lagoon framed by the branches of a tropical tree"
              fetchPriority="high"
              className="size-full object-cover"
            />
          </picture>
        </motion.div>
        {/* Soft shading keeps the white text readable on the bright photo */}
        <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/15 to-black/40" />
        <div className="absolute inset-0 bg-linear-to-r from-black/35 via-black/10 to-transparent" />
      </motion.div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.h1
          id="hero-title"
          {...fadeUp(0.15)}
          className="text-5xl leading-[1.05] font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          Explore
          <span className="block font-light text-white/90">your amazing city.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl"
        >
          Find great places to stay, eat, shop or visit, handpicked by local experts.
        </motion.p>

        <motion.div {...fadeUp(0.45)} className="mt-10">
          <SearchBar onSearch={onSearch} />
        </motion.div>
      </div>
    </section>
  )
}
