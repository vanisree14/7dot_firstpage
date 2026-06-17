import * as React from "react";

/**
 * Official Roverland Voyage logo lockups (image-based).
 * @startingPoint section="Brand" subtitle="Logo lockups — horizontal, vertical, symbol" viewport="700x200"
 */
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Lockup. @default "horizontal" */
  layout?: "horizontal" | "vertical" | "symbol";
  /** Color treatment. @default "gradient" */
  tone?: "gradient" | "white" | "black" | "white-on-color";
  /** Include the "Into the Wow" tagline (ignored for symbol). @default true */
  tagline?: boolean;
  /** Render height in px. @default 48 */
  height?: number;
  /** Folder holding the logo PNGs. @default "assets/logos" */
  basePath?: string;
  alt?: string;
}

/** Official Roverland Voyage logo lockups (image-based). */
export declare function Logo(props: LogoProps): React.JSX.Element;
