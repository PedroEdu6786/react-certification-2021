import React from 'react';
import { queryByTestId, render } from '@testing-library/react';

import HomePage from './index';

const build = () => {
  const { container } = render(<HomePage />);

  return {
    container,

    /** Queries for single elements */
    header: () => queryByTestId(container, /header/i),
    previewVideos: () => queryByTestId(container, /preview-list/i),

    /** Queries for multiple elements */
  };
};

describe('Home page testing', () => {
  it('renders', () => {
    build();
  });

  it('contains header and preview videos', () => {
    const { header, previewVideos } = build();
    expect(header()).toBeDefined();
    expect(previewVideos()).toBeDefined();
  });
});
