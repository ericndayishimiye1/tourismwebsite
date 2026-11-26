import { ChevronRight, Clock, MapPin, Star, Users } from 'lucide-react'
import { tours } from '../data/tours.ts'
import { formatPrice } from '../lib/format.ts'
import { centredLastCard, isLoneLast } from '../lib/layout.ts'
import Reveal from './ui/Reveal.tsx'
import SectionHeading from './ui/SectionHeading.tsx'

export default function Tours() {
  return (
    <section id="tours" aria-labelledby="tours-title" className="bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          id="tours-title"
          title="Featured tours."
          subtitle="Small groups and expert local guides."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, index) => (
            <li
              key={tour.id}
              className={isLoneLast(index, tours.length) ? centredLastCard : undefined}
            >
              <Reveal delay={index * 0.08} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-shadow duration-300 hover:shadow-elevated">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex items-center gap-1.5 text-sm text-muted">
                      <MapPin className="size-4" aria-hidden />
                      {tour.location}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">
                      {tour.title}
                    </h3>
                    <ul className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                      <li className="inline-flex items-center gap-1.5">
                        <Clock className="size-4" aria-hidden />
                        {tour.days} days
                      </li>
                      <li className="inline-flex items-center gap-1.5">
                        <Users className="size-4" aria-hidden />
                        Up to {tour.groupSize}
                      </li>
                      <li className="inline-flex items-center gap-1">
                        <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden />
                        <span className="sr-only">Rated</span>
                        <span className="font-medium text-ink">{tour.rating.toFixed(1)}</span>
                        <span>
                          ({tour.reviews}
                          <span className="sr-only"> reviews</span>)
                        </span>
                      </li>
                    </ul>

                    <div className="mt-auto pt-6">
                      <div className="flex items-end justify-between gap-4 border-t border-black/5 pt-5">
                        <p className="text-sm text-muted">
                          <span className="text-xl font-semibold tracking-tight text-ink">
                            {formatPrice(tour.price)}
                          </span>{' '}
                          / person
                        </p>
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-0.5 text-sm font-medium text-accent hover:underline"
                        >
                          Book now
                          <span className="sr-only">: {tour.title}</span>
                          <ChevronRight className="size-4" aria-hidden />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
