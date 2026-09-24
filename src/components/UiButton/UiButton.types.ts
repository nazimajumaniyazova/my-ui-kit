export type ButtonType = "primary" | "secondary" | "ghost" | "danger";

export type ButtoSize = "sm" | "md" | "lg";

export interface ButtonProps {
  variant?: ButtonType;
  size?: ButtoSize;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
}
