import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Summer of Letters/i);
  expect(linkElement).toBeInTheDocument();
});
