import * as React from "react";

/**
 * Small uppercase status/label pill.
 * @startingPoint section="Display" subtitle="Status & label badges — tonal, solid, gradient" viewport="700x120"
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. @default "brand" */
  tone?: "brand" | "teal" | "neutral" | "success" | "warning" | "danger";
  /** Solid fill instead of soft tint. @default false */
  solid?: boolean;
  /** Brand gradient fill (overrides tone). @default false */
  gradient?: boolean;
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

/** Small uppercase status/label pill. */
export declare function Badge(props: BadgeProps): React.JSX.Element;
