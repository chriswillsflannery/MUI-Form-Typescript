import { Dispatch, SetStateAction } from 'react';
import { Checkbox, FormControl, FormLabel, FormControlLabel, FormGroup, SxProps } from "@mui/material";

import { TOPPINGS } from "../../constants/pizzatoppings";
import { Toppings } from '../../types/pizzatoppings';

interface PizzaToppingsProps {
  toppings: Toppings;
  setToppings: Dispatch<SetStateAction<Toppings>>;
  sx: SxProps;
}

export const PizzaToppings: React.FunctionComponent<PizzaToppingsProps> = ({
  toppings,
  setToppings,
  sx,
}) => {
  const handleCheckTopping = (topping: string) => {
    if (topping in toppings) {
      setToppings((prevToppings) => {
        const newToppings = { ...prevToppings };
        delete newToppings[topping];
        return newToppings;
      });
    } else {
      setToppings((prevToppings) => ({ ...prevToppings, [topping]: true }))
    }
  }

  return (
    <FormControl>
      <FormLabel id="demo-check-boxes-group-label">Pizza Toppings</FormLabel>
      <FormGroup sx={sx} aria-labelledby="demo-check-boxes-group-label" >
        {TOPPINGS.map((topping, idx) => (
          <FormControlLabel
            key={idx}
            label={topping}
            control={
              <Checkbox
                value={topping}
                checked={topping in toppings}
                onChange={() => handleCheckTopping(topping)}
              />
            }
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}