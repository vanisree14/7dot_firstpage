import * as React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Selected/active state — fills with teal tint. @default false */
  selected?: boolean;
  /** Optional leading icon node. */
  icon?: React.ReactNode;
  /** Click handler — makes the chip interactive. */
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

/** Filter / category chip. */
export declare function Tag(props: TagProps): React.JSX.Element;
