import { Dispatch, SetStateAction } from 'react';
import { TextField } from "@mui/material";
import { Errors } from '../../utilities/formValidation';

interface NameProps {
  textValue: string;
  setTextValue: Dispatch<SetStateAction<string>>;
  errors: Errors;
  setErrors: Dispatch<SetStateAction<Errors>>;
}

export const Name: React.FunctionComponent<NameProps> = ({
  textValue,
  setTextValue,
  errors,
  setErrors,
}) => {
  const handleChange = (e: any) => {
    setErrors((prevErrors: Errors) => {
      const newErrors = { ...prevErrors };
      delete newErrors.textValue;
      return newErrors;
    });
    setTextValue(e.target.value);
  }

  return (
    <TextField
      className="form--name"
      onChange={handleChange}
      value={textValue}
      label="Name"
      error={errors.textValue}
      helperText={errors.textValue && 'please enter a name'}
      sx={{ marginBottom: '16px' }}
    />
  );
};