import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header.component';

describe('Home page testing', () => {
  beforeAll(() => {
    render(<Header />);
  });

  test('Should open drawer on button click', () => {
    const drawerBtn = screen.queryAllByRole('button')[0];

    fireEvent.click(drawerBtn);
    const expectedOverlay = screen.queryByTestId(/overlay/i);

    expect(expectedOverlay).toBeInTheDocument();
  });
});
