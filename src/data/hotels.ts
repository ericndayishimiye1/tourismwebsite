import krabi from '../assets/images/hotel-krabi.webp'
import maldives from '../assets/images/hotel-maldives.webp'
import zanzibar from '../assets/images/hotel-zanzibar.webp'
import type { Hotel } from '../types.ts'

export const hotels: Hotel[] = [
  {
    id: 'lagoon-water-villas',
    name: 'Lagoon Water Villas',
    location: 'Baa Atoll, Maldives',
    image: maldives,
    alt: 'Wooden boardwalk leading to thatched overwater villas',
    rating: 4.9,
    reviews: 812,
    pricePerNight: 540,
    perks: ['Overwater villa', 'Breakfast included'],
  },
  {
    id: 'palm-terrace-resort',
    name: 'Palm Terrace Resort',
    location: 'Krabi, Thailand',
    image: krabi,
    alt: 'Resort swimming pool surrounded by palms and green hills',
    rating: 4.8,
    reviews: 1204,
    pricePerNight: 210,
    perks: ['Free cancellation', 'Pool view'],
  },
  {
    id: 'driftwood-beach-house',
    name: 'Driftwood Beach House',
    location: 'Zanzibar, Tanzania',
    image: zanzibar,
    alt: 'Infinity pool and sun loungers facing the ocean under tropical trees',
    rating: 4.7,
    reviews: 486,
    pricePerNight: 180,
    perks: ['Beachfront', 'Spa & yoga'],
  },
]
