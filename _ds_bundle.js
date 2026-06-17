/* @ds-bundle: {"format":3,"namespace":"RoverlandVoyageDesignSystem_e06e08","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"TripCard","sourcePath":"components/surfaces/TripCard.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"e5ce0d7f59d2","components/buttons/Button.jsx":"f2de33690c61","components/display/Avatar.jsx":"57805f90864b","components/display/Badge.jsx":"4d29d6d25460","components/display/Tag.jsx":"b0b83876724d","components/forms/Field.jsx":"f3a20672305d","components/forms/Input.jsx":"365a992aaad3","components/surfaces/Card.jsx":"d3c424b4ea61","components/surfaces/TripCard.jsx":"cc8c78827cce","site/site.js":"a878c008abcb","ui_kits/app/AppScreens.jsx":"ce00c41c626a","ui_kits/app/app.jsx":"ce5025aeb590","ui_kits/app/ios-frame.jsx":"be3343be4b51","ui_kits/website/Hero.jsx":"2cc0aec6d68e","ui_kits/website/Icon.jsx":"b12fc12326b9","ui_kits/website/Sections.jsx":"69b7406ebcdb","ui_kits/website/SiteFooter.jsx":"175d22231e01","ui_kits/website/SiteNav.jsx":"45b15b21dd89","ui_kits/website/TripDetail.jsx":"37a617293824","ui_kits/website/TripGrid.jsx":"8c371bb3bf51","ui_kits/website/app.jsx":"bc4424d9350e","ui_kits/website/data.js":"a9efa2d29118"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RoverlandVoyageDesignSystem_e06e08 = window.RoverlandVoyageDesignSystem_e06e08 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Roverland Voyage — Logo
 * Renders the official logo lockups from the brand asset library. Pick the
 * lockup (`layout`), the color treatment (`tone`), whether to include the
 * "Into the Wow" tagline, and a render `height`.
 *
 * Assets must be reachable at `basePath` (defaults to "assets/logos"). In a
 * consuming project, copy the logo PNGs and point basePath at them.
 */
