import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders App component', () => {
  render(
    <MemoryRouter initialEntries={['/room/*']}>
      <App />
    </MemoryRouter>
  );

  // Assert that the Home page is rendered
  const homeElement = screen.getByRole('heading', { name: /WORDOPIA/i });
  expect(homeElement).toBeInTheDocument();

  // Assert that the Lobby page is not rendered
  const lobbyElement = screen.queryByRole('heading', { name: /WORDOPIA/i });
  expect(lobbyElement).toBeInTheDocument();
});
