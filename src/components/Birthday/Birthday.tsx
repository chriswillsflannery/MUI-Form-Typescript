import { Dispatch, SetStateAction } from 'react';
import { SxProps, TextField } from "@mui/material";

interface BirthdayProps {
  birthdayValue: string;
  setBirthdayValue: Dispatch<SetStateAction<string>>;
  sx: SxProps;
}

export const Birthday: React.FunctionComponent<BirthdayProps> = ({
  birthdayValue,
  setBirthdayValue,
  sx,
}) => (
  <TextField
    onChange={(e: any) => setBirthdayValue(e.target.value)}
    label="Birthday"
    type="date"
    defaultValue={birthdayValue || "1994-03-23"}
    sx={sx}
  />
);