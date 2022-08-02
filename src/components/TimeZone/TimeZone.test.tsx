import { render, screen } from "@testing-library/react";

import {
  TimeZone,
} from "./TimeZone";

describe('TimeZone', () => {
  const setTimezone = jest.fn();

  test('render input', () => {
    render(<TimeZone
      timezone=""
      setTimezone={setTimezone}
    />);
    const input = screen.getByText('Time Zone');
    expect(input).toBeInTheDocument()
  });
});