import type { Stat, Testimonial } from '../types.ts'

export const stats: Stat[] = [
  { value: '120K+', label: 'Happy travellers' },
  { value: '350+', label: 'Destinations' },
  { value: '4.9', label: 'Average rating' },
  { value: '24/7', label: 'Human support' },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Sofia Martins',
    location: 'Lisbon, Portugal',
    quote: 'Every detail was taken care of. We simply showed up and fell in love with Kyoto.',
  },
  {
    name: 'Daniel Mensah',
    location: 'Accra, Ghana',
    quote:
      'The safari was the trip of a lifetime. When our flight changed at 3 a.m., a real person answered straight away.',
  },
  {
    name: 'Hannah Becker',
    location: 'Munich, Germany',
    quote:
      'Honest prices, beautiful stays and guides who genuinely love where they live. We have already booked again.',
  },
]
