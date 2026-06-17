import React from "react";

/**
 * Roverland Voyage — Input
 * Text field with soft rounded surface, teal focus ring, optional leading icon.
 */
export function Input({ icon = null, invalid = false, style = {}, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const wrap = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "0 16px",
    background: "var(--rv-clarity-white)",
    border: `1.5px solid ${invalid ? "var(--rv-danger)" : focused ? "var(--rv-teal-400)" : "var(--border-default)"}`,
    borderRadius: "var(--radius-md)",
    boxShadow: focused ? "var(--ring-focus)" : "none",
    transition: "border-color var(--dur-fast) var(--ease-glide), box-shadow var(--dur-fast) var(--ease-glide)",
    ...style,
  };
  const input = {
    flex: 1,
    border: "none",
    outline: "none",
    background: "transparent",
    font: "var(--type-body)",
    color: "var(--text-strong)",
    padding: "12px 0",
    minWidth: 0,
  };
  return (
    <div style={wrap}>
      {icon && <span style={{ display: "inline-flex", color: "var(--text-subtle)" }}>{icon}</span>}
      <input
        style={input}
        onFocus={(e) => { setFocused(true); rest.onFocus && rest.onFocus(e); }}
        onBlur={(e) => { setFocused(false); rest.onBlur && rest.onBlur(e); }}
        {...rest}
      />
    </div>
  );
}
