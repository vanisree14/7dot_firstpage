# Roverland Voyage — Design System

> **Into the Wow.**
> A premium, self-driven road-trip company curating immersive journeys for all explorers. Surprise-filled itineraries and scenic routes that transform road travel into a "Wow" state of discovery.

This repository is the canonical design system for **Roverland Voyage (RV™)**. It contains the brand foundations (color, type, logo system), reusable React UI primitives, full-screen UI kits, sample slides, and the prose guidelines below. An automated compiler indexes the tokens and bundles the components; consumers link the single root `styles.css`.

---

## Source materials

Everything here is derived from the assets the brand team provided. Store these references in case the reader has access:

| Source | What it gave us |
| --- | --- |
| `uploads/Roverland_BrandBook2025_01.pdf` (38 pp.) | Mission, vision, archetype, tone, core values, the "Wow Spectrum" color theory, exact color values, type system, voice samples, logo construction. |
| `uploads/RV_Logo_with_(TM)01_WF01-01…16.png` | The complete logo lockup matrix (vertical & horizontal stacks × gradient / white-on-color / black / white × with & without tagline). |
| `uploads/BebasNeue-Regular.ttf` | Display typeface. |
| `uploads/Mulish-*.ttf` | Body typeface (Regular, Bold, Variable). |

There is **no product codebase, website, or Figma file** attached — only the 2025 Brand Book and logo/font assets. The UI kits and slides in this system are therefore **brand-grounded product surfaces** built from the foundations, not recreations of an existing live product. They demonstrate how the brand expresses itself in real interfaces. Treat them as the reference implementation, and replace with true product screens if/when a codebase or Figma becomes available.

Brand owner / contact (from the brand book): 7Dots — santhosh@7dots.space, keerthanaa.r@7dots.space · Coimbatore, India.

---

## Brand at a glance

