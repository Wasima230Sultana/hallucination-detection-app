# Hallucination Detector — Frontend

A web UI for detecting hallucinations in LLM responses. Paste an AI-generated response and get a factuality verdict from a unified detection model trained on diverse datasets.

Built with [Next.js 16](https://nextjs.org) (App Router), [Tailwind CSS v4](https://tailwindcss.com), and [shadcn/ui](https://ui.shadcn.com).

## Features

- **Hero + Analyze panel** — large textarea with a live `0 / 2000` character counter
- **Result panel** — drives three states: `idle` → `analyzing` → `complete`
- **Reusable components** — shared `PanelHeader`, shadcn `Button` / `Textarea` / `Card`
- **Light & dark mode** — class-based theming via `next-themes` with a pill toggle in the navbar
- **Responsive** — mobile-first layout, nav labels collapse to icons on small screens
- **Accessible** — active nav uses `aria-current`, icons are decorative (`aria-hidden`), labeled form controls

## Tech Stack

| Layer     | Choice                                          |
| --------- | ----------------------------------------------- |
| Framework | Next.js 16 (App Router, Turbopack, React 19)    |
| Styling   | Tailwind CSS v4 (CSS-first config)              |
| UI kit    | shadcn/ui (new-york style) + Radix primitives   |
| Icons     | lucide-react                                    |
| Theme     | next-themes                                     |
| Language  | TypeScript (strict)                             |

## Getting Started

```bash
npm install       # install dependencies
npm run dev       # start dev server → http://localhost:3000
```

Other scripts:

```bash
npm run build     # production build (type-checks + prerenders all routes)
npm run start     # serve the production build
npm run lint      # ESLint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout: theme provider + header + footer
│   ├── page.tsx              # Home (composes Hero + Analyzer)
│   ├── globals.css           # Design tokens (light/dark) → Tailwind utilities
│   ├── about/page.tsx        # Placeholder route
│   └── statistics/page.tsx   # Placeholder route
├── components/
│   ├── ui/                   # shadcn primitives (button, textarea, card)
│   ├── layout/
│   │   ├── site-header.tsx   # Logo, nav with active state, theme toggle
│   │   └── site-footer.tsx
│   ├── home/
│   │   ├── hero.tsx          # Headline + decorative robot illustration
│   │   ├── panel-header.tsx  # ⭐ Reusable: gradient icon + title + description
│   │   ├── analyze-card.tsx  # Input panel (pure props, no state)
│   │   ├── result-card.tsx   # Output panel (status-driven)
│   │   └── analyzer.tsx      # Client component: shared state for both panels
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── lib/
    └── utils.ts              # cn() class merger
```

### State flow

`analyzer.tsx` (client) owns the state and passes it down:

```
text ──→ AnalyzeCard (value, onChange, onSubmit, isAnalyzing)
status ─→ ResultCard  (status: "idle" | "analyzing" | "complete")
```

Both panels are presentational and reusable — lift or reuse them anywhere without touching their internals.

## Theming

Design tokens live in [`src/app/globals.css`](src/app/globals.css):

- `:root` — light palette (violet primary `#6d28d9`, lavender background)
- `.dark` — dark palette
- `@theme inline` — exposes tokens as Tailwind classes (`bg-card`, `text-primary`, `rounded-lg`, …)

To adjust brand colors, edit the variables in `:root` / `.dark` only — components pick them up automatically.

## Adding shadcn Components

`components.json` is configured, so you can scaffold more primitives:

```bash
npx shadcn@latest add dialog
npx shadcn@latest add select
```

They land in `src/components/ui/` and are ready to import.

## Connecting the Detection API

The "Check for Hallucination" button currently runs a demo timer. To wire the real model:

1. Open [`src/components/home/analyzer.tsx`](src/components/home/analyzer.tsx)
2. Replace the `setTimeout` marked with `TODO` with your `fetch` call
3. Set `status` from the response (e.g. map verdict → `complete`, errors → a new `error` state)

The `ResultCard` already renders the right UI for each status.

## Routes

| Route         | Description                          |
| ------------- | ------------------------------------ |
| `/`           | Home — hero + analyze + result       |
| `/about`      | Placeholder                          |
| `/statistics` | Placeholder                          |

## Notes

- **lucide-react v1** dropped deprecated icon aliases — use `House`, `ChartColumn`, `LoaderCircle` (not `Home` / `BarChart3` / `Loader2`).
- This is **Next.js 16** — its bundled docs live in `node_modules/next/dist/docs/`; APIs differ from older versions (async request APIs, `proxy` instead of `middleware`, Turbopack by default).
