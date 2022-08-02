import { render, screen } from "@testing-library/react";

import {
  Password,
} from "./Password";

describe('Password', () => {
  const setPasswordValue = jest.fn();
  const setErrors = jest.fn();

  test('render input', () => {
    render(<Password
      passwordValue=''
      setPasswordValue={setPasswordValue}
      errors={{}}
      setErrors={setErrors}
    />);
    const input = screen.getByLabelText('Password');
    expect(input).toBeInTheDocument()
  });
});