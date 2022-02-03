import { Button } from "@mui/material";

type ButtonColor =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning"
  | undefined;

interface Props {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  color?: ButtonColor;
  type?: "button" | "submit";
}
export const ActionButton = (props: Props) => {
  const {
    label,
    onClick,
    disabled,
    fullWidth,
    color = "inherit",
    type = "button",
  } = props;
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      color={color}
      type={type}
    >
      {label}
    </Button>
  );
};
