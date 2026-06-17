import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lift + raise shadow on hover. @default false */
  interactive?: boolean;
  /** CSS padding value. @default var(--space-5) */
  padding?: string;
  children?: React.ReactNode;
}

/** Soft white surface container with large radius and cool shadow. */
export declare function Card(props: CardProps): React.JSX.Element;
