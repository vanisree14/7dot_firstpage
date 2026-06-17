import React from "react";

/**
 * Roverland Voyage — Tag / Chip
 * Filter or category chip. Outlined by default; fills with tint when selected.
 * Optional leading icon (e.g. a small star for "surprise" routes).
 */
export function Tag({ children, selected = false, icon = null, onClick, ...rest }) {
  const interactive = typeof onClick === "function";
  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    padding: "7px 14px",
    font: "600 0.8125rem/1 var(--font-body)",
    borderRadius: "var(--radius-pill)",
    cursor: interactive ? "pointer" : "default",
    transition: "all var(--dur-fast) var(--ease-glide)",
    border: "1.5px solid",
    userSelect: "none",
    ...(selected
      ? { background: "var(--rv-teal-50)", borderColor: "var(--rv-teal-400)", color: "var(--rv-teal-700)" }
      : { background: "var(--rv-clarity-white)", borderColor: "var(--border-default)", color: "var(--text-body)" }),
  };
  return (
    <span
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={onClick}
      style={style}
      onMouseEnter={(e) => { if (interactive && !selected) e.currentTarget.style.borderColor = "var(--rv-teal-300)"; }}
      onMouseLeave={(e) => { if (interactive && !selected) e.currentTarget.style.borderColor = "var(--border-default)"; }}
      {...rest}
    >
      {icon}
      {children}
    </span>
  );
}
