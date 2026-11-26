import { Star } from 'lucide-react'
import { hotels } from '../data/hotels.ts'
import { formatPrice } from '../lib/format.ts'
import { centredLastCard, isLoneLast } from '../lib/layout.ts'
import Reveal from './ui/Reveal.tsx'
import SectionHeading from './ui/SectionHeading.tsx'

export default function Hotels() {
  return (
    <section id="hotels" aria-labelledby="hotels-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          id="hotels-title"
          title="Stays we love."
          subtitle="Boutique hotels, personally reviewed."
        />

        <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel, index) => {
            const [highlight, ...otherPerks] = hotel.perks
            return (
              <li
                key={hotel.id}
                className={isLoneLast(index, hotels.length) ? centredLastCard : undefined}
              >
                <Reveal delay={index * 0.08}>
                  <article className="group">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-canvas">
                      <img
                        src={hotel.image}
                        alt={hotel.alt}
                        width={800}
                        height={600}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
                      />
                      {highlight && (
                        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink shadow-sm backdrop-blur-md">
                          {highlight}
                        </span>
                      )}
                    </div>

                    <div className="mt-5 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-ink">
                          {hotel.name}
                        </h3>
                        <p className="mt-0.5 text-sm text-muted">{hotel.location}</p>
                      </div>
                      <p className="flex shrink-0 items-center gap-1 text-sm text-muted">
                        <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden />
                        <span className="sr-only">Rated</span>
                        <span className="font-medium text-ink">{hotel.rating.toFixed(1)}</span>
                        <span>
                          ({hotel.reviews.toLocaleString('en-US')}
                          <span className="sr-only"> reviews</span>)
                        </span>
                      </p>
                    </div>

                    <p className="mt-3 text-sm text-muted">
                      <span className="text-base font-semibold text-ink">
                        {formatPrice(hotel.pricePerNight)}
                      </span>{' '}
                      / night
                      {otherPerks.length > 0 && ` · ${otherPerks.join(' · ')}`}
                    </p>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
