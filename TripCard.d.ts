import * as React from "react";

/**
 * Signature Roverland trip card props.
 * @startingPoint section="Surfaces" subtitle="Cinematic trip card with image, badge & price" viewport="700x420"
 */
export interface TripCardProps {
  /** Background image URL (cinematic landscape). */
  image: string;
  /** Trip name. */
  title: string;
  /** Region / location label. */
  location?: string;
  /** Duration text, e.g. "4 days · 3 nights". */
  days?: string;
  /** Price text, e.g. "₹38,000". */
  price?: string;
  /** Floating corner badge label. */
  badge?: string;
  /** Badge tone. @default "teal" */
  badgeTone?: "brand" | "teal" | "neutral" | "success" | "warning" | "danger";
  /** Star rating, e.g. 4.9. */
  rating?: number | null;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/**
 * Signature Roverland trip card — full-bleed image, night protection gradient,
 * floating badge & rating, location/title/price.
 */
export declare function TripCard(props: TripCardProps): React.JSX.Element;
