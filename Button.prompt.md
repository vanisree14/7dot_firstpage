**Button** — the primary pill-shaped action control; use for any tap target that triggers an action. Reach for `primary` (brand gradient) as the page's main CTA, `accent` (solid teal) for "wow"/booking moments, `secondary`/`ghost` for lower-emphasis actions.

```jsx
<Button variant="primary" size="lg">Start your voyage</Button>
<Button variant="secondary" iconLeft={<Icon name="map" />}>See the route</Button>
<Button variant="ghost" size="sm">Skip</Button>
```

Variants: `primary` · `accent` · `secondary` · `ghost` · `night`. Sizes: `sm` · `md` · `lg`. Props: `block`, `disabled`, `iconLeft`, `iconRight`, `as` (render as `"a"` for links). Always uppercase or sentence-case the label per voice; hover lifts -2px, press shrinks to 0.97.
