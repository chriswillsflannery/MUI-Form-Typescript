import { render, screen } from "@testing-library/react";

import {
  Birthday,
} from "./Birthday";

describe('Birthday', () => {
  const setBirthdayValue = jest.fn();

  test('render input', () => {
    render(<Birthday
      birthdayValue=''
      setBirthdayValue={setBirthdayValue}
    />);
    const input = screen.getByLabelText('Birthday');
    expect(input).toBeInTheDocument()
  });
});