function Logo({
  layout = "horizontal",
  // "horizontal" | "vertical" | "symbol"
  tone = "gradient",
  // "gradient" | "white" | "black" | "white-on-color"
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
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${basePath}/${file}`,
    alt: alt,
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Roverland Voyage — Button
 * Primary uses the brand gradient/blue; accent uses Explorer Teal; secondary &
 * ghost are quieter. Gentle lift + darken on hover, slight shrink on press.
 */
function Button({
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
    sm: {
      padding: "8px 16px",
      font: "700 0.8125rem/1 var(--font-body)",
      gap: "7px",
      radius: "var(--radius-pill)"
    },
    md: {
      padding: "12px 22px",
      font: "var(--type-button)",
      gap: "9px",
      radius: "var(--radius-pill)"
    },
    lg: {
      padding: "16px 30px",
      font: "700 1.0625rem/1 var(--font-body)",
      gap: "11px",
      radius: "var(--radius-pill)"
    }
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
    WebkitTapHighlightColor: "transparent"
  };
  const variants = {
    primary: {
      background: "var(--rv-gradient-primary)",
      color: "var(--text-on-brand)",
      boxShadow: "var(--shadow-blue)"
    },
    accent: {
      background: "var(--action-accent)",
      color: "var(--text-on-brand)",
      boxShadow: "var(--shadow-brand)"
    },
    secondary: {
      background: "var(--rv-clarity-white)",
      color: "var(--text-brand)",
      borderColor: "var(--rv-blue-200)",
      boxShadow: "var(--shadow-xs)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-brand)"
    },
    night: {
      background: "var(--surface-night)",
      color: "var(--text-on-brand)"
    }
  };
  const style = {
    ...base,
    ...(variants[variant] || variants.primary)
  };
  const onEnter = e => {
    if (disabled) return;
    e.currentTarget.style.transform = "translateY(-2px)";
    if (variant === "primary") e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    if (variant === "accent") e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    if (variant === "secondary") {
      e.currentTarget.style.background = "var(--rv-blue-50)";
    }
    if (variant === "ghost") {
      e.currentTarget.style.background = "var(--rv-blue-50)";
    }
  };
  const onLeave = e => {
    if (disabled) return;
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = style.boxShadow || "none";
    if (variant === "secondary" || variant === "ghost") e.currentTarget.style.background = variants[variant].background;
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = "translateY(0) scale(0.97)";
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = "translateY(-2px)";
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: style,
    disabled: as === "button" ? disabled : undefined,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Roverland Voyage — Avatar
 * Round user/trip avatar. Renders an image when `src` is given, otherwise
 * initials on a soft brand tint. Optional gradient ring for "wow" / featured.
 */
function Avatar({
  src = null,
  name = "",
  size = 44,
  ring = false,
  ...rest
}) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
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
    flexShrink: 0
  };
  const node = src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: inner
  }) : /*#__PURE__*/React.createElement("span", {
    style: inner,
    "aria-label": name
  }, initials || "RV");
  if (!ring) return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex"
    }
  }, rest), node);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      padding: 2.5,
      borderRadius: "50%",
      background: "var(--rv-gradient-aurora)"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      padding: 2,
      borderRadius: "50%",
      background: "var(--rv-clarity-white)"
    }
  }, node));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Roverland Voyage — Badge
 * Small status/label pill. Tonal (soft tinted bg) by default; solid & gradient
 * for emphasis. Uppercase Mulish caption.
 */
function Badge({
  children,
  tone = "brand",
  solid = false,
  gradient = false,
  dot = false,
  ...rest
}) {
  const tones = {
    brand: {
      fg: "var(--rv-blue-700)",
      bg: "var(--rv-blue-50)",
      solid: "var(--rv-blue-500)"
    },
    teal: {
      fg: "var(--rv-teal-700)",
      bg: "var(--rv-teal-50)",
      solid: "var(--rv-teal-500)"
    },
    neutral: {
      fg: "var(--rv-ink-700)",
      bg: "var(--rv-ink-100)",
      solid: "var(--rv-ink-600)"
    },
    success: {
      fg: "var(--rv-teal-700)",
      bg: "var(--rv-teal-50)",
      solid: "var(--rv-success)"
    },
    warning: {
      fg: "#8A5D00",
      bg: "#FFF3DA",
      solid: "var(--rv-warning)"
    },
    danger: {
      fg: "#9B3322",
      bg: "#FCE6E1",
      solid: "var(--rv-danger)"
    }
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
    ...(gradient ? {
      background: "var(--rv-gradient-primary)",
      color: "var(--text-on-brand)"
    } : solid ? {
      background: t.solid,
      color: "var(--text-on-brand)"
    } : {
      background: t.bg,
      color: t.fg
    })
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: style
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: gradient || solid ? "currentColor" : t.solid
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Roverland Voyage — Tag / Chip
 * Filter or category chip. Outlined by default; fills with tint when selected.
 * Optional leading icon (e.g. a small star for "surprise" routes).
 */
function Tag({
  children,
  selected = false,
  icon = null,
  onClick,
  ...rest
}) {
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
    ...(selected ? {
      background: "var(--rv-teal-50)",
      borderColor: "var(--rv-teal-400)",
      color: "var(--rv-teal-700)"
    } : {
      background: "var(--rv-clarity-white)",
      borderColor: "var(--border-default)",
      color: "var(--text-body)"
    })
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    role: interactive ? "button" : undefined,
    tabIndex: interactive ? 0 : undefined,
    onClick: onClick,
    style: style,
    onMouseEnter: e => {
      if (interactive && !selected) e.currentTarget.style.borderColor = "var(--rv-teal-300)";
    },
    onMouseLeave: e => {
      if (interactive && !selected) e.currentTarget.style.borderColor = "var(--border-default)";
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Roverland Voyage — Field
 * Labelled wrapper for any form control. Renders a label, the control
 * (children), and optional hint or error text.
 */
function Field({
  label,
  hint = null,
  error = null,
  required = false,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "7px"
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-strong)",
      textTransform: "uppercase",
      letterSpacing: "0.05em"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--rv-danger)",
      marginLeft: 4
    }
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--rv-danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Roverland Voyage — Input
 * Text field with soft rounded surface, teal focus ring, optional leading icon.
 */
function Input({
  icon = null,
  invalid = false,
  style = {},
  ...rest
}) {
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
    ...style
  };
  const input = {
    flex: 1,
    border: "none",
    outline: "none",
    background: "transparent",
    font: "var(--type-body)",
    color: "var(--text-strong)",
    padding: "12px 0",
    minWidth: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-subtle)"
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    style: input,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Roverland Voyage — Card
 * Soft white surface, large radius, cool-tinted shadow. Lifts on hover when
 * `interactive`. The base container for most content blocks.
 */
function Card({
  children,
  interactive = false,
  padding = "var(--space-5)",
  style = {},
  ...rest
}) {
  const base = {
    background: "var(--surface-card)",
    borderRadius: "var(--radius-lg)",
    boxShadow: "var(--shadow-md)",
    border: "1px solid var(--border-subtle)",
    padding,
    transition: "transform var(--dur-base) var(--ease-glide), box-shadow var(--dur-base) var(--ease-glide)",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/TripCard.jsx
try { (() => {
/**
 * Roverland Voyage — TripCard
 * The signature product card: full-bleed cinematic image with a night
 * protection gradient, floating badge, title and meta row. Lifts on hover.
 */
function TripCard({
  image,
  title,
  location,
  days,
  price,
  badge = null,
  badgeTone = "teal",
  rating = null,
  onClick,
  style = {}
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
    ...style
  };
  return /*#__PURE__*/React.createElement("div", {
    style: card,
    onClick: onClick,
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "var(--shadow-xl)";
      const i = e.currentTarget.querySelector("[data-img]");
      if (i) i.style.transform = "scale(1.06)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
      const i = e.currentTarget.querySelector("[data-img]");
      if (i) i.style.transform = "scale(1)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-img": true,
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transition: "transform var(--dur-reveal) var(--ease-glide)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(8,20,24,0.92) 0%, rgba(8,20,24,0.45) 38%, rgba(8,20,24,0) 70%)"
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badgeTone,
    solid: true,
    dot: true
  }, badge)), rating != null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      right: 16,
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: "5px 11px",
      borderRadius: "var(--radius-pill)",
      background: "rgba(255,255,255,0.16)",
      backdropFilter: "blur(8px)",
      color: "#fff",
      font: "700 0.8125rem/1 var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#FFD15C"
    }
  }, "\u2605"), rating), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "var(--space-5)",
      color: "#fff"
    }
  }, location && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--rv-teal-200)",
      marginBottom: 6,
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })), location), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      textTransform: "uppercase",
      margin: "0 0 12px",
      color: "#fff"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--rv-ink-200)"
    }
  }, days), price && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--rv-ink-200)"
    }
  }, "from ", /*#__PURE__*/React.createElement("strong", {
    style: {
      font: "700 1.05rem/1 var(--font-body)",
      color: "#fff"
    }
  }, price)))));
}
Object.assign(__ds_scope, { TripCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/TripCard.jsx", error: String((e && e.message) || e) }); }

// site/site.js
try { (() => {
/* Roverland Voyage — site interactions. Vanilla JS, no deps. */
(function () {
  // ---- Sticky nav: solid on scroll (or always solid on inner pages w/o hero) ----
  var nav = document.querySelector(".nav");
  var hasHero = !!document.querySelector(".hero");
  function onScroll() {
    if (!nav) return;
    if (!hasHero || window.scrollY > 40) nav.classList.add("solid");else nav.classList.remove("solid");
  }
  if (!hasHero && nav) nav.classList.add("solid");
  window.addEventListener("scroll", onScroll, {
    passive: true
  });
  onScroll();

  // ---- Mobile menu ----
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) links.classList.remove("open");
    });
  }

  // ---- Hero reel (cross-fade images) ----
  document.querySelectorAll(".hero-reel").forEach(function (reel) {
    var imgs = reel.querySelectorAll("img");
    if (imgs.length < 2) return;
    var dots = document.querySelectorAll(".reel-dots button");
    var i = 0;
    function show(n) {
      imgs[i].classList.remove("active");
      if (dots[i]) dots[i].classList.remove("active");
      i = (n + imgs.length) % imgs.length;
      imgs[i].classList.add("active");
      if (dots[i]) dots[i].classList.add("active");
    }
    var timer = setInterval(function () {
      show(i + 1);
    }, 4200);
    dots.forEach(function (d, n) {
      d.addEventListener("click", function () {
        clearInterval(timer);
        show(n);
        timer = setInterval(function () {
          show(i + 1);
        }, 4200);
      });
    });
  });

  // ---- FAQ accordion ----
  document.querySelectorAll(".acc-q").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.closest(".acc-item");
      var ans = item.querySelector(".acc-a");
      var open = item.classList.contains("open");
      if (open) {
        item.classList.remove("open");
        ans.style.maxHeight = null;
      } else {
        item.classList.add("open");
        ans.style.maxHeight = ans.scrollHeight + "px";
      }
    });
  });

  // ---- Gallery filter ----
  var gFilters = document.querySelectorAll("[data-filter]");
  if (gFilters.length) {
    gFilters.forEach(function (btn) {
      btn.addEventListener("click", function () {
        gFilters.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        var f = btn.getAttribute("data-filter");
        document.querySelectorAll(".g-item").forEach(function (it) {
          var cat = it.getAttribute("data-cat");
          it.classList.toggle("hide", !(f === "all" || cat === f));
        });
      });
    });
  }

  // ---- Forms (fake submit → success message) ----
  document.querySelectorAll("form[data-fake]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = form.querySelector(".form-success");
      if (msg) msg.classList.add("show");
      form.querySelectorAll(".input, .select, .textarea").forEach(function (el) {
        el.value = "";
      });
      if (msg) msg.scrollIntoView ? null : null; // never use scrollIntoView
    });
  });

  // ---- Reveal on scroll ----
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });
  document.querySelectorAll(".reveal").forEach(function (el) {
    io.observe(el);
  });

  // ---- Experience video slots: show video when the file exists ----
  document.querySelectorAll('.exp-media[data-video], .wow-media[data-video]').forEach(function (m) {
    var v = document.createElement('video');
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    v.autoplay = true;
    v.setAttribute('muted', '');
    v.setAttribute('playsinline', '');
    v.src = m.getAttribute('data-video');
    v.addEventListener('loadeddata', function () {
      m.classList.add('has-video');
      v.play().catch(function () {});
    });
    v.addEventListener('error', function () {
      m.classList.remove('has-video');
    });
    m.prepend(v);
  });

  // ---- Heart toggle ----
  document.querySelectorAll('.exp-fav').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault();
      b.classList.toggle('faved');
    });
  });

  // ---- wow-row interactions: expand, stagger entrance, parallax, auto-cycle ----
  var wowRow = document.querySelector('.wow-row');
  if (wowRow) {
    var panels = Array.prototype.slice.call(wowRow.querySelectorAll('.wow-panel'));
    var userTouched = false;
    function openPanel(p) {
      panels.forEach(function (x) {
        x.classList.toggle('open', x === p);
        x.setAttribute('aria-expanded', x === p ? 'true' : 'false');
      });
    }
    panels.forEach(function (p, i) {
      p.style.setProperty('--wd', i * 80 + 'ms');
      p.addEventListener('click', function () {
        userTouched = true;
        if (!p.classList.contains('open')) openPanel(p);
      });
      p.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          userTouched = true;
          openPanel(p);
        }
      });
    });

    // staggered entrance — IO fast path + poll fallback + guaranteed end-state
    var wowEntered = false;
    function wowEnter() {
      if (wowEntered) return;
      wowEntered = true;
      panels.forEach(function (p, i) {
        p.classList.add('in');
        setTimeout(function () {
          p.style.transition = 'none';
          p.style.opacity = '1';
          p.style.transform = 'none';
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              p.style.transition = '';
            });
          });
        }, i * 80 + 780);
      });
    }
    function wowInView() {
      var r = wowRow.getBoundingClientRect();
      return r.top < window.innerHeight * 0.92 && r.bottom > 0;
    }
    var wio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          wowEnter();
          wio.disconnect();
        }
      });
    }, {
      threshold: 0.15
    });
    wio.observe(wowRow);
    var wowPoll = setInterval(function () {
      if (wowEntered) {
        clearInterval(wowPoll);
        return;
      }
      if (wowInView()) {
        wowEnter();
        clearInterval(wowPoll);
      }
    }, 350);

    // gentle parallax on the open panel's media
    var ticking = false;
    function parallax() {
      var r = wowRow.getBoundingClientRect();
      if (r.bottom > 0 && r.top < window.innerHeight) {
        var p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        wowRow.querySelectorAll('.wow-panel.open video, .wow-panel.open .video-ph').forEach(function (el) {
          el.style.transform = 'translateY(' + (p * 34).toFixed(1) + 'px)';
        });
      }
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(parallax);
      }
    }, {
      passive: true
    });
    parallax();
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/site.js", error: String((e && e.message) || e) }); }

// ui_kits/app/AppScreens.jsx
try { (() => {
/* Roverland Voyage — mobile companion app screens. Composes DS Badge/Button/Avatar. */
const RVApp = (() => {
  function Header({
    greeting,
    name
  }) {
    const ns = window.RoverlandVoyageDesignSystem_e06e08;
    const {
      Avatar
    } = ns;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "6px 20px 14px"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-overline)",
        letterSpacing: "var(--tracking-overline)",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, greeting), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-h3)",
        textTransform: "uppercase",
        color: "var(--text-strong)"
      }
    }, name)), /*#__PURE__*/React.createElement(Avatar, {
      name: name,
      size: 42,
      ring: true
    }));
  }

  // ---- TODAY ----
  function Today({
    trip,
    onOpen
  }) {
    const ns = window.RoverlandVoyageDesignSystem_e06e08;
    const Icon = window.Icon;
    const {
      Badge,
      Button
    } = ns;
    const today = trip.itinerary[3]; // a ★ surprise day for the demo
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 0 12px"
      }
    }, /*#__PURE__*/React.createElement(Header, {
      greeting: "Day 4 \xB7 On the road",
      name: "Maya"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "0 16px 18px",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        position: "relative",
        minHeight: 196,
        display: "flex",
        alignItems: "flex-end",
        boxShadow: "var(--shadow-md)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${trip.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(8,20,24,0.9), rgba(8,20,24,0) 70%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        padding: 16,
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "teal",
      solid: true,
      dot: true
    }, "Live route"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-h3)",
        textTransform: "uppercase",
        marginTop: 8
      }
    }, trip.title), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-body-sm)",
        color: "var(--rv-ink-200)",
        display: "flex",
        alignItems: "center",
        gap: 6,
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "pin",
      size: 14,
      style: {
        color: "var(--rv-teal-200)"
      }
    }), trip.location))), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "0 16px 14px",
        background: "var(--surface-card)",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border-subtle)",
        boxShadow: "var(--shadow-sm)",
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        background: "var(--rv-gradient-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: 15,
      stroke: "#fff"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-overline)",
        letterSpacing: "var(--tracking-overline)",
        textTransform: "uppercase",
        color: "var(--rv-teal-700)"
      }
    }, "A surprise is near")), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "700 1.05rem/1.3 var(--font-body)",
        color: "var(--text-strong)"
      }
    }, today[1]), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-body-sm)",
        color: "var(--text-muted)",
        marginTop: 4
      }
    }, "2.3 km ahead \xB7 keep driving toward the river bend"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      block: true,
      style: {
        marginTop: 14
      },
      onClick: onOpen
    }, "Reveal the surprise")), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "0 16px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 10
      }
    }, [["route", "148 km", "Today"], ["clock", "3h 20m", "Driving"], ["sparkles", "3", "Surprises left"]].map(([ic, v, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        background: "var(--rv-ink-50)",
        borderRadius: "var(--radius-md)",
        padding: "12px 10px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-brand)",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "700 1rem/1.2 var(--font-body)",
        color: "var(--text-strong)",
        marginTop: 5
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-overline)",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, l)))));
  }

  // ---- ROUTE ----
  function Route({
    trip
  }) {
    const ns = window.RoverlandVoyageDesignSystem_e06e08;
    const Icon = window.Icon;
    const {
      Badge
    } = ns;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 0 12px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "6px 20px 14px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "rv-eyebrow"
    }, "Your route"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-h3)",
        textTransform: "uppercase",
        color: "var(--text-strong)"
      }
    }, trip.days)), /*#__PURE__*/React.createElement("ol", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: "0 20px"
      }
    }, trip.itinerary.map(([day, route, note], i) => {
      const surprise = note.startsWith("★");
      const done = i < 3;
      return /*#__PURE__*/React.createElement("li", {
        key: i,
        style: {
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: 14,
          paddingBottom: i === trip.itinerary.length - 1 ? 0 : 18
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 30,
          height: 30,
          borderRadius: "50%",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          font: "700 0.78rem/1 var(--font-body)",
          background: done ? "var(--rv-teal-500)" : surprise ? "var(--rv-gradient-primary)" : "var(--rv-blue-50)",
          color: done || surprise ? "#fff" : "var(--text-brand)"
        }
      }, done ? /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 15,
        stroke: "#fff"
      }) : surprise ? /*#__PURE__*/React.createElement(Icon, {
        name: "star",
        size: 14,
        stroke: "#fff"
      }) : i + 1), i !== trip.itinerary.length - 1 && /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          width: 2,
          background: done ? "var(--rv-teal-300)" : "var(--border-default)",
          marginTop: 3
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          paddingTop: 3,
          opacity: done ? 0.6 : 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          font: "var(--type-overline)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--text-muted)"
        }
      }, day), /*#__PURE__*/React.createElement("div", {
        style: {
          font: "700 0.95rem/1.3 var(--font-body)",
          color: "var(--text-strong)"
        }
      }, route), surprise && /*#__PURE__*/React.createElement(Badge, {
        tone: "teal",
        style: {
          marginTop: 5
        }
      }, "Surprise stop")));
    })));
  }

  // ---- SURPRISE REVEAL ----
  function Surprise({
    onBack
  }) {
    const ns = window.RoverlandVoyageDesignSystem_e06e08;
    const Icon = window.Icon;
    const {
      Button
    } = ns;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100%",
        background: "var(--rv-gradient-aurora)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 28,
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 76,
        height: 76,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.18)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 22,
        animation: "rvPop var(--dur-slow) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 36,
      stroke: "#fff"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-eyebrow)",
        letterSpacing: "var(--tracking-eyebrow)",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.85)"
      }
    }, "Surprise unlocked"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "var(--type-h1)",
        textTransform: "uppercase",
        margin: "10px 0 12px",
        maxWidth: "14ch"
      }
    }, "Riverside breakfast"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--type-body)",
        color: "rgba(255,255,255,0.92)",
        maxWidth: "28ch",
        margin: "0 0 28px"
      }
    }, "Pull over at the blue marker. A table for two is set by the water \u2014 chai, warm parathas, and a view we've been saving for you."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "md",
      onClick: onBack
    }, "Take me there"));
  }
  function TabBar({
    tab,
    setTab
  }) {
    const Icon = window.Icon;
    const tabs = [["today", "compass", "Today"], ["route", "route", "Route"], ["surprise", "sparkles", "Wow"]];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 16px 6px",
        borderTop: "1px solid var(--border-subtle)",
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(12px)"
      }
    }, tabs.map(([id, ic, label]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => setTab(id),
      style: {
        border: "none",
        background: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        color: tab === id ? "var(--text-brand)" : "var(--text-subtle)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 23,
      strokeWidth: tab === id ? 2.4 : 2
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "700 0.68rem/1 var(--font-body)",
        letterSpacing: "0.02em"
      }
    }, label))));
  }
  return {
    Today,
    Route,
    Surprise,
    TabBar
  };
})();
window.RVApp = RVApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/app.jsx
try { (() => {
/* Roverland Voyage companion app — mounts the iOS device + tabbed screens. */
function CompanionApp() {
  const [tab, setTab] = React.useState("today");
  const trip = window.RV_DATA.trips[0];
  const {
    Today,
    Route,
    Surprise,
    TabBar
  } = window.RVApp;
  let screen;
  if (tab === "today") screen = /*#__PURE__*/React.createElement(Today, {
    trip: trip,
    onOpen: () => setTab("surprise")
  });else if (tab === "route") screen = /*#__PURE__*/React.createElement(Route, {
    trip: trip
  });else screen = /*#__PURE__*/React.createElement(Surprise, {
    onBack: () => setTab("today")
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 48,
      flexWrap: "wrap",
      padding: 40,
      background: "radial-gradient(120% 120% at 50% 0%, #0e2a3a 0%, #0a1418 60%)"
    }
  }, /*#__PURE__*/React.createElement(IOSDevice, {
    title: "Roverland"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      paddingTop: 6
    }
  }, screen), /*#__PURE__*/React.createElement(TabBar, {
    tab: tab,
    setTab: setTab
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/rv-logo-vertical-white.png",
    alt: "Roverland Voyage",
    style: {
      height: 120,
      marginBottom: 22
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      background: "var(--rv-gradient-aurora)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, "The Companion App"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      textTransform: "uppercase",
      margin: "8px 0 14px",
      color: "#fff"
    }
  }, "Your co-pilot for the wow"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--rv-ink-300)",
      margin: 0
    }
  }, "Live route guidance, a mile-by-mile timeline, and surprises that unlock as you drive. Tap the tabs \u2014 and tap ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "Reveal the surprise"), " on Today.")));
}
function mountCompanionApp() {
  if (window.Icon && window.RVApp && window.IOSDevice && window.RV_DATA && window.RoverlandVoyageDesignSystem_e06e08) {
    ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(CompanionApp, null));
  } else {
    setTimeout(mountCompanionApp, 30);
  }
}
mountCompanionApp();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Roverland Voyage — homepage hero. Full-bleed cinematic image, night protection
   gradient, display headline and a glass search bar. */
function Hero({
  onSearch
}) {
  const {
    Button
  } = window.RoverlandVoyageDesignSystem_e06e08;
  const Icon = window.Icon;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: "min(92vh, 820px)",
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1900&q=80&auto=format&fit=crop)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      animation: "rvHeroDrift 24s var(--ease-glide) infinite alternate"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(8,20,24,0.92) 2%, rgba(8,20,24,0.35) 45%, rgba(8,20,24,0.25) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "0 clamp(20px,5vw,56px) clamp(40px,7vh,88px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      background: "var(--rv-gradient-aurora)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, "Premium Self-Drive Road Trips"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display-1)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color: "#fff",
      margin: "12px 0 0",
      maxWidth: 16 + "ch",
      textWrap: "balance"
    }
  }, "Every road has a wow waiting"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "rgba(255,255,255,0.9)",
      maxWidth: "52ch",
      margin: "20px 0 34px"
    }
  }, "We don't sell travel. We deliver stories in motion \u2014 crafted routes, cinematic surprises, and unforgettable moments at every turn."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      alignItems: "center",
      padding: 10,
      background: "rgba(255,255,255,0.14)",
      backdropFilter: "blur(14px)",
      borderRadius: "var(--radius-xl)",
      border: "1px solid rgba(255,255,255,0.3)",
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(Field, {
    icon: "pin",
    label: "Where to?",
    value: "Anywhere wild"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 38,
      background: "rgba(255,255,255,0.25)"
    }
  }), /*#__PURE__*/React.createElement(Field, {
    icon: "calendar",
    label: "When?",
    value: "This season"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 38,
      background: "rgba(255,255,255,0.25)"
    }
  }), /*#__PURE__*/React.createElement(Field, {
    icon: "users",
    label: "Travellers",
    value: "2 explorers"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "md",
    onClick: onSearch,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrowRight",
      size: 18
    }),
    style: {
      marginLeft: "auto"
    }
  }, "Find my wow"))));
  function Field({
    icon,
    label,
    value
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "8px 16px",
        minWidth: 150
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--rv-teal-200)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 20
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-overline)",
        letterSpacing: "var(--tracking-overline)",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.7)"
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "700 0.95rem/1.2 var(--font-body)",
        color: "#fff"
      }
    }, value)));
  }
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icon.jsx
try { (() => {
/* Roverland Voyage UI kit — Icon set.
   Line icons in the Lucide style (ISC, lucide.dev) — 24px grid, 2px round strokes.
   This is the documented icon substitution; swap for a bespoke set if commissioned. */
const RV_ICON_PATHS = {
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  menu: '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
  arrowRight: '<line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  sparkles: '<path d="M9.94 14.06 8 20l-1.94-5.94L0 12l6.06-2.06L8 4l1.94 5.94L16 12z"/><path d="M19 4v4"/><path d="M21 6h-4"/>',
  route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'
};
function Icon({
  name,
  size = 22,
  stroke = "currentColor",
  strokeWidth = 2,
  style = {},
  ...rest
}) {
  const path = RV_ICON_PATHS[name] || "";
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: "block",
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: path
    },
    ...rest
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
/* Roverland Voyage — "How it works" steps + values band on the night gradient. */
function HowItWorks() {
  const Icon = window.Icon;
  const steps = window.RV_DATA.steps;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      padding: "clamp(56px,9vh,112px) clamp(20px,5vw,56px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rv-eyebrow"
  }, "Freedom Without Friction"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      textTransform: "uppercase",
      color: "var(--text-strong)",
      margin: "8px 0 48px"
    }
  }, "How the magic happens"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
      gap: 32
    }
  }, steps.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-display-2)",
      lineHeight: 1,
      background: "var(--rv-gradient-primary)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      textTransform: "uppercase",
      color: "var(--text-strong)",
      margin: "12px 0 8px"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-body)",
      margin: 0
    }
  }, d))))));
}
window.HowItWorks = HowItWorks;
function ValuesBand() {
  const {
    Badge
  } = window.RoverlandVoyageDesignSystem_e06e08;
  const Icon = window.Icon;
  const icons = ["sparkles", "route", "star", "leaf"];
  const values = window.RV_DATA.values;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--rv-gradient-aurora)",
      padding: "clamp(56px,9vh,104px) clamp(20px,5vw,56px)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.85)"
    }
  }, "The State of Wow"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      textTransform: "uppercase",
      color: "#fff",
      margin: "8px 0 0"
    }
  }, "What we believe")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
      gap: 22
    }
  }, values.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: "rgba(255,255,255,0.12)",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255,255,255,0.22)",
      borderRadius: "var(--radius-lg)",
      padding: "26px 24px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      display: "inline-flex",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icons[i],
    size: 28
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      textTransform: "uppercase",
      color: "#fff",
      margin: "0 0 8px"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "rgba(255,255,255,0.9)",
      margin: 0
    }
  }, d))))));
}
window.ValuesBand = ValuesBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
/* Roverland Voyage — newsletter CTA + footer on the night palette. */
function SiteFooter() {
  const {
    Button,
    Input,
    Logo
  } = window.RoverlandVoyageDesignSystem_e06e08;
  const cols = [["Journeys", ["Mountain drives", "Coastal cruises", "Desert runs", "Forest roads"]], ["Company", ["Our story", "The Wow Spectrum", "Trip designers", "Sustainability"]], ["Support", ["Plan a trip", "FAQs", "Safety", "Contact us"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-night)",
      color: "var(--rv-ink-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "clamp(48px,7vh,88px) clamp(20px,5vw,56px)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      background: "var(--rv-gradient-aurora)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, "Into the Wow"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      textTransform: "uppercase",
      color: "#fff",
      margin: "10px 0 8px"
    }
  }, "Get the next surprise route first"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--rv-ink-300)",
      maxWidth: "48ch",
      margin: "0 auto 26px"
    }
  }, "One beautiful email a month. New drives, secret detours, and a little wonder for your inbox."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: "flex",
      gap: 10,
      maxWidth: 460,
      margin: "0 auto",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    type: "submit"
  }, "Subscribe"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "clamp(40px,6vh,64px) clamp(20px,5vw,56px)",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3, 1fr)",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    layout: "horizontal",
    tone: "white",
    height: 40,
    basePath: "../../assets/logos"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--rv-ink-400)",
      marginTop: 18,
      maxWidth: "30ch"
    }
  }, "Premium, self-driven road trips that turn every mile into a long-lasting memory.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--rv-ink-400)",
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gap: 11
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--rv-ink-200)",
      textDecoration: "none",
      font: "var(--type-body-sm)"
    },
    onMouseEnter: e => e.currentTarget.style.color = "#fff",
    onMouseLeave: e => e.currentTarget.style.color = "var(--rv-ink-200)"
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "20px clamp(20px,5vw,56px) 36px",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      font: "var(--type-body-sm)",
      color: "var(--rv-ink-400)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Roverland Voyage\u2122. Into the Wow."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Made in Coimbatore")));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteNav.jsx
try { (() => {
/* Roverland Voyage — site top navigation. Frosted bar that goes solid on scroll. */
function SiteNav({
  onNav,
  scrolled
}) {
  const {
    Button,
    Logo
  } = window.RoverlandVoyageDesignSystem_e06e08;
  const links = ["Journeys", "How it works", "The Wow", "Stories"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px clamp(20px, 5vw, 56px)",
      background: scrolled ? "rgba(255,255,255,0.86)" : "rgba(255,255,255,0)",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
      transition: "all var(--dur-base) var(--ease-glide)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("home");
    },
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    layout: "horizontal",
    tone: scrolled ? "gradient" : "white",
    height: 38,
    basePath: "../../assets/logos"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "clamp(14px,2.4vw,32px)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      font: "700 0.9rem/1 var(--font-body)",
      textDecoration: "none",
      color: scrolled ? "var(--text-body)" : "rgba(255,255,255,0.92)",
      transition: "color var(--dur-fast) var(--ease-glide)"
    },
    onMouseEnter: e => e.currentTarget.style.color = scrolled ? "var(--text-brand)" : "#fff",
    onMouseLeave: e => e.currentTarget.style.color = scrolled ? "var(--text-body)" : "rgba(255,255,255,0.92)",
    className: "rv-navlink"
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: scrolled ? "primary" : "secondary",
    size: "sm",
    onClick: () => onNav("home")
  }, "Plan my trip")));
}
window.SiteNav = SiteNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TripDetail.jsx
try { (() => {
/* Roverland Voyage — trip detail view: hero, itinerary timeline, booking card. */
function TripDetail({
  tripId,
  onBack,
  onBook
}) {
  const {
    Button,
    Badge,
    Avatar
  } = window.RoverlandVoyageDesignSystem_e06e08;
  const Icon = window.Icon;
  const t = window.RV_DATA.trips.find(x => x.id === tripId);
  if (!t) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: "min(64vh, 560px)",
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${t.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(8,20,24,0.94) 4%, rgba(8,20,24,0.3) 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 clamp(20px,5vw,56px) 44px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      background: "rgba(255,255,255,0.16)",
      backdropFilter: "blur(8px)",
      border: "none",
      color: "#fff",
      padding: "9px 16px",
      borderRadius: "var(--radius-pill)",
      font: "700 0.85rem/1 var(--font-body)",
      cursor: "pointer",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 16,
    style: {
      transform: "rotate(180deg)"
    }
  }), " All journeys"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: t.badgeTone,
    solid: true,
    dot: true
  }, t.badge), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    solid: true
  }, t.region)), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-display-2)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color: "#fff",
      margin: 0,
      maxWidth: "18ch"
    }
  }, t.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 22,
      marginTop: 16,
      color: "rgba(255,255,255,0.92)",
      font: "600 0.95rem/1 var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    icon: "pin",
    text: t.location
  }), /*#__PURE__*/React.createElement(Meta, {
    icon: "clock",
    text: t.days
  }), /*#__PURE__*/React.createElement(Meta, {
    icon: "star",
    text: `${t.rating} · Loved by explorers`
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "clamp(40px,7vh,80px) clamp(20px,5vw,56px)",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) 340px",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-lead)",
      color: "var(--text-body)",
      marginTop: 0
    }
  }, t.blurb), /*#__PURE__*/React.createElement("span", {
    className: "rv-eyebrow"
  }, "The Route"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h2)",
      textTransform: "uppercase",
      color: "var(--text-strong)",
      margin: "8px 0 28px"
    }
  }, "Your road, mile by mile"), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      position: "relative"
    }
  }, t.itinerary.map(([day, route, note], i) => {
    const surprise = note.startsWith("★");
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: 20,
        paddingBottom: i === t.itinerary.length - 1 ? 0 : 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: surprise ? "var(--rv-gradient-primary)" : "var(--rv-blue-50)",
        color: surprise ? "#fff" : "var(--text-brand)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        font: "700 0.8rem/1 var(--font-body)",
        flexShrink: 0
      }
    }, surprise ? /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: 16
    }) : i + 1), i !== t.itinerary.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        width: 2,
        background: "var(--border-default)",
        marginTop: 4
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-overline)",
        letterSpacing: "var(--tracking-overline)",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, day), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "700 1.05rem/1.3 var(--font-body)",
        color: "var(--text-strong)",
        margin: "3px 0 4px"
      }
    }, route), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--type-body)",
        color: surprise ? "var(--rv-teal-700)" : "var(--text-body)"
      }
    }, note)));
  }))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "sticky",
      top: 92,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      border: "1px solid var(--border-subtle)",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "From"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h2)",
      color: "var(--text-strong)",
      margin: "2px 0 2px"
    }
  }, t.price), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      marginBottom: 18
    }
  }, "per car \xB7 all surprises included"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: onBook
  }, "Reserve this voyage"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    block: true,
    style: {
      marginTop: 8
    }
  }, "Talk to a trip designer"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      marginTop: 20,
      paddingTop: 18,
      display: "grid",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Perk, {
    icon: "shield",
    text: "Fully planned & safety-checked"
  }), /*#__PURE__*/React.createElement(Perk, {
    icon: "sparkles",
    text: "Hand-placed surprises en route"
  }), /*#__PURE__*/React.createElement(Perk, {
    icon: "leaf",
    text: "Low-impact, community-first stops"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Maya Rao",
    size: 40,
    ring: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 0.85rem/1.2 var(--font-body)",
      color: "var(--text-strong)"
    }
  }, "Maya, your trip designer"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Usually replies in an hour"))))));
  function Meta({
    icon,
    text
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 17,
      style: {
        color: "var(--rv-teal-200)"
      }
    }), text);
  }
  function Perk({
    icon,
    text
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        font: "var(--type-body-sm)",
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--rv-teal-600)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 18
    })), text);
  }
}
window.TripDetail = TripDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TripDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TripGrid.jsx
try { (() => {
/* Roverland Voyage — featured journeys section with region filter chips. */
function TripGrid({
  onOpen
}) {
  const {
    TripCard,
    Tag
  } = window.RoverlandVoyageDesignSystem_e06e08;
  const Icon = window.Icon;
  const trips = window.RV_DATA.trips;
  const regions = ["All", "Mountain", "Coastal", "Desert", "Forest"];
  const [region, setRegion] = React.useState("All");
  const shown = region === "All" ? trips : trips.filter(t => t.region === region);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)",
      padding: "clamp(56px,9vh,112px) clamp(20px,5vw,56px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 20,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "rv-eyebrow"
  }, "Curated Journeys"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-h1)",
      textTransform: "uppercase",
      color: "var(--text-strong)",
      margin: "8px 0 0"
    }
  }, "Pick your wow")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10
    }
  }, regions.map(r => /*#__PURE__*/React.createElement(Tag, {
    key: r,
    selected: region === r,
    icon: r === "All" ? /*#__PURE__*/React.createElement(Icon, {
      name: "compass",
      size: 15
    }) : null,
    onClick: () => setRegion(r)
  }, r)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 22
    }
  }, shown.map(t => /*#__PURE__*/React.createElement(TripCard, {
    key: t.id,
    image: t.image,
    title: t.title,
    location: t.location,
    days: t.days,
    price: t.price,
    badge: t.badge,
    badgeTone: t.badgeTone,
    rating: t.rating,
    onClick: () => onOpen(t.id),
    style: {
      minHeight: 380
    }
  })))));
}
window.TripGrid = TripGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TripGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* Roverland Voyage website — app shell wiring screens + interactions. */
function App() {
  const [view, setView] = React.useState("home"); // "home" | "detail"
  const [tripId, setTripId] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const scrollRef = React.useRef(null);
  const onScroll = e => setScrolled(e.target.scrollTop > 40);
  const openTrip = id => {
    setTripId(id);
    setView("detail");
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };
  const goHome = () => {
    setView("home");
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };
  const book = () => {
    setToast("You're in. The compass is set — check your inbox for the itinerary.");
    setTimeout(() => setToast(null), 4200);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    onScroll: onScroll,
    style: {
      height: "100vh",
      overflowY: "auto",
      background: "var(--surface-page)",
      scrollBehavior: "smooth"
    }
  }, /*#__PURE__*/React.createElement(SiteNav, {
    onNav: goHome,
    scrolled: scrolled || view === "detail"
  }), view === "home" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onSearch: () => {
      const el = document.getElementById("journeys");
      if (el && scrollRef.current) scrollRef.current.scrollTo({
        top: el.offsetTop - 72,
        behavior: "smooth"
      });
    }
  }), /*#__PURE__*/React.createElement("div", {
    id: "journeys"
  }, /*#__PURE__*/React.createElement(TripGrid, {
    onOpen: openTrip
  })), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(ValuesBand, null), /*#__PURE__*/React.createElement(SiteFooter, null)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TripDetail, {
    tripId: tripId,
    onBack: goHome,
    onBook: book
  }), /*#__PURE__*/React.createElement(SiteFooter, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: "50%",
      bottom: toast ? 28 : -120,
      transform: "translateX(-50%)",
      transition: "bottom var(--dur-slow) var(--ease-out)",
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 20px",
      background: "var(--surface-night)",
      color: "#fff",
      borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-xl)",
      maxWidth: "90vw"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: "50%",
      background: "var(--rv-gradient-primary)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, window.Icon ? /*#__PURE__*/React.createElement(window.Icon, {
    name: "check",
    size: 16,
    stroke: "#fff"
  }) : "✓"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 0.92rem/1.3 var(--font-body)"
    }
  }, toast)));
}
function mountSite() {
  if (window.Icon && window.SiteNav && window.Hero && window.TripGrid && window.HowItWorks && window.ValuesBand && window.SiteFooter && window.RV_DATA && window.RoverlandVoyageDesignSystem_e06e08) {
    ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
  } else {
    setTimeout(mountSite, 30);
  }
}
mountSite();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Roverland Voyage — sample trip data for the website UI kit.
// NOTE: imagery uses royalty-free Unsplash photography as PLACEHOLDERS — swap for
// licensed Roverland route photography in production. (Flagged in the system caveats.)
window.RV_DATA = {
  trips: [{
    id: "spiti",
    title: "Spiti Valley Wonder Drive",
    location: "Himachal Pradesh",
    region: "Mountain",
    days: "6 days · 5 nights",
    price: "₹62,000",
    rating: 4.9,
    badge: "Surprise inside",
    badgeTone: "teal",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1100&q=80&auto=format&fit=crop",
    blurb: "Cold desert, prayer flags and the highest villages on earth — a high-altitude ribbon of wow.",
    itinerary: [["Day 1", "Shimla → Narkanda", "Apple country & a sunset ridge no map will show you."], ["Day 2", "Narkanda → Kalpa", "The Kinnaur Kailash range wakes up in gold."], ["Day 3", "Kalpa → Tabo", "Ancient monastery, a thousand-year-old hush."], ["Day 4", "Tabo → Kaza", "★ A surprise riverside breakfast we won't spoil."], ["Day 5", "Kaza → Chandratal", "Camp beside the Moon Lake under a sky on fire."], ["Day 6", "Chandratal → Manali", "Cross Kunzum La and descend into green."]]
  }, {
    id: "konkan",
    title: "Konkan Coast Cruise",
    location: "Maharashtra & Goa",
    region: "Coastal",
    days: "5 days · 4 nights",
    price: "₹48,000",
    rating: 4.8,
    badge: "Bestseller",
    badgeTone: "brand",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1100&q=80&auto=format&fit=crop",
    blurb: "Palm-lined curves, hidden coves and seafood at golden hour. The Arabian Sea on your right the whole way.",
    itinerary: [["Day 1", "Mumbai → Alibaug", "First toes in the sand by lunch."], ["Day 2", "Alibaug → Ganpatipule", "★ A detour to a beach you'll want to keep secret."], ["Day 3", "Ganpatipule → Tarkarli", "Backwaters, dolphins, and a clear-water swim."], ["Day 4", "Tarkarli → Palolem", "Cross into Goa as the light turns amber."], ["Day 5", "Palolem → Panaji", "Old-town cafés and a slow farewell."]]
  }, {
    id: "rann",
    title: "Rann of Kutch Mirage Run",
    location: "Gujarat",
    region: "Desert",
    days: "4 days · 3 nights",
    price: "₹39,000",
    rating: 4.7,
    badge: "Full moon special",
    badgeTone: "warning",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1100&q=80&auto=format&fit=crop",
    blurb: "A white salt horizon that never ends, and a moon so bright it casts shadows on the desert.",
    itinerary: [["Day 1", "Ahmedabad → Bhuj", "Handicraft villages and a warm Kutchi welcome."], ["Day 2", "Bhuj → White Rann", "★ Moonrise over the salt flats. No words."], ["Day 3", "Kalo Dungar", "The Black Hill — the only high point for miles."], ["Day 4", "Bhuj → Ahmedabad", "One last chai before the road home."]]
  }, {
    id: "meghalaya",
    title: "Meghalaya Cloud Roads",
    location: "North-East India",
    region: "Forest",
    days: "7 days · 6 nights",
    price: "₹71,000",
    rating: 5.0,
    badge: "New route",
    badgeTone: "teal",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1100&q=80&auto=format&fit=crop",
    blurb: "Living-root bridges, the cleanest village on earth, and roads that disappear into cloud.",
    itinerary: [["Day 1", "Guwahati → Shillong", "The Scotland of the East unfolds."], ["Day 2", "Shillong → Cherrapunji", "Waterfalls taller than you can photograph."], ["Day 3", "Double-Decker Trek", "★ A surprise picnic at a turquoise pool."], ["Day 4", "Cherrapunji → Dawki", "Boats that float on glass-clear water."], ["Day 5", "Mawlynnong", "Asia's cleanest village, by design."], ["Day 6", "Krang Suri Falls", "One more impossible blue."], ["Day 7", "Return to Guwahati", "Carry the clouds home with you."]]
  }],
  values: [["Wonder First", "Every journey begins with the pursuit of awe."], ["Curated Freedom", "Freedom without friction — meticulously planned, hassle-free."], ["Surprise & Delight", "Thoughtful surprises woven into every mile."], ["Soulful Connections", "More than destinations — we seek stories."]],
  steps: [["01", "Pick your wow", "Choose a curated route — or tell us the feeling you're chasing."], ["02", "We craft the map", "A meticulous, surprise-laced itinerary lands in your inbox."], ["03", "Drive into it", "You take the wheel. We handle everything else."]]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.TripCard = __ds_scope.TripCard;

})();
