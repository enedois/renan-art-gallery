import { render, screen } from '@testing-library/react';
import App from './App';
import Gallery from './Gallery';
import Store from './Store';

test('test1', () => {
  render(<Gallery />);
  const linkElement = screen.getByText(/Gallery/i);
  expect(linkElement).toBeInTheDocument();
});

test('test2', () => {
  render(<Store />);
  const linkElement = screen.getByText(/Store/i);
  expect(linkElement).toBeInTheDocument();
});

test('test3', () => {
  render(<Store />);
  const linkElement = screen.getByText(/Store/i);
  expect(linkElement).toBeInTheDocument();
});