import { Dispatch, SetStateAction } from 'react';
import { TextField, SxProps } from "@mui/material";
import { Errors } from '../../utilities/formValidation';

interface NameProps {
  textValue: string;
  setTextValue: Dispatch<SetStateAction<string>>;
  errors: Errors;
  setErrors: Dispatch<SetStateAction<Errors>>;
  sx: SxProps;
}

export const Name: React.FunctionComponent<NameProps> = ({
  textValue,
  setTextValue,
  errors,
  setErrors,
  sx,
}) => {
  const handleChange = (e: any) => {
    setErrors(({ textValue, ...prevErrors}: Errors) => prevErrors);
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
      sx={sx}
    />
  );
};