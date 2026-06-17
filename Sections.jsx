/* Roverland Voyage — "How it works" steps + values band on the night gradient. */
function HowItWorks() {
  const Icon = window.Icon;
  const steps = window.RV_DATA.steps;
  return (
    <section style={{ background: "var(--surface-card)", padding: "clamp(56px,9vh,112px) clamp(20px,5vw,56px)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", textAlign: "center" }}>
        <span className="rv-eyebrow">Freedom Without Friction</span>
        <h2 style={{ font: "var(--type-h1)", textTransform: "uppercase", color: "var(--text-strong)", margin: "8px 0 48px" }}>How the magic happens</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: 32 }}>
          {steps.map(([n, t, d]) => (
            <div key={n} style={{ textAlign: "left" }}>
              <div style={{ font: "var(--type-display-2)", lineHeight: 1, background: "var(--rv-gradient-primary)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{n}</div>
              <h3 style={{ font: "var(--type-h3)", textTransform: "uppercase", color: "var(--text-strong)", margin: "12px 0 8px" }}>{t}</h3>
              <p style={{ font: "var(--type-body)", color: "var(--text-body)", margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.HowItWorks = HowItWorks;

function ValuesBand() {
  const { Badge } = window.RoverlandVoyageDesignSystem_e06e08;
  const Icon = window.Icon;
  const icons = ["sparkles", "route", "star", "leaf"];
  const values = window.RV_DATA.values;
  return (
    <section style={{ background: "var(--rv-gradient-aurora)", padding: "clamp(56px,9vh,104px) clamp(20px,5vw,56px)", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "var(--container-wide)", margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "rgba(255,255,255,0.85)" }}>The State of Wow</span>
          <h2 style={{ font: "var(--type-h1)", textTransform: "uppercase", color: "#fff", margin: "8px 0 0" }}>What we believe</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 22 }}>
          {values.map(([t, d], i) => (
            <div key={t} style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: "var(--radius-lg)", padding: "26px 24px" }}>
              <span style={{ color: "#fff", display: "inline-flex", marginBottom: 14 }}><Icon name={icons[i]} size={28} /></span>
              <h3 style={{ font: "var(--type-h3)", textTransform: "uppercase", color: "#fff", margin: "0 0 8px" }}>{t}</h3>
              <p style={{ font: "var(--type-body-sm)", color: "rgba(255,255,255,0.9)", margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ValuesBand = ValuesBand;
