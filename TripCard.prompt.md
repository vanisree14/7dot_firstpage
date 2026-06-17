**TripCard** — the signature product card for a curated route. Full-bleed cinematic photo, dark protection gradient, floating badge + rating, and a location/title/price footer. Use in trip grids and search results.

```jsx
<TripCard
  image="/routes/spiti.jpg"
  badge="Surprise inside" badgeTone="teal"
  location="Himachal Pradesh" rating={4.9}
  title="Spiti Valley Wonder Drive"
  days="6 days · 5 nights" price="₹62,000"
  onClick={...}
/>
```
Props: `image`, `title`, `location`, `days`, `price`, `badge`, `badgeTone`, `rating`, `onClick`.
