import React from "react";

/**
 * Roverland Voyage — Button
 * Primary uses the brand gradient/blue; accent uses Explorer Teal; secondary &
 * ghost are quieter. Gentle lift + darken on hover, slight shrink on press.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = "button",
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 16px", font: "700 0.8125rem/1 var(--font-body)", gap: "7px", radius: "var(--radius-pill)" },
    md: { padding: "12px 22px", font: "var(--type-button)", gap: "9px", radius: "var(--radius-pill)" },
    lg: { padding: "16px 30px", font: "700 1.0625rem/1 var(--font-body)", gap: "11px", radius: "var(--radius-pill)" },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    padding: s.padding,
    font: s.font,
    letterSpacing: "var(--tracking-button)",
    borderRadius: s.radius,
    border: "2px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "transform var(--dur-base) var(--ease-glide), box-shadow var(--dur-base) var(--ease-glide), background var(--dur-fast) var(--ease-glide), color var(--dur-fast) var(--ease-glide)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    WebkitTapHighlightColor: "transparent",
  };

  const variants = {
    primary: { background: "var(--rv-gradient-primary)", color: "var(--text-on-brand)", boxShadow: "var(--shadow-blue)" },
    accent: { background: "var(--action-accent)", color: "var(--text-on-brand)", boxShadow: "var(--shadow-brand)" },
    secondary: { background: "var(--rv-clarity-white)", color: "var(--text-brand)", borderColor: "var(--rv-blue-200)", boxShadow: "var(--shadow-xs)" },
    ghost: { background: "transparent", color: "var(--text-brand)" },
    night: { background: "var(--surface-night)", color: "var(--text-on-brand)" },
  };

  const style = { ...base, ...(variants[variant] || variants.primary) };

  const onEnter = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = "translateY(-2px)";
    if (variant === "primary") e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    if (variant === "accent") e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    if (variant === "secondary") { e.currentTarget.style.background = "var(--rv-blue-50)"; }
    if (variant === "ghost") { e.currentTarget.style.background = "var(--rv-blue-50)"; }
  };
  const onLeave = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = style.boxShadow || "none";
    if (variant === "secondary" || variant === "ghost") e.currentTarget.style.background = variants[variant].background;
  };
  const onDown = (e) => { if (!disabled) e.currentTarget.style.transform = "translateY(0) scale(0.97)"; };
  const onUp = (e) => { if (!disabled) e.currentTarget.style.transform = "translateY(-2px)"; };

  const Tag = as;
  return (
    <Tag
      style={style}
      disabled={as === "button" ? disabled : undefined}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
