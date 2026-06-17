import * as React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL; falls back to initials when absent. */
  src?: string | null;
  /** Full name — used for initials and alt text. */
  name?: string;
  /** Pixel diameter. @default 44 */
  size?: number;
  /** Show the aurora gradient ring (featured / "wow"). @default false */
  ring?: boolean;
}

/** Round avatar with image or initials, optional gradient ring. */
export declare function Avatar(props: AvatarProps): React.JSX.Element;
