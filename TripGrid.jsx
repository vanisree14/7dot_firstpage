/* Roverland Voyage — featured journeys section with region filter chips. */
function TripGrid({ onOpen }) {
  const { TripCard, Tag } = window.RoverlandVoyageDesignSystem_e06e08;
  const Icon = window.Icon;
  const trips = window.RV_DATA.trips;
  const regions = ["All", "Mountain", "Coastal", "Desert", "Forest"];
  const [region, setRegion] = React.useState("All");
  const shown = region === "All" ? trips : trips.filter((t) => t.region === region);

  return (
    <section style={{ background: "var(--surface-page)", padding: "clamp(56px,9vh,112px) clamp(20px,5vw,56px)" }}>
      <div style={{ maxWidth: "var(--container-wide)", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: 32 }}>
          <div>
            <span className="rv-eyebrow">Curated Journeys</span>
            <h2 style={{ font: "var(--type-h1)", textTransform: "uppercase", color: "var(--text-strong)", margin: "8px 0 0" }}>Pick your wow</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {regions.map((r) => (
              <Tag key={r} selected={region === r}
                icon={r === "All" ? <Icon name="compass" size={15} /> : null}
                onClick={() => setRegion(r)}>{r}</Tag>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 22 }}>
          {shown.map((t) => (
            <TripCard key={t.id} image={t.image} title={t.title} location={t.location}
              days={t.days} price={t.price} badge={t.badge} badgeTone={t.badgeTone}
              rating={t.rating} onClick={() => onOpen(t.id)} style={{ minHeight: 380 }} />
          ))}
        </div>
      </div>
    </section>
  );
}
window.TripGrid = TripGrid;
