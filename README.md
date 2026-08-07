# EduNexus Academy — LMS Frontend

A React + TypeScript frontend for the EduNexus Academy Learning Management
System: one platform, four secure, role-based portals (Student, Teacher,
Parent, Administrator).

This repo is being built **page by page**, in the order laid out in
[`docs/PAGE_PLAN.md`](./docs/PAGE_PLAN.md). Right now, the **Home page** is
fully built. Every other route in the four portals exists and is wired up
in the router, but renders a lightweight placeholder screen until its turn
in the plan comes up — so the app always runs, and new pages slot in
without touching routing or navigation again.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** — dev server & build tool
- **React Router v6** — routing
- **Tailwind CSS** — styling, using the EduNexus design tokens (see below)
- Hand-built local icon set (`src/components/icons`) — no external icon
  package required

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

Other scripts:

```bash
npm run build     # type-check + production build
npm run preview   # preview the production build locally
npm run lint      # type-check only (tsc --noEmit)
```

## Project structure

```
src/
  components/
    home/        # Home page sections (Hero, PortalGrid, FeatureChecklist, ...)
    icons/        # Local hand-built SVG icon set
    layout/       # PublicNavbar, PublicFooter, PublicLayout
    ui/            # Small shared primitives (Button, IconBadge)
  lib/
    constants.ts   # Portal metadata, nav data, stats — single source of truth
    useReveal.ts   # Scroll-reveal hook used by home page sections
  pages/
    public/        # HomePage (fully built)
    auth/          # Login / forgot password / access denied (placeholder)
    student/        # Student portal pages (placeholder)
    teacher/        # Teacher portal pages (placeholder)
    parent/         # Parent portal pages (placeholder)
    admin/          # Admin portal pages (placeholder)
    StubPage.tsx    # Shared placeholder used by all not-yet-built pages
  App.tsx          # Router — every planned route is already registered
  main.tsx         # Entry point
```

## Design tokens

Pulled directly from the EduNexus Academy brand deck, defined in
`tailwind.config.js`:

| Token         | Hex       | Use                              |
| ------------- | --------- | --------------------------------- |
| `navy`        | `#1B2A4A` | Primary — text, dark sections      |
| `navy-dark`   | `#121D36` | Deepest backgrounds                |
| `teal`        | `#1C7293` | Secondary accent, links            |
| `amber`       | `#F4A736` | Sharp accent — primary CTAs        |
| `slate`       | `#5B6B8C` | Muted / secondary text             |
| `lightbg`     | `#F7F8FB` | Section backgrounds                |
| `edge`        | `#E3E7EF` | Borders                            |

Typography: **Source Serif 4** for headings (`font-display`), **Inter** for
everything else (`font-sans`), loaded from Google Fonts in `index.html`.

## What's next

See [`docs/PAGE_PLAN.md`](./docs/PAGE_PLAN.md) for the full page list.
Every page across the Home site, all four portal logins, the
password-recovery flow, and every sidebar page in all four portals
(41 pages total) is built with real UI and realistic mock data. What's
left is a real backend: wiring up authentication, replacing the mock
data with API calls, and a route guard that enforces the role isolation
the UI already implies.
