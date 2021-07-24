import React from 'react';
import { render, screen } from '@testing-library/react';

import HomePage from './index';

describe('Home page testing', () => {
  beforeAll(() => {
    render(<HomePage />);
  });

  test('Should render the layout component with the header component', () => {
    const headerElement = screen.queryByTestId(/header/i);

    expect(headerElement).toBeInTheDocument();
  });
});
