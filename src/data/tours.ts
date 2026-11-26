import cappadocia from '../assets/images/tour-cappadocia.webp'
import iceland from '../assets/images/tour-iceland.webp'
import serengeti from '../assets/images/tour-serengeti.webp'
import type { Tour } from '../types.ts'

export const tours: Tour[] = [
  {
    id: 'cappadocia-balloons',
    title: 'Sunrise balloon flight',
    location: 'Cappadocia, Türkiye',
    image: cappadocia,
    alt: 'Travellers watching hot-air balloons rise over Cappadocia',
    days: 3,
    groupSize: 12,
    rating: 4.9,
    reviews: 418,
    price: 690,
  },
  {
    id: 'serengeti-safari',
    title: 'Great Migration safari',
    location: 'Serengeti, Tanzania',
    image: serengeti,
    alt: 'Safari vehicle crossing the savanna at sunset',
    days: 6,
    groupSize: 8,
    rating: 4.9,
    reviews: 276,
    price: 2450,
  },
  {
    id: 'iceland-aurora',
    title: 'Northern lights escape',
    location: 'South Coast, Iceland',
    image: iceland,
    alt: 'Green northern lights glowing above icebergs in Iceland',
    days: 5,
    groupSize: 10,
    rating: 4.8,
    reviews: 193,
    price: 1590,
  },
]
