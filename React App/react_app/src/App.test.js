import { render, screen } from '@testing-library/react';
import NumberManipulator from './App.js';

test('renders learn react link', () => {
  render(<NumberManipulator />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
