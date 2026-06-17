/* Roverland Voyage website — app shell wiring screens + interactions. */
function App() {
  const [view, setView] = React.useState("home"); // "home" | "detail"
  const [tripId, setTripId] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const scrollRef = React.useRef(null);

  const onScroll = (e) => setScrolled(e.target.scrollTop > 40);

  const openTrip = (id) => { setTripId(id); setView("detail"); if (scrollRef.current) scrollRef.current.scrollTop = 0; };
  const goHome = () => { setView("home"); if (scrollRef.current) scrollRef.current.scrollTop = 0; };
  const book = () => { setToast("You're in. The compass is set — check your inbox for the itinerary."); setTimeout(() => setToast(null), 4200); };

  return (
    <div ref={scrollRef} onScroll={onScroll} style={{ height: "100vh", overflowY: "auto", background: "var(--surface-page)", scrollBehavior: "smooth" }}>
      <SiteNav onNav={goHome} scrolled={scrolled || view === "detail"} />
      {view === "home" ? (
        <React.Fragment>
          <Hero onSearch={() => { const el = document.getElementById("journeys"); if (el && scrollRef.current) scrollRef.current.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" }); }} />
          <div id="journeys"><TripGrid onOpen={openTrip} /></div>
          <HowItWorks />
          <ValuesBand />
          <SiteFooter />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <TripDetail tripId={tripId} onBack={goHome} onBook={book} />
          <SiteFooter />
        </React.Fragment>
      )}

      {/* toast */}
      <div style={{
        position: "fixed", left: "50%", bottom: toast ? 28 : -120, transform: "translateX(-50%)",
        transition: "bottom var(--dur-slow) var(--ease-out)", zIndex: 100,
        display: "flex", alignItems: "center", gap: 12, padding: "14px 20px",
        background: "var(--surface-night)", color: "#fff", borderRadius: "var(--radius-pill)",
        boxShadow: "var(--shadow-xl)", maxWidth: "90vw",
      }}>
        <span style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--rv-gradient-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {window.Icon ? <window.Icon name="check" size={16} stroke="#fff" /> : "✓"}
        </span>
        <span style={{ font: "600 0.92rem/1.3 var(--font-body)" }}>{toast}</span>
      </div>
    </div>
  );
}
function mountSite() {
  if (window.Icon && window.SiteNav && window.Hero && window.TripGrid && window.HowItWorks && window.ValuesBand && window.SiteFooter && window.RV_DATA && window.RoverlandVoyageDesignSystem_e06e08) {
    ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  } else {
    setTimeout(mountSite, 30);
  }
}
mountSite();
