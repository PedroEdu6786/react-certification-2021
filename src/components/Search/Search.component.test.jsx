import React from 'react';
import { MemoryRouter } from 'react-router';
import { fireEvent, queryByTestId, render } from '@testing-library/react';

import Search from './index';
import VideosProvider from '../../providers/VideosProvider';

const build = () => {
  const { container } = render(
    <VideosProvider>
      <Search />
    </VideosProvider>,
    { wrapper: MemoryRouter }
  );

  return {
    container,

    /** Queries for single elements */
    input: () => queryByTestId(container, /input-search/i),

    /** Queries for multiple elements */
  };
};

describe('Search component', () => {
  it('renders', () => {
    build();
  });

  it('submits form', () => {
    const { input } = build();

    fireEvent.submit(input());
  });
});
