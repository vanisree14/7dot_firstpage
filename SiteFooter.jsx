/* Roverland Voyage — newsletter CTA + footer on the night palette. */
function SiteFooter() {
  const { Button, Input, Logo } = window.RoverlandVoyageDesignSystem_e06e08;
  const cols = [
    ["Journeys", ["Mountain drives", "Coastal cruises", "Desert runs", "Forest roads"]],
    ["Company", ["Our story", "The Wow Spectrum", "Trip designers", "Sustainability"]],
    ["Support", ["Plan a trip", "FAQs", "Safety", "Contact us"]],
  ];
  return (
    <footer style={{ background: "var(--surface-night)", color: "var(--rv-ink-200)" }}>
      {/* CTA */}
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(48px,7vh,88px) clamp(20px,5vw,56px)", borderBottom: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
        <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", background: "var(--rv-gradient-aurora)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Into the Wow</span>
        <h2 style={{ font: "var(--type-h1)", textTransform: "uppercase", color: "#fff", margin: "10px 0 8px" }}>Get the next surprise route first</h2>
        <p style={{ font: "var(--type-body)", color: "var(--rv-ink-300)", maxWidth: "48ch", margin: "0 auto 26px" }}>One beautiful email a month. New drives, secret detours, and a little wonder for your inbox.</p>
        <form onSubmit={(e)=>e.preventDefault()} style={{ display: "flex", gap: 10, maxWidth: 460, margin: "0 auto", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 220 }}><Input type="email" placeholder="you@example.com" /></div>
          <Button variant="accent" type="submit">Subscribe</Button>
        </form>
      </div>

      {/* link columns */}
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(40px,6vh,64px) clamp(20px,5vw,56px)", display: "grid", gridTemplateColumns: "1.4fr repeat(3, 1fr)", gap: 40 }}>
        <div>
          <Logo layout="horizontal" tone="white" height={40} basePath="../../assets/logos" />
          <p style={{ font: "var(--type-body-sm)", color: "var(--rv-ink-400)", marginTop: 18, maxWidth: "30ch" }}>Premium, self-driven road trips that turn every mile into a long-lasting memory.</p>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}>
            <div style={{ font: "var(--type-overline)", letterSpacing: "var(--tracking-overline)", textTransform: "uppercase", color: "var(--rv-ink-400)", marginBottom: 16 }}>{h}</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 11 }}>
              {items.map((i) => <li key={i}><a href="#" onClick={(e)=>e.preventDefault()} style={{ color: "var(--rv-ink-200)", textDecoration: "none", font: "var(--type-body-sm)" }} onMouseEnter={(e)=>e.currentTarget.style.color="#fff"} onMouseLeave={(e)=>e.currentTarget.style.color="var(--rv-ink-200)"}>{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "20px clamp(20px,5vw,56px) 36px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, font: "var(--type-body-sm)", color: "var(--rv-ink-400)" }}>
        <span>© 2025 Roverland Voyage™. Into the Wow.</span>
        <span>Privacy · Terms · Made in Coimbatore</span>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;
