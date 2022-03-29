import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import User from './User.js';

test('renders header', () => {
  render(<User />, {wrapper: MemoryRouter});
  
  const updateStatusButton = screen.getByRole('button', {
      name: 'Change status'
  });
  const editUserButton = screen.getByRole('button', {
      name: 'Edit user'
  });


  expect(updateStatusButton).toBeInTheDocument();
  expect(editUserButton).toBeInTheDocument();
});