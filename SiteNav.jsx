/* Roverland Voyage — site top navigation. Frosted bar that goes solid on scroll. */
function SiteNav({ onNav, scrolled }) {
  const { Button, Logo } = window.RoverlandVoyageDesignSystem_e06e08;
  const links = ["Journeys", "How it works", "The Wow", "Stories"];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "16px clamp(20px, 5vw, 56px)",
      background: scrolled ? "rgba(255,255,255,0.86)" : "rgba(255,255,255,0)",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
      transition: "all var(--dur-base) var(--ease-glide)",
    }}>
      <a href="#" onClick={(e)=>{e.preventDefault();onNav("home");}} style={{ display: "inline-flex" }}>
        <Logo layout="horizontal" tone={scrolled ? "gradient" : "white"} height={38} basePath="../../assets/logos" />
      </a>
      <nav style={{ display: "flex", alignItems: "center", gap: "clamp(14px,2.4vw,32px)" }}>
        {links.map((l) => (
          <a key={l} href="#" onClick={(e)=>e.preventDefault()} style={{
            font: "700 0.9rem/1 var(--font-body)", textDecoration: "none",
            color: scrolled ? "var(--text-body)" : "rgba(255,255,255,0.92)",
            transition: "color var(--dur-fast) var(--ease-glide)",
          }}
          onMouseEnter={(e)=>e.currentTarget.style.color = scrolled ? "var(--text-brand)" : "#fff"}
          onMouseLeave={(e)=>e.currentTarget.style.color = scrolled ? "var(--text-body)" : "rgba(255,255,255,0.92)"}
          className="rv-navlink">{l}</a>
        ))}
        <Button variant={scrolled ? "primary" : "secondary"} size="sm" onClick={()=>onNav("home")}>Plan my trip</Button>
      </nav>
    </header>
  );
}
window.SiteNav = SiteNav;
