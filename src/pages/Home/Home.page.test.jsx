import React from 'react';
import { cleanup, queryByTestId, render } from '@testing-library/react';

import HomePage from './index';
import VideosProvider from '../../providers/VideosProvider';

const build = () => {
  const { container } = render(<HomePage />, { wrapper: VideosProvider });

  return {
    container,

    /** Queries for single elements */
    header: () => queryByTestId(container, /header/i),
    previewVideos: () => queryByTestId(container, /preview-list/i),

    /** Queries for multiple elements */
  };
};

describe('Home page testing', () => {
  afterEach(() => cleanup());

  it('renders', () => {
    build();
  });

  // it('contains header and preview videos', () => {
  //   const { header, previewVideos } = build();
  //   expect(header()).toBeDefined();
  //   expect(previewVideos()).toBeDefined();
  // });
});
