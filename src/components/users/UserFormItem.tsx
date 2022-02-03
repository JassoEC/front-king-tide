import { FormControl, TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface Props<T extends Object> {
  label: string;
  name: keyof T;
  onChange: (e: ChangeEvent<{ name?: string; value: unknown }>) => void;
  value: unknown;
  type?: React.HTMLInputTypeAttribute | undefined;
  shrink?: boolean;
  required?: boolean;
}

export const UserFormItem = <T extends Object>({
  label,
  name,
  onChange,
  value,
  type = "text",
  shrink = true,
  required = true,
}: Props<T>) => {
  return (
    <FormControl fullWidth>
      <TextField
        variant="standard"
        label={label}
        name={`${name}`}
        fullWidth
        onChange={onChange}
        value={value}
        type={type}
        InputLabelProps={{
          shrink: shrink,
        }}
        required={required}
      />
    </FormControl>
  );
};
