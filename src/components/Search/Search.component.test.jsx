import React from 'react';
import { render, fireEvent, queryByRole } from '@testing-library/react';

import Search from './index';

const build = () => {
  const { container } = render(<Search />);

  return {
    container,

    /** Queries for single elements */
    input: () => queryByRole(container, 'input', { name: 'input' }),
  };
};

describe('Search', () => {
  it('renders', () => {
    build();
  });

  it('searches a video from api', async () => {
    const { input } = build();
    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.submit(input);
  });

  it('throws exception when exceeds timeout', async () => {
    const { input } = build();
    fireEvent.change(input, { target: { value: 'wizeline' } });
    fireEvent.submit(input);
  });
});
