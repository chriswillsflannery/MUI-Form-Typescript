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
    const submitButton = screen.getByTestId('submitButton');
    fireEvent.click(submitButton);
    const error = screen.getByText('please enter a name');
    expect(error).toBeInTheDocument();
  });

  test('with valid Name input no error displayed', () => {
    render(<App />);
    const input = screen.getByLabelText('Name');
    fireEvent.change(input, {target: {value: 'myname'}})
    const submitButton = screen.getByTestId('submitButton');
    fireEvent.click(submitButton);
    const error = screen.queryByText('please enter a name');
    expect(error).toBe(null);
  });

  test('with invalid Password input displays error', () => {

  });

  test('with valid Password input no error displayed', () => {

  });
});
