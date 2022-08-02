import { useState } from 'react';
import {
  Typography,
  Paper,
  Button,
} from '@mui/material';

import { Toppings } from './types/pizzatoppings';
import { TechPref } from './types/techpref';
import { mockServer } from './utilities/mockserver';
import { Errors, validateNameInput, validatePasswordInput } from './utilities/formValidation';

import {
  Name,
  Password,
  Birthday,
  TimeZone,
  TechPreference,
  PizzaToppings,
} from './components/index';

import './App.css';

function App() {
  const [textValue, setTextValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [birthdayValue, setBirthdayValue] = useState<string>('');
  const [timezone, setTimezone] = useState<string>('');
  const [techPreference, setTechPreference] = useState<TechPref>('front end');
  const [toppings, setToppings] = useState<Toppings>({});
  const [errors, setErrors] = useState<Errors>({});

  const validateFormInputs = () => {
    validateNameInput(textValue, setErrors);
    validatePasswordInput(passwordValue, setErrors);
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    validateFormInputs();
    // cleanSensitiveInputs(); protect against XSS injection, for example
    if (Object.keys(errors).length === 0) {
      mockServer({
        name: textValue,
        password: passwordValue,
        birthday: birthdayValue,
        preferences: {
          techPref: techPreference,
          pizzaToppings: toppings,
          timezone,
        }
      });
    }
  };

  const handleReset = () => {
    // displayConfirmationModal() -- "are you sure?"
    setTextValue('');
    setPasswordValue('');
    setBirthdayValue('');
    setTimezone('');
    setTechPreference('front end');
    setToppings({});
    setErrors({});
  };

  return (
    <main className="App">
      <Paper className="formContainer">
        <Typography sx={{ marginBottom: '16px' }}>ConnectsYa Form</Typography>
        <form onSubmit={handleOnSubmit}>
          <Name
            textValue={textValue}
            setTextValue={setTextValue}
            errors={errors}
            setErrors={setErrors}
          />
          <Password
            passwordValue={passwordValue}
            setPasswordValue={setPasswordValue}
            errors={errors}
            setErrors={setErrors}
          />
          <Birthday birthdayValue={birthdayValue} setBirthdayValue={setBirthdayValue} />
          <TimeZone timezone={timezone} setTimezone={setTimezone} />
          <TechPreference
            techPreference={techPreference}
            setTechPreference={setTechPreference} />
          <PizzaToppings
            toppings={toppings}
            setToppings={setToppings}
          />
          <Button type="submit" variant="outlined">Submit</Button>
          <Button onClick={handleReset}>Reset</Button>
        </form>
      </Paper>
    </main>
  );
}

export default App;
