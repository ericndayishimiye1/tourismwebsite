export interface NavLink {
  label: string
  href: string
}

export interface SearchQuery {
  /** Free-text keyword(s), e.g. "food" or "hotel beach". */
  keyword: string
  /** Destination id chosen in the "Where" field, or an empty string for anywhere. */
  where: string
}

export interface Destination {
  id: string
  name: string
  country: string
  blurb: string
  image: string
  alt: string
  priceFrom: number
  rating: number
  /** Extra search keywords: categories, activities, region… */
  tags: string[]
}

export interface Tour {
  id: string
  title: string
  location: string
  image: string
  alt: string
  days: number
  groupSize: number
  rating: number
  reviews: number
  price: number
}

export interface Hotel {
  id: string
  name: string
  location: string
  image: string
  alt: string
  rating: number
  reviews: number
  pricePerNight: number
  perks: string[]
}

export interface Testimonial {
  name: string
  location: string
  quote: string
}

export interface Stat {
  value: string
  label: string
}
