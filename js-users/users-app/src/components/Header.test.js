import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header.js';

test('renders header', () => {
  render(<Header />, {wrapper: MemoryRouter});
  
  const titleElement = screen.getByText('Users');
  const addUserElement = screen.getByText('Add new user');
  const seeUsersElement = screen.getByText('See all users');

  expect(titleElement).toBeInTheDocument();
  expect(addUserElement).toBeInTheDocument();
  expect(seeUsersElement).toBeInTheDocument();
});