import bali from '../assets/images/dest-bali.webp'
import capeTown from '../assets/images/dest-cape-town.webp'
import kyoto from '../assets/images/dest-kyoto.webp'
import machuPicchu from '../assets/images/dest-machu-picchu.webp'
import santorini from '../assets/images/dest-santorini.webp'
import swissAlps from '../assets/images/dest-swiss-alps.webp'
import type { Destination } from '../types.ts'

export const destinations: Destination[] = [
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    blurb: 'Whitewashed villages and caldera sunsets.',
    image: santorini,
    alt: 'Blue-domed churches above the Aegean Sea in Santorini',
    priceFrom: 1290,
    rating: 4.9,
    tags: ['hotels', 'restaurants', 'food', 'beaches', 'island', 'europe'],
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    blurb: 'Ancient temples and lantern-lit streets.',
    image: kyoto,
    alt: 'Yasaka Pagoda rising above a traditional street in Kyoto at sunset',
    priceFrom: 1450,
    rating: 4.9,
    tags: ['places', 'temples', 'culture', 'restaurants', 'food', 'shopping', 'asia'],
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    blurb: 'Water temples, rice terraces and surf.',
    image: bali,
    alt: 'Pura Ulun Danu Beratan water temple on a calm lake in Bali',
    priceFrom: 980,
    rating: 4.8,
    tags: ['hotels', 'beaches', 'places', 'temples', 'restaurants', 'food', 'island', 'asia'],
  },
  {
    id: 'swiss-alps',
    name: 'Swiss Alps',
    country: 'Switzerland',
    blurb: 'Storybook valleys and glacier peaks.',
    image: swissAlps,
    alt: 'Chalets below towering cliffs in an alpine valley in Switzerland',
    priceFrom: 1690,
    rating: 4.9,
    tags: ['places', 'hotels', 'mountains', 'hiking', 'nature', 'europe'],
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    country: 'Peru',
    blurb: 'The lost Inca citadel above the clouds.',
    image: machuPicchu,
    alt: 'The ruins of Machu Picchu beneath Huayna Picchu mountain',
    priceFrom: 1350,
    rating: 4.8,
    tags: ['places', 'culture', 'history', 'hiking', 'mountains', 'south america'],
  },
  {
    id: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    blurb: 'Table Mountain, beaches and world-class food.',
    image: capeTown,
    alt: 'Turquoise bay beneath mountain peaks near Cape Town',
    priceFrom: 1190,
    rating: 4.8,
    tags: ['restaurants', 'food', 'shopping', 'beaches', 'places', 'wine', 'africa'],
  },
]
