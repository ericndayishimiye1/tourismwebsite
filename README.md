# RUGAJU · Tourism landing page

A minimal, Apple-inspired landing page for a travel and tourism website. It is fully
responsive, from small phones to large desktop screens.

## Features

- Full-screen hero photo with a search bar (keyword + destination) and quick "highlights" filters
- Feature cards that overlap the hero, as in classic travel templates
- Popular destinations that the search filters live (swipeable row on phones)
- Featured tours, hotels, traveller reviews with stats, and a newsletter sign-up
- Frosted-glass navigation bar with a full-screen mobile menu
- Smooth scroll-reveal animations that respect the visitor's "reduce motion" setting
- Optimised WebP photos, with a portrait crop of the hero for phones
- Accessible: semantic landmarks, labelled form fields, skip link, visible keyboard focus

## Tech stack

| Tool                                                       | Used for                                       |
| ---------------------------------------------------------- | ---------------------------------------------- |
| [Vite 8](https://vite.dev)                                 | Dev server and production build                |
| [React 19](https://react.dev) + TypeScript 7               | UI components                                  |
| [Tailwind CSS 4](https://tailwindcss.com)                  | Styling                                        |
| [Motion](https://motion.dev)                               | Animations                                     |
| [Lucide](https://lucide.dev)                               | Icons                                          |
| [Inter](https://fontsource.org/fonts/inter)                | Font (Apple devices use their own SF Pro font) |
| [Oxlint](https://oxc.rs) + [Prettier](https://prettier.io) | Linting and code formatting                    |

## Getting started

You need [Node.js](https://nodejs.org) 20.19+ or 22.12+.

```bash
git clone https://github.com/ericndayishimiye1/tourismwebsite.git
cd tourismwebsite
npm install
npm run dev
```

Then open <http://localhost:5173> in your browser. The page reloads automatically when you save a file.

## Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the development server with hot reload  |
| `npm run build`   | Type-check, then build the site into `dist/`  |
| `npm run preview` | Serve the production build locally to test it |
| `npm run lint`    | Check the code for problems with Oxlint       |
| `npm run format`  | Format all files with Prettier                |

## Project structure

```
src/
├── assets/images/   Optimised WebP photos
├── components/      Page sections: Navbar, Hero, SearchBar, Features, Destinations,
│   │                Tours, Hotels, Testimonials, Newsletter, Footer
│   └── ui/          Shared building blocks (Reveal animation, SectionHeading)
├── data/            All text content: destinations, tours, hotels, reviews, links
├── lib/             Small helpers (search filter, price formatting, layout)
├── App.tsx          Puts the sections together
├── index.css        Tailwind setup and design tokens (colours, font, shadows)
└── main.tsx         Entry point
```

## Customising

- **Brand name and email:** `src/data/site.ts`
- **Accent colour, font and shadows:** the `@theme` block in `src/index.css`
- **Destinations, tours, hotels and reviews:** the files in `src/data/` (photos live in `src/assets/images/`)
- **Newsletter:** the form only works in the browser for now. Connect your email provider
  (Mailchimp, Brevo, ConvertKit…) where the comment says so in `src/components/Newsletter.tsx`.

## Deploying

`npm run build` creates a static site in `dist/` that you can host on Vercel, Netlify or
GitHub Pages. Asset paths are relative (`base: './'` in `vite.config.ts`), so the build also
works from a sub-folder such as `https://<user>.github.io/tourismwebsite/`.

## Photo credits

All photos come from [Unsplash](https://unsplash.com) and are free to use under the
[Unsplash License](https://unsplash.com/license). They were resized and converted to WebP.

| File                     | Source                                                         |
| ------------------------ | -------------------------------------------------------------- |
| `hero-*.webp`            | <https://images.unsplash.com/photo-1535262412227-85541e910204> |
| `dest-santorini.webp`    | <https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e> |
| `dest-kyoto.webp`        | <https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e> |
| `dest-bali.webp`         | <https://images.unsplash.com/photo-1537996194471-e657df975ab4> |
| `dest-swiss-alps.webp`   | <https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99> |
| `dest-machu-picchu.webp` | <https://images.unsplash.com/photo-1587595431973-160d0d94add1> |
| `dest-cape-town.webp`    | <https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e> |
| `tour-cappadocia.webp`   | <https://images.unsplash.com/photo-1530789253388-582c481c54b0> |
| `tour-serengeti.webp`    | <https://images.unsplash.com/photo-1516426122078-c23e76319801> |
| `tour-iceland.webp`      | <https://images.unsplash.com/photo-1529963183134-61a90db47eaf> |
| `hotel-maldives.webp`    | <https://images.unsplash.com/photo-1544550581-5f7ceaf7f992>    |
| `hotel-krabi.webp`       | <https://images.unsplash.com/photo-1520250497591-112f2f40a3f4> |
| `hotel-zanzibar.webp`    | <https://images.unsplash.com/photo-1584132967334-10e028bd69f7> |
| `cta-journey.webp`       | <https://images.unsplash.com/photo-1436491865332-7a61a109cc05> |

Hotel names, prices, ratings and reviews are sample content.
