import * as React from "react";

export interface FieldProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Field label (uppercase caption). */
  label?: React.ReactNode;
  /** Helper text shown below when no error. */
  hint?: React.ReactNode;
  /** Error text — replaces hint, turns red. */
  error?: React.ReactNode;
  /** Show required asterisk. @default false */
  required?: boolean;
  children?: React.ReactNode;
}

/** Labelled wrapper for a form control with hint/error. */
export declare function Field(props: FieldProps): React.JSX.Element;
