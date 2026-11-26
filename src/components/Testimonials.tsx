import { Star } from 'lucide-react'
import { stats, testimonials } from '../data/testimonials.ts'
import { initials } from '../lib/format.ts'
import Reveal from './ui/Reveal.tsx'
import SectionHeading from './ui/SectionHeading.tsx'

export default function Testimonials() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          id="reviews-title"
          title="Loved by travellers."
          subtitle="Don’t just take our word for it."
          align="center"
        />

        <Reveal>
          <dl className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-y-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse items-center gap-1 text-center"
              >
                <dt className="text-sm text-muted">{stat.label}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <li key={testimonial.name}>
              <Reveal delay={index * 0.08} className="h-full">
                <figure className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-card">
                  <div
                    role="img"
                    aria-label="Rated 5 out of 5"
                    className="flex gap-0.5 text-amber-400"
                  >
                    {Array.from({ length: 5 }, (_, star) => (
                      <Star key={star} className="size-4 fill-current" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-ink">
                    <p>“{testimonial.quote}”</p>
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3">
                    <span
                      aria-hidden
                      className="flex size-11 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent"
                    >
                      {initials(testimonial.name)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">
                        {testimonial.name}
                      </span>
                      <span className="block text-sm text-muted">{testimonial.location}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
