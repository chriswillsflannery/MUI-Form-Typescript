import { validateNameInput, validatePasswordInput } from "./formValidation"; 

describe('validation utils', () => {
  test('with valid name', () => {
    const textValue = 'yourname';
    const setErrors = jest.fn();

    validateNameInput(textValue, setErrors);
    expect(setErrors).toBeCalledTimes(0);
  });

  test('with invalid name', () => {
    const textValue = '';
    const setErrors = jest.fn();

    validateNameInput(textValue, setErrors);
    expect(setErrors).toHaveBeenCalled();
  });

  test('with valid password', () => {
    const passwordvalue = 'hashedpassword';
    const setErrors = jest.fn();

    validateNameInput(passwordvalue, setErrors);
    expect(setErrors).toBeCalledTimes(0);
  });

  test('with invalid password - empty', () => {
    const passwordValue = '';
    const setErrors = jest.fn();

    validatePasswordInput(passwordValue, setErrors);
    expect(setErrors).toHaveBeenCalled();
  });

  test('with invalid password - too short', () => {
    const passwordValue = '';
    const setErrors = jest.fn();

    validatePasswordInput(passwordValue, setErrors);
    expect(setErrors).toHaveBeenCalled();
  });
});