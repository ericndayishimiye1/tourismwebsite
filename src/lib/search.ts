import type { Destination, SearchQuery } from '../types.ts'

/** True when the query has neither a keyword nor a place, so it would not filter anything. */
export function isEmptyQuery(query: SearchQuery): boolean {
  return query.keyword.trim() === '' && query.where === ''
}

/**
 * Keeps the destinations that match the chosen place and *every* keyword typed
 * (case-insensitive). "food hotel" matches places tagged with both words.
 */
export function filterDestinations(list: Destination[], query: SearchQuery | null): Destination[] {
  if (!query) return list
  const terms = query.keyword
    .toLowerCase()
    .split(/[\s,]+/)
    .filter(Boolean)

  return list.filter((destination) => {
    if (query.where && destination.id !== query.where) return false
    const haystack = [destination.name, destination.country, destination.blurb, ...destination.tags]
      .join(' ')
      .toLowerCase()
    return terms.every((term) => haystack.includes(term))
  })
}
