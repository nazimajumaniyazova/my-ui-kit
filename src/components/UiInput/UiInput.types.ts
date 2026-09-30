export type InputType = "text" | "password" | "email";

export interface InputProps {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  type: InputType;
  required?: boolean;
  hint?: boolean;
  hintText?: string;
  errorMessage?: boolean;
  errorMessageText?: string;
}
