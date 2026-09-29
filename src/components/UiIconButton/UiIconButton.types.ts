import type { ButtonProps } from "../UiButton";

export interface IconButtonProps extends Omit<ButtonProps, "loadingText"> {
  label: string;
}
