import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  SxProps,
} from "@mui/material";
import { Dispatch, SetStateAction } from 'react';

import { TechPref } from '../../types/techpref';

interface TechPreferencesProps {
  techPreference: string;
  setTechPreference: Dispatch<SetStateAction<TechPref>>;
  sx: SxProps;
}

export const TechPreference: React.FunctionComponent<TechPreferencesProps> = ({
  techPreference,
  setTechPreference,
  sx,
}) => (
  <FormControl
    sx={sx}
  >
    <FormLabel id="demo-radio-buttons-group-label">Tech Preference</FormLabel>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
      value={techPreference}
      onChange={(e: any) => setTechPreference(e.target.value)}
    >
      <FormControlLabel value="front end" control={<Radio />} label="Front End" />
      <FormControlLabel value="back end" control={<Radio />} label="Back End" />
      <FormControlLabel value="both" control={<Radio />} label="Both" />
    </RadioGroup>
  </FormControl>
);