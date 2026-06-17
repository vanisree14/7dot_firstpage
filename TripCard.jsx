import React from "react";
import { Badge } from "../display/Badge.jsx";

/**
 * Roverland Voyage — TripCard
 * The signature product card: full-bleed cinematic image with a night
 * protection gradient, floating badge, title and meta row. Lifts on hover.
 */
export function TripCard({
  image,
  title,
  location,
  days,
  price,
  badge = null,
  badgeTone = "teal",
  rating = null,
  onClick,
  style = {},
}) {
  const card = {
    position: "relative",
    borderRadius: "var(--radius-lg)",
    overflow: "hidden",
    boxShadow: "var(--shadow-md)",
    cursor: onClick ? "pointer" : "default",
    background: "var(--surface-night)",
    minHeight: 360,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    transition: "transform var(--dur-base) var(--ease-glide), box-shadow var(--dur-base) var(--ease-glide)",
    ...style,
  };
  return (
    <div
      style={card}
      onClick={onClick}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "var(--shadow-xl)"; const i = e.currentTarget.querySelector("[data-img]"); if (i) i.style.transform = "scale(1.06)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; const i = e.currentTarget.querySelector("[data-img]"); if (i) i.style.transform = "scale(1)"; }}
    >
      <div
        data-img
        style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover", backgroundPosition: "center",
          transition: "transform var(--dur-reveal) var(--ease-glide)",
        }}
      />
      {/* night protection gradient */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,20,24,0.92) 0%, rgba(8,20,24,0.45) 38%, rgba(8,20,24,0) 70%)" }} />

      {badge && (
        <div style={{ position: "absolute", top: 16, left: 16 }}>
          <Badge tone={badgeTone} solid dot>{badge}</Badge>
        </div>
      )}
      {rating != null && (
        <div style={{ position: "absolute", top: 16, right: 16, display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 11px", borderRadius: "var(--radius-pill)", background: "rgba(255,255,255,0.16)", backdropFilter: "blur(8px)", color: "#fff", font: "700 0.8125rem/1 var(--font-body)" }}>
          <span style={{ color: "#FFD15C" }}>★</span>{rating}
        </div>
      )}

      <div style={{ position: "relative", padding: "var(--space-5)", color: "#fff" }}>
        {location && (
          <div style={{ font: "var(--type-overline)", letterSpacing: "var(--tracking-overline)", textTransform: "uppercase", color: "var(--rv-teal-200)", marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            {location}
          </div>
        )}
        <h3 style={{ font: "var(--type-h3)", textTransform: "uppercase", margin: "0 0 12px", color: "#fff" }}>{title}</h3>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <span style={{ font: "var(--type-body-sm)", color: "var(--rv-ink-200)" }}>{days}</span>
          {price && (
            <span style={{ font: "var(--type-body-sm)", color: "var(--rv-ink-200)" }}>
              from <strong style={{ font: "700 1.05rem/1 var(--font-body)", color: "#fff" }}>{price}</strong>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
