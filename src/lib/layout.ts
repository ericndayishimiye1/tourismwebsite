/**
 * Grid-item classes that centre a lone last card while the grid shows two
 * columns (tablet), so an odd number of cards still looks balanced.
 * Assumes the grid uses `gap-6` / `gap-x-6` (1.5rem).
 */
export const centredLastCard =
  'sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)] lg:col-span-1 lg:mx-0 lg:w-auto'

/** True for the last item of a list with an odd number of items. */
export function isLoneLast(index: number, total: number): boolean {
  return total % 2 === 1 && index === total - 1
}
