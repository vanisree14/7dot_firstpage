import React from "react";

/**
 * Roverland Voyage — Badge
 * Small status/label pill. Tonal (soft tinted bg) by default; solid & gradient
 * for emphasis. Uppercase Mulish caption.
 */
export function Badge({ children, tone = "brand", solid = false, gradient = false, dot = false, ...rest }) {
  const tones = {
    brand: { fg: "var(--rv-blue-700)", bg: "var(--rv-blue-50)", solid: "var(--rv-blue-500)" },
    teal: { fg: "var(--rv-teal-700)", bg: "var(--rv-teal-50)", solid: "var(--rv-teal-500)" },
    neutral: { fg: "var(--rv-ink-700)", bg: "var(--rv-ink-100)", solid: "var(--rv-ink-600)" },
    success: { fg: "var(--rv-teal-700)", bg: "var(--rv-teal-50)", solid: "var(--rv-success)" },
    warning: { fg: "#8A5D00", bg: "#FFF3DA", solid: "var(--rv-warning)" },
    danger: { fg: "#9B3322", bg: "#FCE6E1", solid: "var(--rv-danger)" },
  };
  const t = tones[tone] || tones.brand;
  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "4px 11px",
    font: "var(--type-caption)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    borderRadius: "var(--radius-pill)",
    lineHeight: 1.3,
    ...(gradient
      ? { background: "var(--rv-gradient-primary)", color: "var(--text-on-brand)" }
      : solid
      ? { background: t.solid, color: "var(--text-on-brand)" }
      : { background: t.bg, color: t.fg }),
  };
  return (
    <span style={style} {...rest}>
      {dot && (
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: gradient || solid ? "currentColor" : t.solid }} />
      )}
      {children}
    </span>
  );
}
