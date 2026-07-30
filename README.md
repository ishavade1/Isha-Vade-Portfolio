# Isha Vade — Data Analyst Portfolio 

A premium portfolio site inspired by Linear / Raycast / Vercel / Notion, built as a real
React app (no CDN dependencies — fonts, icons, and charts are all bundled via npm).

## Quick start

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build a static production bundle:

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally to check it
```

`dist/` is fully static — deploy it to Vercel, Netlify, GitHub Pages, S3, or any static host.

## Structure

```
src/
├── main.jsx              Entry point — loads fonts, mounts <App/>
├── App.jsx                Top-level layout, wires up the theme hook
├── styles.css              All styling, incl. the 3 theme token sets
├── data/content.js         All copy, stats, skills, projects, experience — edit here
├── hooks/
│   ├── useTheme.js         Theme state + localStorage persistence
│   ├── useReveal.js        Scroll-triggered fade-up (IntersectionObserver)
│   ├── useCountUp.js       Animated stat counters
│   └── useChartColors.js   Resolves CSS theme variables to literal colors for charts
└── components/
    ├── Nav.jsx, ThemeSwitcher.jsx
    ├── Hero.jsx            Headline + dashboard-style chart visual
    ├── Logos.jsx, About.jsx
    ├── Skills.jsx          Proficiency bars + radar chart
    ├── Projects.jsx        Project cards with bar/line/donut mini-charts
    ├── Experience.jsx      Timeline
    ├── Contact.jsx, Footer.jsx
```

## Themes

Palette icon in the top-right nav opens the switcher. Three themes are defined as CSS
custom properties at the top of `src/styles.css`:

1. **Terracotta & Ivory** (default, recommended) — warm ivory background, burnt-orange accent.
2. **Midnight Violet** — near-black background, violet as the primary accent.
3. **Slate & Sand** — cool neutral background, graphite accent, terracotta as secondary pop.

The choice is saved to `localStorage` (`portfolio-theme`) and restored on reload. All charts
re-read their colors from CSS variables on theme change (see `useChartColors`), so they always
match. To add a fourth theme: copy a `[data-theme="..."]` block in `styles.css`, give it a new
name, and add an entry to the `themes` array in `src/data/content.js`.

## Customizing content

Everything — name, stats, skills, project metrics, chart data, experience — lives in
`src/data/content.js`. No need to touch components for a content update.

Drop a real résumé at `public/assets/resume.pdf` to make the "Download résumé" button work.

## Stack

- Vite + React 19
- Recharts for all data visualizations
- lucide-react for icons
- @fontsource for self-hosted Inter + IBM Plex Mono (no Google Fonts CDN call at runtime)

## Notes

- Reduced motion is respected (`prefers-reduced-motion`).
- Focus states are visible for keyboard navigation.
- Verified with a production build + headless render — no console errors, all sections visible
  in every theme, and on mobile widths.
