import { footerColumns, legalLinks, site } from '../data/site.ts'

// Read once when the page loads (keeps the component itself pure)
const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-canvas text-sm text-muted">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="text-xl font-semibold tracking-tight text-ink">
              {site.name}
              <span className="text-accent">.</span>
            </a>
            <p className="mt-4 max-w-xs leading-relaxed">
              Handpicked places to stay, eat, shop and explore, curated by local experts around the
              world.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block font-medium text-ink hover:underline"
            >
              {site.email}
            </a>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs font-semibold text-ink">{column.title}</h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-ink">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved. Photos from{' '}
            <a href="https://unsplash.com" className="underline hover:text-ink">
              Unsplash
            </a>
            .
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
