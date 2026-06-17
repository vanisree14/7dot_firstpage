import React from "react";

/**
 * Roverland Voyage — Logo
 * Renders the official logo lockups from the brand asset library. Pick the
 * lockup (`layout`), the color treatment (`tone`), whether to include the
 * "Into the Wow" tagline, and a render `height`.
 *
 * Assets must be reachable at `basePath` (defaults to "assets/logos"). In a
 * consuming project, copy the logo PNGs and point basePath at them.
 */
export function Logo({
  layout = "horizontal",   // "horizontal" | "vertical" | "symbol"
  tone = "gradient",        // "gradient" | "white" | "black" | "white-on-color"
  tagline = true,
  height = 48,
  basePath = "assets/logos",
  alt = "Roverland Voyage",
  style = {},
  ...rest
}) {
  let file;
  if (layout === "symbol") {
    const t = tone === "black" ? "black" : tone === "white" || tone === "white-on-color" ? "white" : "gradient";
    file = `rv-symbol-${t}.png`;
  } else {
    const tag = tagline ? "" : "-notag";
    // available no-tag variants: gradient & white only
    const safeTone = !tagline && (tone === "black" || tone === "white-on-color") ? "white" : tone;
    file = `rv-logo-${layout}-${safeTone}${tag}.png`;
  }
  return (
    <img
      src={`${basePath}/${file}`}
      alt={alt}
      style={{ height, width: "auto", display: "block", ...style }}
      {...rest}
    />
  );
}
