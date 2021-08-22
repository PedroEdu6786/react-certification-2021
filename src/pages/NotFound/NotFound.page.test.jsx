import React from 'react';
import { MemoryRouter } from 'react-router';
import { cleanup, queryByText, render } from '@testing-library/react';

import NotFound from './NotFound.page';

const build = () => {
  const { container } = render(<NotFound />, { wrapper: MemoryRouter });

  return {
    container,

    /** Queries for single elements */
    button: () => queryByText(container, /Navigate to Home/i),
    notFound: () => queryByText(container, /404/i),
    notFoundDetails: () => queryByText(container, /Page not found/i),
  };
};

describe('Not found page', () => {
  afterEach(cleanup);

  it('renders', () => {
    build();
  });

  it('contains a 404 title', () => {
    const { notFound } = build();
    expect(notFound()).toBeInTheDocument();
  });

  it('contains not found details', () => {
    const { notFoundDetails } = build();
    expect(notFoundDetails()).toBeInTheDocument();
  });

  it('contains navigation to home', () => {
    const { button } = build();
    expect(button()).toBeInTheDocument();
  });
});
