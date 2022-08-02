import { render, screen } from "@testing-library/react";

import {
  PizzaToppings,
} from "./PizzaToppings";

describe('PizzaToppings', () => {
  const setToppings = jest.fn();

  test('render input', () => {
    render(<PizzaToppings
      toppings={{}}
      setToppings={setToppings}
    />);
    const input = screen.getByLabelText('Pizza Toppings');
    expect(input).toBeInTheDocument()
  });
});