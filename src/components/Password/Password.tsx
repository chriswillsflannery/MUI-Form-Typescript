import { Dispatch, SetStateAction } from 'react';
import { SxProps, TextField } from "@mui/material";
import { Errors } from '../../utilities/formValidation';

interface PasswordProps {
  passwordValue: string;
  setPasswordValue: Dispatch<SetStateAction<string>>;
  errors: Errors;
  setErrors: Dispatch<SetStateAction<Errors>>;
  sx: SxProps;
}

export const Password: React.FunctionComponent<PasswordProps> = ({
  passwordValue,
  setPasswordValue,
  errors,
  setErrors,
  sx,
}) => {

  const handleChange = (e: any) => {
    setErrors(({ passwordValue, ...prevErrors}: Errors) => prevErrors);
    setPasswordValue(e.target.value);
  }

  return (
    <TextField
      className="form--password"
      onChange={handleChange}
      type="password"
      value={passwordValue}
      label="Password"
      error={errors.passwordValue}
      helperText={errors.passwordValue && 'password must be 8 or more chars'}
      sx={sx}
    />
  );
};