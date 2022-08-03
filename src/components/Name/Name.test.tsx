import { render, screen } from "@testing-library/react";

import {
  Name,
} from "./Name";

describe('Name', () => {
  const setTextValue = jest.fn();
  const setErrors = jest.fn();

  test('render input', () => {
    render(<Name
      textValue=''
      setTextValue={setTextValue}
      errors={{}}
      setErrors={setErrors}
      sx={{}}
    />);
    const input = screen.getByLabelText('Name');
    expect(input).toBeInTheDocument()
  });
});