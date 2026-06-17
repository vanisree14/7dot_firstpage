/* Roverland Voyage — homepage hero. Full-bleed cinematic image, night protection
   gradient, display headline and a glass search bar. */
function Hero({ onSearch }) {
  const { Button } = window.RoverlandVoyageDesignSystem_e06e08;
  const Icon = window.Icon;
  return (
    <section style={{ position: "relative", minHeight: "min(92vh, 820px)", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url(https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1900&q=80&auto=format&fit=crop)",
        backgroundSize: "cover", backgroundPosition: "center",
        animation: "rvHeroDrift 24s var(--ease-glide) infinite alternate",
      }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,20,24,0.92) 2%, rgba(8,20,24,0.35) 45%, rgba(8,20,24,0.25) 100%)" }} />
      <div style={{ position: "relative", width: "100%", maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 clamp(20px,5vw,56px) clamp(40px,7vh,88px)" }}>
        <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase",
          background: "var(--rv-gradient-aurora)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
          Premium Self-Drive Road Trips
        </span>
        <h1 style={{ font: "var(--type-display-1)", letterSpacing: "var(--tracking-display)", textTransform: "uppercase", color: "#fff", margin: "12px 0 0", maxWidth: 16 + "ch", textWrap: "balance" }}>
          Every road has a wow waiting
        </h1>
        <p style={{ font: "var(--type-lead)", color: "rgba(255,255,255,0.9)", maxWidth: "52ch", margin: "20px 0 34px" }}>
          We don't sell travel. We deliver stories in motion — crafted routes, cinematic surprises, and unforgettable moments at every turn.
        </p>

        {/* glass search */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", padding: 10,
          background: "rgba(255,255,255,0.14)", backdropFilter: "blur(14px)", borderRadius: "var(--radius-xl)",
          border: "1px solid rgba(255,255,255,0.3)", maxWidth: 760 }}>
          <Field icon="pin" label="Where to?" value="Anywhere wild" />
          <div style={{ width: 1, height: 38, background: "rgba(255,255,255,0.25)" }} />
          <Field icon="calendar" label="When?" value="This season" />
          <div style={{ width: 1, height: 38, background: "rgba(255,255,255,0.25)" }} />
          <Field icon="users" label="Travellers" value="2 explorers" />
          <Button variant="accent" size="md" onClick={onSearch} iconRight={<Icon name="arrowRight" size={18} />} style={{ marginLeft: "auto" }}>Find my wow</Button>
        </div>
      </div>
    </section>
  );

  function Field({ icon, label, value }) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 11, padding: "8px 16px", minWidth: 150 }}>
        <span style={{ color: "var(--rv-teal-200)" }}><Icon name={icon} size={20} /></span>
        <div>
          <div style={{ font: "var(--type-overline)", letterSpacing: "var(--tracking-overline)", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>{label}</div>
          <div style={{ font: "700 0.95rem/1.2 var(--font-body)", color: "#fff" }}>{value}</div>
        </div>
      </div>
    );
  }
}
window.Hero = Hero;
