import { Dispatch, SetStateAction } from 'react';

export type Errors = {
  [error: string]: boolean;
};

type SetErrors = Dispatch<SetStateAction<Errors>>

export const validateNameInput = (textValue: string, setErrors: SetErrors) => {
  if (!textValue) setErrors((prevErrors) => ({ ...prevErrors, textValue: true }));
};

export const validatePasswordInput = (passwordValue: string, setErrors: SetErrors) => {
  if (!passwordValue || passwordValue.length < 8) setErrors((prevErrors) => ({ ...prevErrors, passwordValue: true }));
};
