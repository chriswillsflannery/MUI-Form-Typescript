import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders learn react link', () => {
    render(<App />);
    const title = screen.getByText('ConnectsYa Form');
    expect(title).toBeInTheDocument();
  });


  // The following tests could alternatively be accomplished with end-to-end
  // solution like Cypress or webdriver.io

  test('with invalid Name input displays error', () => {
    render(<App />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(screen.queryByText('please enter a name')).toBe(null);
    fireEvent.click(submitButton);
    expect(screen.getByText('please enter a name')).toBeInTheDocument();
  });

  test('with valid Name input no error displayed', () => {
    render(<App />);
    const input = screen.getByLabelText('Name');
    fireEvent.change(input, {target: {value: 'myname'}})
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
    expect(screen.queryByText('please enter a name')).toBe(null);
  });

  test('with invalid Password input displays error', () => {
    render(<App />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(screen.queryByText('password must be 8 or more chars')).toBe(null);
    fireEvent.click(submitButton);
    expect(screen.getByText('password must be 8 or more chars')).toBeInTheDocument();
  });

  test('with valid Password input no error displayed', () => {
    render(<App />);
    const input = screen.getByLabelText('Password');
    fireEvent.change(input, {target: {value: 'validPassword'}})
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
    expect(screen.queryByText('password must be 8 or more chars')).toBe(null);
  });

  test('reset button clears all fields', () => {
    render(<App />);
    const nameInput = screen.getByLabelText('Name');
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(nameInput, {target: {value: 'validName'}})
    fireEvent.change(passwordInput, {target: {value: 'validPassword'}});
    expect(screen.getByDisplayValue('validName')).toBeInTheDocument();
    expect(screen.getByDisplayValue('validPassword')).toBeInTheDocument();
    const resetButton = screen.getByRole('button', { name: 'Reset' });
    fireEvent.click(resetButton);
    expect(screen.queryByDisplayValue('validName')).toBe(null);
    expect(screen.queryByDisplayValue('validPassword')).toBe(null);
  });
});
