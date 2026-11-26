import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { navLinks, site } from '../data/site.ts'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Switch from transparent to frosted glass once the page starts scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // While the mobile menu is open: lock page scrolling and close on Escape
  useEffect(() => {
    if (!open) return
    const root = document.documentElement
    const previousOverflow = root.style.overflow
    root.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      root.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  // Close the mobile menu if the window grows to desktop width
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (desktop.matches) setOpen(false)
    }
    desktop.addEventListener('change', onChange)
    return () => desktop.removeEventListener('change', onChange)
  }, [])

  const solid = scrolled || open
  const close = () => setOpen(false)

  // Transparent over the hero, frosted glass when scrolled, plain white behind the open menu
  let headerStyle = 'border-transparent bg-transparent'
  if (scrolled) headerStyle = 'border-black/5 bg-white/80 backdrop-blur-xl backdrop-saturate-150'
  if (open) headerStyle = 'border-black/5 bg-white'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${headerStyle}`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8"
      >
        <a
          href="#home"
          onClick={close}
          className={`text-xl font-semibold tracking-tight transition-colors ${solid ? 'text-ink' : 'text-white'}`}
        >
          {site.name}
          <span className={`transition-colors ${solid ? 'text-accent' : 'text-white'}`}>.</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm transition-colors ${
                  solid ? 'text-ink/70 hover:text-ink' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:inline-flex"
          >
            Plan a trip
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`-mr-2 inline-flex size-10 items-center justify-center rounded-full transition-colors lg:hidden ${
              solid ? 'text-ink hover:bg-black/5' : 'text-white hover:bg-white/10'
            }`}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="h-[calc(100dvh-4rem)] overflow-y-auto bg-white lg:hidden"
          >
            <ul className="mx-auto max-w-6xl px-5 pt-4 sm:px-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.25 }}
                >
                  <a
                    href={link.href}
                    onClick={close}
                    className="block border-b border-black/5 py-4 text-2xl font-semibold tracking-tight text-ink"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mx-auto max-w-6xl px-5 pt-8 pb-10 sm:hidden">
              <a
                href="#contact"
                onClick={close}
                className="flex h-12 items-center justify-center rounded-full bg-accent text-base font-medium text-white"
              >
                Plan a trip
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
