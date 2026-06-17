import React from "react";

/**
 * Roverland Voyage — Avatar
 * Round user/trip avatar. Renders an image when `src` is given, otherwise
 * initials on a soft brand tint. Optional gradient ring for "wow" / featured.
 */
export function Avatar({ src = null, name = "", size = 44, ring = false, ...rest }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const inner = {
    width: size,
    height: size,
    borderRadius: "50%",
    objectFit: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: src ? "transparent" : "var(--rv-teal-50)",
    color: "var(--rv-teal-700)",
    font: `700 ${Math.round(size * 0.36)}px/1 var(--font-body)`,
    overflow: "hidden",
    flexShrink: 0,
  };

  const node = src ? (
    <img src={src} alt={name} style={inner} />
  ) : (
    <span style={inner} aria-label={name}>{initials || "RV"}</span>
  );

  if (!ring) return <span style={{ display: "inline-flex" }} {...rest}>{node}</span>;

  return (
    <span
      style={{
        display: "inline-flex",
        padding: 2.5,
        borderRadius: "50%",
        background: "var(--rv-gradient-aurora)",
      }}
      {...rest}
    >
      <span style={{ display: "inline-flex", padding: 2, borderRadius: "50%", background: "var(--rv-clarity-white)" }}>
        {node}
      </span>
    </span>
  );
}
