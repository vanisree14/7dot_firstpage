import React from "react";

/**
 * Roverland Voyage — Field
 * Labelled wrapper for any form control. Renders a label, the control
 * (children), and optional hint or error text.
 */
export function Field({ label, hint = null, error = null, required = false, children, ...rest }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }} {...rest}>
      {label && (
        <span style={{ font: "var(--type-caption)", color: "var(--text-strong)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {label}
          {required && <span style={{ color: "var(--rv-danger)", marginLeft: 4 }}>*</span>}
        </span>
      )}
      {children}
      {error ? (
        <span style={{ font: "var(--type-body-sm)", color: "var(--rv-danger)" }}>{error}</span>
      ) : hint ? (
        <span style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>{hint}</span>
      ) : null}
    </label>
  );
}
