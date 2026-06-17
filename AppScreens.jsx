/* Roverland Voyage — mobile companion app screens. Composes DS Badge/Button/Avatar. */
const RVApp = (() => {
  function Header({ greeting, name }) {
    const ns = window.RoverlandVoyageDesignSystem_e06e08;
    const { Avatar } = ns;
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 20px 14px" }}>
        <div>
          <div style={{ font: "var(--type-overline)", letterSpacing: "var(--tracking-overline)", textTransform: "uppercase", color: "var(--text-muted)" }}>{greeting}</div>
          <div style={{ font: "var(--type-h3)", textTransform: "uppercase", color: "var(--text-strong)" }}>{name}</div>
        </div>
        <Avatar name={name} size={42} ring />
      </div>
    );
  }

  // ---- TODAY ----
  function Today({ trip, onOpen }) {
    const ns = window.RoverlandVoyageDesignSystem_e06e08;
    const Icon = window.Icon;
    const { Badge, Button } = ns;
    const today = trip.itinerary[3]; // a ★ surprise day for the demo
    return (
      <div style={{ padding: "0 0 12px" }}>
        <Header greeting="Day 4 · On the road" name="Maya" />
        {/* active route hero */}
        <div style={{ margin: "0 16px 18px", borderRadius: "var(--radius-lg)", overflow: "hidden", position: "relative", minHeight: 196, display: "flex", alignItems: "flex-end", boxShadow: "var(--shadow-md)" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${trip.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,20,24,0.9), rgba(8,20,24,0) 70%)" }} />
          <div style={{ position: "relative", padding: 16, color: "#fff" }}>
            <Badge tone="teal" solid dot>Live route</Badge>
            <div style={{ font: "var(--type-h3)", textTransform: "uppercase", marginTop: 8 }}>{trip.title}</div>
            <div style={{ font: "var(--type-body-sm)", color: "var(--rv-ink-200)", display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
              <Icon name="pin" size={14} style={{ color: "var(--rv-teal-200)" }} />{trip.location}
            </div>
          </div>
        </div>

        {/* next stop card */}
        <div style={{ margin: "0 16px 14px", background: "var(--surface-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-sm)", padding: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <span style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--rv-gradient-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="star" size={15} stroke="#fff" /></span>
            <span style={{ font: "var(--type-overline)", letterSpacing: "var(--tracking-overline)", textTransform: "uppercase", color: "var(--rv-teal-700)" }}>A surprise is near</span>
          </div>
          <div style={{ font: "700 1.05rem/1.3 var(--font-body)", color: "var(--text-strong)" }}>{today[1]}</div>
          <div style={{ font: "var(--type-body-sm)", color: "var(--text-muted)", marginTop: 4 }}>2.3 km ahead · keep driving toward the river bend</div>
          <Button variant="primary" size="sm" block style={{ marginTop: 14 }} onClick={onOpen}>Reveal the surprise</Button>
        </div>

        {/* quick stats */}
        <div style={{ margin: "0 16px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {[["route","148 km","Today"],["clock","3h 20m","Driving"],["sparkles","3","Surprises left"]].map(([ic,v,l])=>(
            <div key={l} style={{ background: "var(--rv-ink-50)", borderRadius: "var(--radius-md)", padding: "12px 10px", textAlign: "center" }}>
              <span style={{ color: "var(--text-brand)", display: "inline-flex" }}><Icon name={ic} size={18} /></span>
              <div style={{ font: "700 1rem/1.2 var(--font-body)", color: "var(--text-strong)", marginTop: 5 }}>{v}</div>
              <div style={{ font: "var(--type-overline)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ---- ROUTE ----
  function Route({ trip }) {
    const ns = window.RoverlandVoyageDesignSystem_e06e08;
    const Icon = window.Icon;
    const { Badge } = ns;
    return (
      <div style={{ padding: "0 0 12px" }}>
        <div style={{ padding: "6px 20px 14px" }}>
          <span className="rv-eyebrow">Your route</span>
          <div style={{ font: "var(--type-h3)", textTransform: "uppercase", color: "var(--text-strong)" }}>{trip.days}</div>
        </div>
        <ol style={{ listStyle: "none", margin: 0, padding: "0 20px" }}>
          {trip.itinerary.map(([day, route, note], i) => {
            const surprise = note.startsWith("★");
            const done = i < 3;
            return (
              <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 14, paddingBottom: i === trip.itinerary.length-1 ? 0 : 18 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ width: 30, height: 30, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", font: "700 0.78rem/1 var(--font-body)",
                    background: done ? "var(--rv-teal-500)" : surprise ? "var(--rv-gradient-primary)" : "var(--rv-blue-50)",
                    color: done || surprise ? "#fff" : "var(--text-brand)" }}>
                    {done ? <Icon name="check" size={15} stroke="#fff" /> : surprise ? <Icon name="star" size={14} stroke="#fff" /> : i+1}
                  </span>
                  {i !== trip.itinerary.length-1 && <span style={{ flex: 1, width: 2, background: done ? "var(--rv-teal-300)" : "var(--border-default)", marginTop: 3 }} />}
                </div>
                <div style={{ paddingTop: 3, opacity: done ? 0.6 : 1 }}>
                  <div style={{ font: "var(--type-overline)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)" }}>{day}</div>
                  <div style={{ font: "700 0.95rem/1.3 var(--font-body)", color: "var(--text-strong)" }}>{route}</div>
                  {surprise && <Badge tone="teal" style={{ marginTop: 5 }}>Surprise stop</Badge>}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

  // ---- SURPRISE REVEAL ----
  function Surprise({ onBack }) {
    const ns = window.RoverlandVoyageDesignSystem_e06e08;
    const Icon = window.Icon;
    const { Button } = ns;
    return (
      <div style={{ minHeight: "100%", background: "var(--rv-gradient-aurora)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 28, color: "#fff" }}>
        <span style={{ width: 76, height: 76, borderRadius: "50%", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22, animation: "rvPop var(--dur-slow) var(--ease-out)" }}>
          <Icon name="sparkles" size={36} stroke="#fff" />
        </span>
        <span style={{ font: "var(--type-eyebrow)", letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "rgba(255,255,255,0.85)" }}>Surprise unlocked</span>
        <h2 style={{ font: "var(--type-h1)", textTransform: "uppercase", margin: "10px 0 12px", maxWidth: "14ch" }}>Riverside breakfast</h2>
        <p style={{ font: "var(--type-body)", color: "rgba(255,255,255,0.92)", maxWidth: "28ch", margin: "0 0 28px" }}>Pull over at the blue marker. A table for two is set by the water — chai, warm parathas, and a view we've been saving for you.</p>
        <Button variant="secondary" size="md" onClick={onBack}>Take me there</Button>
      </div>
    );
  }

  function TabBar({ tab, setTab }) {
    const Icon = window.Icon;
    const tabs = [["today","compass","Today"],["route","route","Route"],["surprise","sparkles","Wow"]];
    return (
      <div style={{ display: "flex", justifyContent: "space-around", padding: "10px 16px 6px", borderTop: "1px solid var(--border-subtle)", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(12px)" }}>
        {tabs.map(([id, ic, label]) => (
          <button key={id} onClick={() => setTab(id)} style={{ border: "none", background: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, color: tab === id ? "var(--text-brand)" : "var(--text-subtle)" }}>
            <Icon name={ic} size={23} strokeWidth={tab === id ? 2.4 : 2} />
            <span style={{ font: "700 0.68rem/1 var(--font-body)", letterSpacing: "0.02em" }}>{label}</span>
          </button>
        ))}
      </div>
    );
  }

  return { Today, Route, Surprise, TabBar };
})();
window.RVApp = RVApp;
