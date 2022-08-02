import { Dispatch, SetStateAction } from 'react';
import { TextField } from "@mui/material";

interface BirthdayProps {
  birthdayValue: string;
  setBirthdayValue: Dispatch<SetStateAction<string>>;
}

export const Birthday: React.FunctionComponent<BirthdayProps> = ({
  birthdayValue,
  setBirthdayValue
}) => (
  <TextField
    onChange={(e: any) => setBirthdayValue(e.target.value)}
    label="Birthday"
    type="date"
    defaultValue={birthdayValue || "1994-03-23"}
    sx={{ marginBottom: '16px' }}
  />
);