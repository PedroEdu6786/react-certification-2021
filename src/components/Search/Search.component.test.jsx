import React from 'react';
import { MemoryRouter } from 'react-router';
import { fireEvent, queryByTestId, render } from '@testing-library/react';

import Search from './index';
import GlobalStateProvider from '../../store/GlobalStateProvider';

const build = () => {
  const { container } = render(
    <GlobalStateProvider>
      <Search />
    </GlobalStateProvider>,
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
