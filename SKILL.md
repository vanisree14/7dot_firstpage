---
name: roverland-voyage-design
description: Use this skill to generate well-branded interfaces and assets for Roverland Voyage (RV™), a premium self-drive road-trip brand — either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, logos, and UI kit components for prototyping "Into the Wow".
user-invocable: true
---

# Roverland Voyage — Design Skill

Read `readme.md` first — it is the full design guide (brand context, content voice, visual foundations, iconography, and a file index). Then explore the other files as needed:

- `styles.css` + `tokens/` — link `styles.css` to inherit all color/type/spacing tokens and the Bebas Neue + Mulish webfonts.
- `assets/logos/` — official logo lockups (vertical/horizontal × gradient/white/black/white-on-color × tag/no-tag) and the extracted `rv-symbol-*` marks. Copy these out; never redraw them.
- `assets/fonts/` — Bebas Neue + Mulish font files.
- `components/` — React primitives (Button, Badge, Tag, Avatar, Input, Field, Card, TripCard, Logo). Each has a `.prompt.md` with usage.
- `ui_kits/website/` and `ui_kits/app/` — full reference surfaces to copy patterns from.
- `slides/` — on-brand presentation layouts.
- `guidelines/` — foundation specimen cards.

## Working rules
- **Voice:** lyrical, second-person ("you"), sensory, always pairing wonder with trust. Headlines in ALL CAPS (Bebas). Signature phrases: *Into the Wow*, *State of Wow*, *Wow Spectrum*. No emoji.
- **Color:** the blue→teal "Wow" gradient is the hero device — use it sparingly. Cool ink neutrals, soft cool shadows, generous spacing, soft radii.
- **Type:** Bebas Neue for display/eyebrows (uppercase, tracked); Mulish for body/UI.
- **Icons:** Lucide-style line icons (2px round strokes) — see `ui_kits/website/Icon.jsx`.

If creating visual artifacts (slides, mocks, throwaway prototypes), **copy assets out** and produce static HTML files for the user to view. If working on production code, copy assets and apply the rules here to design natively in the brand.

If the user invokes this skill without other guidance, ask what they want to build, ask a few focused questions, then act as an expert RV designer who outputs HTML artifacts _or_ production code as needed.