- **Mission** — Craft premium, surprise-filled self-driven road trips that turn the ordinary into the unforgettable; blend freedom, safety, sustainability and soulful storytelling into every journey.
- **Vision** — Become the world's most beloved curator of self-drive road adventures, inspiring a *State of Wow*.
- **Archetype** — *The Magical Explorer*: a seeker of the unknown who turns each road into a portal of wow.
- **Tone** — *Enchanted, Empowering & Soulfully Playful.* Balances imagination with trust; always seeks to make the reader smile, sigh, or softly say "wow."
- **Core values** — Wonder First · Curated Freedom · Surprise & Delight · Soulful Connections · Purposeful Travel.
- **The symbol** — Combines a compass (directions), a location pin, a travel road / "A" arrow (the evolving story), and a **star** (surprise — RV's signature delight). The radiating circles read as both a target/wow-burst and concentric ripples of discovery.

---

## CONTENT FUNDAMENTALS — how RV writes

The voice is the heartbeat of the brand. It is **lyrical but grounded**, **second-person and warm**, and it earns wonder through concrete sensory detail — never empty hype.

- **Person & address.** Speak to "**you**," the explorer. Use "**we**" for Roverland. ("We don't sell travel. We deliver stories in motion." / "You'll forget the destination. But you'll never forget the feeling.")
- **Casing.** Headlines and the logo wordmark are **ALL CAPS** (Bebas Neue). The tagline locks as **INTO THE WOW**. Body copy is sentence case. Avoid Title Case For Everything — it kills the cinematic rhythm.
- **Signature phrases.** *Into the Wow* · *State of Wow* · *Wow Spectrum* · "Every road has a wow waiting." Reach for "wow" deliberately — it's a noun and a feeling, not filler.
- **Rhythm.** Short, cinematic fragments stacked for cadence. Triads are common: "Crafted routes. Cinematic surprises. Unforgettable moments." Em-dashes set up the reveal — like a bend in the road.
- **Sensory & emotional.** Lead with feeling and the five senses: "a chai break under a sky full of stars," "somewhere between sunrise & starlight." Nature imagery (mountains, snow, lagoons, aurora) is the brand's native vocabulary.
- **Verbs over adjectives.** RV *choreographs emotions*, *crafts* drives, *moves* you. Active, generous verbs.
- **Trust under the magic.** Wonder is always paired with reassurance: "freedom without friction," "meticulously planned, hassle-free." Premium ≠ fussy.
- **Emoji.** Not used in brand communications. Keep copy clean and typographic. (Inside product UI, prefer the line-icon set over emoji.)
- **What to avoid.** Discount-y urgency ("BOOK NOW!!!"), travel clichés ("hidden gems," "bucket list"), exclamation spam, and corporate filler. One idea, beautifully said.

**Microcopy examples**
- Primary CTA: "Start your voyage" · "Find your wow" · "See the route"
- Empty state: "No trips yet — the road's wide open. Let's plan your first wow."
- Confirmation: "You're in. The compass is set."

---

## VISUAL FOUNDATIONS

### Color — "The Wow Spectrum"
The palette is an *emotional gradient* inspired by the Northern Lights: blues → teals → aurora greens, mapping calm curiosity → scenic wonder → thrilling surprise.

- **Voyage Blue `#087BB9`** — primary. Dawn sky; movement, direction, trust.
- **Explorer Teal `#00A383`** — secondary. Hidden lagoons; adventure & surprise.
- **Aurora Green `#2FB67A`** — the far end of the spectrum (resolves the wordmark gradient).
- **Voyager Black `#0A1418`** — depth of the unknown; the night before the lights. (Warmed a hair off pure black for screen comfort; pure `#000000` remains valid in the logo.)
- **Clarity White `#FFFFFF`** — openness, light, the blank canvas of wonder.

The **signature gradient runs Voyage Blue → Explorer Teal**, left-to-right / diagonal (`--rv-gradient-primary`, `--rv-gradient-aurora`). It powers the logo, hero panels, primary buttons and the "wow" moments. Use it sparingly and confidently — it is the brand's single most recognizable device. Full tint/shade ramps live in `tokens/colors.css`; cool grey neutrals (`--rv-ink-*`) are tuned toward the night sky.

### Typography
- **Bebas Neue** — condensed all-caps display. Headlines, eyebrows/kickers (tracked out `0.22em`), big numbers. Tight line-height (0.92–1.05). It carries the cinematic, poster-like energy.
- **Mulish** — humanist sans for body, UI and captions. Regular (400) and Bold (700); a variable file covers weights between. Comfortable line-height (1.55–1.65).
- **Pairing rule.** Bebas SHOUTS the wow; Mulish speaks the trust. Never set long body copy in Bebas. Eyebrows are Bebas, uppercase, generously tracked, often in Voyage Blue.

### Spacing, radii & layout
- 8px base grid (`--space-*`). Spacing is **generous and open** — air echoes the open road. Hero sections breathe.
- Radii are **soft and friendly** (`--radius-md: 14px` for cards, up to `--radius-2xl` and `--radius-pill` for chips/buttons). Nothing sharp-cornered.
- Centered content columns (`--container-max: 1200px`), comfortable gutters that scale with viewport.

### Backgrounds & imagery
- **Photography-forward.** Cinematic landscape travel imagery (mountains, coast roads, aurora skies, forests). Cool-leaning but golden-hour warmth is welcome at the "wow" peak. Rich, saturated, *never* desaturated/grungy.
- **Full-bleed heroes** with a dark **protection gradient** (bottom-up `--rv-gradient-night` at low opacity) so white display type stays legible over photos.
- **Gradient panels** (blue→teal) as section dividers and feature blocks. The aurora gradient may appear as a soft glow/wash behind content.
- Avoid: purple/violet "AI" gradients, busy textures, drop-shadowed clipart, emoji stickers.

### Elevation & cards
- Cards: white surface, `--radius-lg` corners, **soft cool-tinted shadow** (`--shadow-md`), hairline `--border-subtle` only when on white-on-white. On hover they lift (`--shadow-lg`) and rise ~2–4px.
- "Wow" / primary CTAs may carry a colored **brand glow** (`--shadow-brand` teal, `--shadow-blue`).
- No hard 1px black borders, no left-accent-bar cards.

### Motion
- **Gentle and gliding**, like a road unfolding — never bouncy or springy. Easing `--ease-glide` / `--ease-out`. Durations 140–420ms for UI, up to 700ms for hero reveals.
- Entrances: soft fade + small upward translate (8–16px). Imagery may use a slow ken-burns drift. Respect `prefers-reduced-motion`.

### Interactive states
- **Hover** — primary buttons darken one step (`--action-primary-hover`); ghost/secondary tint to `--rv-blue-50`; cards lift. Links shift to `--text-brand`.
- **Press/active** — darken a further step and shrink slightly (`transform: scale(0.98)`).
- **Focus** — visible teal ring (`--ring-focus`), never removed.
- **Disabled** — reduced opacity (~0.5), no shadow, `cursor: not-allowed`.

### Transparency & blur
- Used sparingly: frosted nav bars over imagery (`backdrop-filter: blur`), glass chips on hero photos. Keep blur subtle; the brand favors clarity (it's literally a value).

---

## ICONOGRAPHY

The brand book does **not** ship a bespoke product icon set — only the logo/symbol system. Decisions:

- **Brand mark** — the RV symbol (compass + pin + road-arrow + star) is the hero glyph. Extracted clean copies live in `assets/logos/rv-symbol-*.png`. Use it for favicons, app icons, avatars, loaders and "wow" accents — **not** as a generic UI icon.
- **UI icons** — substitute **[Lucide](https://lucide.dev)** (linked from CDN in kits/cards). It's the closest match to the brand spirit: clean, **rounded-cap line icons, ~2px stroke, geometric and friendly** — consistent with the soft-radius, open feel. *This is a substitution; flagged below.* If a bespoke set is commissioned later, swap Lucide for it.
- **Stroke & style** — line (outline) icons, 2px stroke, round caps/joins, 24px grid. Avoid filled/duotone icons except for tiny status dots. Color icons with `--text-muted` at rest, `--text-brand`/`--action-accent` when active.
- **The star** — RV's surprise motif. A small star accent (from the mark) can flag "surprise" / delight moments in product. Don't overuse.
- **Emoji** — not used. **Unicode** symbols only as a last resort; prefer Lucide.

> ⚠️ **Substitution flagged:** UI icon set (Lucide) and any "nearest-match" display fallbacks are not from the original brand assets — see Caveats in the chat. Please confirm or provide the intended icon library.

---

## INDEX — what's in this system

**Root**
- `styles.css` — the single entry point (imports only). Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill manifest for use in Claude Code.

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `base.css`

**`assets/`** — `fonts/` (Bebas Neue, Mulish + OFL) · `logos/` (16 lockups: vertical/horizontal × gradient/white-on-color/black/white × tag/no-tag, plus extracted `rv-symbol-*`).

**`guidelines/`** — 19 foundation specimen cards (Type, Colors, Spacing, Brand) rendered in the Design System tab.

**`components/`** — reusable React primitives. Namespace: `window.RoverlandVoyageDesignSystem_e06e08`.
- `buttons/` — **Button** (gradient primary, accent, secondary, ghost, night)
- `forms/` — **Input**, **Field**
- `display/` — **Badge**, **Tag**, **Avatar**
- `surfaces/` — **Card**, **TripCard** (signature cinematic route card)
- `brand/` — **Logo** (renders the official lockups)

**`ui_kits/`** — full-screen brand-grounded product surfaces, each composing the components above:
- `website/` — marketing site: hero + search, filterable journeys grid, how-it-works, values band, trip detail with itinerary timeline + booking, footer.
- `app/` — mobile road-trip companion (iOS frame): Today dashboard, route timeline, surprise reveal.

**`slides/`** — 6 sample on-brand presentation layouts (title, section divider, content, big quote, full-bleed image, closing).

Starting points (for the consuming-project picker): **Button**, **Badge**, **TripCard**, **Logo**, and the **Website** screen.

See each subfolder's card HTML and `.prompt.md` files for usage.
