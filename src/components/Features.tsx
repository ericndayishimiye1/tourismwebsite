import { Award, BadgeCheck, Headset, Heart } from 'lucide-react'
import Reveal from './ui/Reveal.tsx'

const features = [
  {
    icon: BadgeCheck,
    title: 'Best Price Guarantee',
    text: 'Found it cheaper elsewhere? We will match the price, no questions asked.',
  },
  {
    icon: Heart,
    title: 'Travellers Love Us',
    text: 'Rated 4.9 out of 5 by more than 120,000 explorers worldwide.',
  },
  {
    icon: Award,
    title: 'Best Travel Agents',
    text: 'Local experts who design every trip around the way you travel.',
  },
  {
    icon: Headset,
    title: 'Dedicated Support',
    text: 'Real people ready to help 24/7, wherever you are in the world.',
  },
]

export default function Features() {
  return (
    // Pulled up so the cards overlap the bottom of the hero photo
    <section id="about" aria-labelledby="about-title" className="relative z-10 -mt-28 sm:-mt-32">
      <h2 id="about-title" className="sr-only">
        Why travel with us
      </h2>
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }, index) => (
            <li key={title}>
              <Reveal delay={0.1 + index * 0.08} className="h-full">
                <div className="flex h-full items-start gap-5 rounded-3xl bg-white p-6 shadow-elevated sm:flex-col sm:items-center sm:p-8 sm:text-center">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent sm:size-14">
                    <Icon className="size-6 sm:size-7" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-ink">{title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
