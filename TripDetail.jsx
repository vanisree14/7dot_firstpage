/* Roverland Voyage — trip detail view: hero, itinerary timeline, booking card. */
function TripDetail({ tripId, onBack, onBook }) {
  const { Button, Badge, Avatar } = window.RoverlandVoyageDesignSystem_e06e08;
  const Icon = window.Icon;
  const t = window.RV_DATA.trips.find((x) => x.id === tripId);
  if (!t) return null;

  return (
    <div style={{ background: "var(--surface-page)" }}>
      {/* hero */}
      <section style={{ position: "relative", minHeight: "min(64vh, 560px)", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${t.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,20,24,0.94) 4%, rgba(8,20,24,0.3) 60%)" }} />
        <div style={{ position: "relative", width: "100%", maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 clamp(20px,5vw,56px) 44px" }}>
          <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.16)", backdropFilter: "blur(8px)", border: "none", color: "#fff", padding: "9px 16px", borderRadius: "var(--radius-pill)", font: "700 0.85rem/1 var(--font-body)", cursor: "pointer", marginBottom: 20 }}>
            <Icon name="arrowRight" size={16} style={{ transform: "rotate(180deg)" }} /> All journeys
          </button>
          <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
            <Badge tone={t.badgeTone} solid dot>{t.badge}</Badge>
            <Badge tone="neutral" solid>{t.region}</Badge>
          </div>
          <h1 style={{ font: "var(--type-display-2)", letterSpacing: "var(--tracking-display)", textTransform: "uppercase", color: "#fff", margin: 0, maxWidth: "18ch" }}>{t.title}</h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 22, marginTop: 16, color: "rgba(255,255,255,0.92)", font: "600 0.95rem/1 var(--font-body)" }}>
            <Meta icon="pin" text={t.location} />
            <Meta icon="clock" text={t.days} />
            <Meta icon="star" text={`${t.rating} · Loved by explorers`} />
          </div>
        </div>
      </section>

      {/* body */}
      <section style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(40px,7vh,80px) clamp(20px,5vw,56px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) 340px", gap: 48, alignItems: "start" }}>
        <div>
          <p style={{ font: "var(--type-lead)", color: "var(--text-body)", marginTop: 0 }}>{t.blurb}</p>
          <span className="rv-eyebrow">The Route</span>
          <h2 style={{ font: "var(--type-h2)", textTransform: "uppercase", color: "var(--text-strong)", margin: "8px 0 28px" }}>Your road, mile by mile</h2>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, position: "relative" }}>
            {t.itinerary.map(([day, route, note], i) => {
              const surprise = note.startsWith("★");
              return (
                <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 20, paddingBottom: i === t.itinerary.length - 1 ? 0 : 28 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ width: 36, height: 36, borderRadius: "50%", background: surprise ? "var(--rv-gradient-primary)" : "var(--rv-blue-50)", color: surprise ? "#fff" : "var(--text-brand)", display: "flex", alignItems: "center", justifyContent: "center", font: "700 0.8rem/1 var(--font-body)", flexShrink: 0 }}>
                      {surprise ? <Icon name="star" size={16} /> : i + 1}
                    </span>
                    {i !== t.itinerary.length - 1 && <span style={{ flex: 1, width: 2, background: "var(--border-default)", marginTop: 4 }} />}
                  </div>
                  <div style={{ paddingTop: 4 }}>
                    <div style={{ font: "var(--type-overline)", letterSpacing: "var(--tracking-overline)", textTransform: "uppercase", color: "var(--text-muted)" }}>{day}</div>
                    <div style={{ font: "700 1.05rem/1.3 var(--font-body)", color: "var(--text-strong)", margin: "3px 0 4px" }}>{route}</div>
                    <div style={{ font: "var(--type-body)", color: surprise ? "var(--rv-teal-700)" : "var(--text-body)" }}>{note}</div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* booking card */}
        <aside style={{ position: "sticky", top: 92, background: "var(--surface-card)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", border: "1px solid var(--border-subtle)", padding: 24 }}>
          <div style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>From</div>
          <div style={{ font: "var(--type-h2)", color: "var(--text-strong)", margin: "2px 0 2px" }}>{t.price}</div>
          <div style={{ font: "var(--type-body-sm)", color: "var(--text-muted)", marginBottom: 18 }}>per car · all surprises included</div>
          <Button variant="primary" size="lg" block onClick={onBook}>Reserve this voyage</Button>
          <Button variant="ghost" size="sm" block style={{ marginTop: 8 }}>Talk to a trip designer</Button>
          <div style={{ borderTop: "1px solid var(--border-subtle)", marginTop: 20, paddingTop: 18, display: "grid", gap: 12 }}>
            <Perk icon="shield" text="Fully planned & safety-checked" />
            <Perk icon="sparkles" text="Hand-placed surprises en route" />
            <Perk icon="leaf" text="Low-impact, community-first stops" />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 20 }}>
            <Avatar name="Maya Rao" size={40} ring />
            <div>
              <div style={{ font: "700 0.85rem/1.2 var(--font-body)", color: "var(--text-strong)" }}>Maya, your trip designer</div>
              <div style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>Usually replies in an hour</div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );

  function Meta({ icon, text }) {
    return <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><Icon name={icon} size={17} style={{ color: "var(--rv-teal-200)" }} />{text}</span>;
  }
  function Perk({ icon, text }) {
    return <div style={{ display: "flex", alignItems: "center", gap: 11, font: "var(--type-body-sm)", color: "var(--text-body)" }}><span style={{ color: "var(--rv-teal-600)" }}><Icon name={icon} size={18} /></span>{text}</div>;
  }
}
window.TripDetail = TripDetail;
