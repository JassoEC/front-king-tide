import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface Props<T extends Object> {
  label: string;
  name: keyof T;
  onChange: (e: ChangeEvent<{ name?: string; value: unknown }>) => void;
  value: unknown;
}

export const UserFormItem = <T extends Object>({
  label,
  name,
  onChange,
  value,
}: Props<T>) => {
  return (
    <TextField
      variant="standard"
      label={label}
      name={`${name}`}
      fullWidth
      onChange={onChange}
      value={value}
    />
  );
};
