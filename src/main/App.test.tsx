// src/__tests__/App.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
test('renders hello message', () => {
  render(<App />);
  const helloElement = screen.getByText(/Hello/i);

  expect(helloElement).toBeTruthy();
});
