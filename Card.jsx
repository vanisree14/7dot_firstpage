import React from "react";

/**
 * Roverland Voyage — Card
 * Soft white surface, large radius, cool-tinted shadow. Lifts on hover when
 * `interactive`. The base container for most content blocks.
 */
export function Card({ children, interactive = false, padding = "var(--space-5)", style = {}, ...rest }) {
  const base = {
    background: "var(--surface-card)",
    borderRadius: "var(--radius-lg)",
    boxShadow: "var(--shadow-md)",
    border: "1px solid var(--border-subtle)",
    padding,
    transition: "transform var(--dur-base) var(--ease-glide), box-shadow var(--dur-base) var(--ease-glide)",
    ...style,
  };
  return (
    <div
      style={base}
      onMouseEnter={(e) => { if (interactive) { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; } }}
      onMouseLeave={(e) => { if (interactive) { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; } }}
      {...rest}
    >
      {children}
    </div>
  );
}
