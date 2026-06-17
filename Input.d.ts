import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Optional leading icon node. */
  icon?: React.ReactNode;
  /** Error state — red border. @default false */
  invalid?: boolean;
}

/** Text input with soft surface and teal focus ring. */
export declare function Input(props: InputProps): React.JSX.Element;
