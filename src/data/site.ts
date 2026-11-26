import type { NavLink } from '../types.ts'

/** Brand details: rename the site here. */
export const site = {
  name: 'Roam',
  email: 'hello@example.com',
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Tours', href: '#tours' },
  { label: 'Hotels', href: '#hotels' },
  { label: 'Contact', href: '#contact' },
]

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'Explore',
    links: [
      { label: 'Destinations', href: '#destinations' },
      { label: 'Tours', href: '#tours' },
      { label: 'Hotels', href: '#hotels' },
      { label: 'Reviews', href: '#reviews' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help centre', href: '#' },
      { label: 'Cancellation options', href: '#' },
      { label: 'Safety information', href: '#' },
      { label: 'Accessibility', href: '#' },
    ],
  },
]

export const legalLinks: NavLink[] = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Cookies', href: '#' },
]
