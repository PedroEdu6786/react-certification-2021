import React from 'react';
import { render, screen } from '@testing-library/react';

import HomePage from './index';

describe('Home page testing', () => {
  beforeAll(() => {
    render(<HomePage />);
  });

  test('Should contain header and preview videos', () => {
    const headerElement = screen.queryByTestId(/header/i);
    const previewListElement = screen.queryByTestId(/preview-list/i);
    expect(headerElement).toBeInTheDocument();
    expect(previewListElement).toBeInTheDocument();
  });
});
