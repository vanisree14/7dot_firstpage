# Roverland Voyage — Website UI Kit

A high-fidelity, click-through recreation of the Roverland Voyage **marketing website**, built from the brand foundations (no production codebase was provided — see root `readme.md`). It composes the shared DS components (`Button`, `TripCard`, `Tag`, `Badge`, `Avatar`, `Input`, `Logo`).

## Run
Open `index.html`. It loads React + Babel, the compiled `_ds_bundle.js`, then the kit modules.

## Interactions
- **Home**: frosted nav (solid on scroll), full-bleed cinematic hero with glass search, region-filterable journeys grid, "How it works" steps, values band, newsletter + footer.
- Click any **trip card** → **trip detail** view (hero, mile-by-mile itinerary timeline with ★ surprise stops, sticky booking card).
- **Reserve this voyage** → confirmation toast.
- **All journeys** / logo → back home.

## Files
- `index.html` — shell + script loading
- `data.js` — sample trips, values, steps (`window.RV_DATA`)
- `Icon.jsx` — Lucide-style line icon set (`window.Icon`)
- `SiteNav.jsx` · `Hero.jsx` · `TripGrid.jsx` · `Sections.jsx` (HowItWorks + ValuesBand) · `TripDetail.jsx` · `SiteFooter.jsx`
- `app.jsx` — screen wiring + booking toast

## Imagery
Hero and trip photos use **Unsplash placeholders**. Replace with licensed Roverland route photography for production.
