import { Dispatch, SetStateAction } from 'react';
import { TextField } from "@mui/material";
import { Errors } from '../../utilities/formValidation';

interface PasswordProps {
  passwordValue: string;
  setPasswordValue: Dispatch<SetStateAction<string>>;
  errors: Errors;
  setErrors: Dispatch<SetStateAction<Errors>>;
}

export const Password: React.FunctionComponent<PasswordProps> = ({
  passwordValue,
  setPasswordValue,
  errors,
  setErrors,
}) => {

  const handleChange = (e: any) => {
    setErrors((prevErrors: Errors) => {
      const newErrors = { ...prevErrors };
      delete newErrors.passwordValue;
      return newErrors;
    });
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
      sx={{ marginBottom: '16px' }}
    />
  );
};