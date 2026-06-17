import * as React from "react";

/**
 * Pill-shaped action button props.
 * @startingPoint section="Buttons" subtitle="Pill button — gradient primary, accent, secondary, ghost" viewport="700x140"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "accent" | "secondary" | "ghost" | "night";
  /** Size. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Stretch to full container width. @default false */
  block?: boolean;
  disabled?: boolean;
  /** Element/icon rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Element/icon rendered after the label. */
  iconRight?: React.ReactNode;
  /** Render as a different element (e.g. "a"). @default "button" */
  as?: any;
  children?: React.ReactNode;
}

/**
 * Pill-shaped action button in the Roverland Voyage style. Primary carries the
 * blue→teal brand gradient; accent is solid Explorer Teal with a brand glow.
 */
export declare function Button(props: ButtonProps): React.JSX.Element;
