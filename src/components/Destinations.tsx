import { Star, X } from 'lucide-react'
import { destinations } from '../data/destinations.ts'
import { formatPrice } from '../lib/format.ts'
import { filterDestinations } from '../lib/search.ts'
import type { Destination, SearchQuery } from '../types.ts'
import Reveal from './ui/Reveal.tsx'
import SectionHeading from './ui/SectionHeading.tsx'

interface DestinationsProps {
  search: SearchQuery | null
  onClearSearch: () => void
}

export default function Destinations({ search, onClearSearch }: DestinationsProps) {
  const results = filterDestinations(destinations, search)

  return (
    <section id="destinations" aria-labelledby="destinations-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          id="destinations-title"
          title="Popular destinations."
          subtitle="Places our travellers can’t stop talking about."
        />

        {/* Announces the result count to screen readers when a search runs */}
        <div aria-live="polite">
          {search && (
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl bg-canvas px-5 py-4 text-sm text-muted">
              <p>
                {results.length} {results.length === 1 ? 'destination' : 'destinations'} for{' '}
                <span className="font-semibold text-ink">{describeSearch(search)}</span>
              </p>
              <button
                type="button"
                onClick={onClearSearch}
                className="inline-flex items-center gap-1 font-medium text-accent hover:underline sm:ml-auto"
              >
                <X className="size-4" aria-hidden />
                Clear search
              </button>
            </div>
          )}
        </div>

        {results.length > 0 ? (
          // Swipeable row on phones, grid from tablets up
          <ul className="-mx-5 mt-12 no-scrollbar flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
            {results.map((destination, index) => (
              <li key={destination.id} className="w-[80%] shrink-0 snap-start sm:w-auto">
                <Reveal delay={(index % 3) * 0.08} className="h-full">
                  <DestinationCard destination={destination} />
                </Reveal>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-12 rounded-3xl bg-canvas px-6 py-16 text-center">
            <p className="text-lg font-semibold text-ink">No destinations match your search.</p>
            <p className="mt-2 text-muted">Try another keyword, or search anywhere.</p>
            <button
              type="button"
              onClick={onClearSearch}
              className="mt-6 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Show all destinations
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function describeSearch({ keyword, where }: SearchQuery): string {
  const place = destinations.find((destination) => destination.id === where)?.name
  const text = keyword.trim()
  if (text && place) return `“${text}” in ${place}`
  if (text) return `“${text}”`
  return place ?? 'your search'
}

function DestinationCard({ destination }: { destination: Destination }) {
  const { name, country, blurb, image, alt, priceFrom, rating } = destination

  return (
    <article className="group relative isolate aspect-[4/5] overflow-hidden rounded-3xl bg-canvas">
      <img
        src={image}
        alt={alt}
        width={800}
        height={1000}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/75 via-black/15 to-transparent" />

      <p className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-black/25 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/25 backdrop-blur-md">
        <Star className="size-3.5 fill-current" aria-hidden />
        <span className="sr-only">Rated</span>
        {rating.toFixed(1)}
      </p>

      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="text-sm text-white/75">{country}</p>
        <h3 className="mt-0.5 text-2xl font-semibold tracking-tight">{name}</h3>
        <p className="mt-1 text-sm text-white/80">{blurb}</p>
        <p className="mt-4 text-sm text-white/80">
          From <span className="text-base font-semibold text-white">{formatPrice(priceFrom)}</span>
        </p>
      </div>
    </article>
  )
}
