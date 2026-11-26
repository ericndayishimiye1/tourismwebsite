import {
  ChevronDown,
  Hotel,
  Landmark,
  MapPin,
  Search,
  ShoppingBag,
  UtensilsCrossed,
} from 'lucide-react'
import { useId, useState, type FormEvent } from 'react'
import { destinations } from '../data/destinations.ts'
import type { SearchQuery } from '../types.ts'

const highlights = [
  { label: 'Restaurant', icon: UtensilsCrossed },
  { label: 'Hotel', icon: Hotel },
  { label: 'Places', icon: Landmark },
  { label: 'Shopping', icon: ShoppingBag },
]

interface SearchBarProps {
  onSearch: (query: SearchQuery) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [keyword, setKeyword] = useState('')
  const [where, setWhere] = useState('')
  const keywordId = useId()
  const whereId = useId()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch({ keyword: keyword.trim(), where })
  }

  const browse = (category: string) => {
    setKeyword(category)
    onSearch({ keyword: category, where })
  }

  return (
    <div>
      <form
        role="search"
        aria-label="Find places"
        onSubmit={handleSubmit}
        className="flex max-w-3xl flex-col gap-1 rounded-[1.75rem] bg-white p-2 shadow-float sm:flex-row sm:items-center sm:rounded-full"
      >
        <div className="relative sm:flex-1">
          <label htmlFor={keywordId} className="sr-only">
            What are you looking for?
          </label>
          <Search
            className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-subtle"
            aria-hidden
          />
          <input
            id={keywordId}
            type="search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="Ex: food, hotel, beach"
            autoComplete="off"
            enterKeyHint="search"
            className="h-12 w-full rounded-full bg-transparent pr-4 pl-12 text-base text-ink outline-none placeholder:text-subtle focus-visible:bg-canvas"
          />
        </div>

        <span className="mx-4 h-px shrink-0 bg-hairline sm:mx-0 sm:h-8 sm:w-px" aria-hidden />

        <div className="relative sm:w-56">
          <label htmlFor={whereId} className="sr-only">
            Where
          </label>
          <MapPin
            className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-subtle"
            aria-hidden
          />
          <select
            id={whereId}
            value={where}
            onChange={(event) => setWhere(event.target.value)}
            className="h-12 w-full cursor-pointer appearance-none rounded-full bg-transparent pr-10 pl-12 text-base text-ink outline-none focus-visible:bg-canvas"
          >
            <option value="">Anywhere</option>
            {destinations.map((destination) => (
              <option key={destination.id} value={destination.id}>
                {destination.name}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-subtle"
            aria-hidden
          />
        </div>

        <button
          type="submit"
          className="mt-1 inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-accent px-7 text-base font-medium text-white transition-colors hover:bg-accent-hover active:scale-[0.98] sm:mt-0"
        >
          Search
        </button>
      </form>

      <div className="mt-8">
        <p className="text-sm font-medium text-white/80">Or browse the highlights</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {highlights.map(({ label, icon: Icon }) => (
            <li key={label}>
              <button
                type="button"
                onClick={() => browse(label)}
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/30 backdrop-blur-md transition-colors hover:bg-white/25"
              >
                <Icon className="size-4" aria-hidden />
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
