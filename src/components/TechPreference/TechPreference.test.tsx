import { render, screen } from "@testing-library/react";

import {
  TechPreference,
} from "./TechPreference";

describe('TechPreference', () => {
  const setTechPreference = jest.fn();

  test('render input', () => {
    render(<TechPreference
      techPreference=""
      setTechPreference={setTechPreference}
      sx={{}}
    />);
    const input = screen.getByLabelText('Tech Preference');
    expect(input).toBeInTheDocument()
  });
});