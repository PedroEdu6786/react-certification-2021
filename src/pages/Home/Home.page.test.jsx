import React from 'react';
import { findAllByRole, findByRole, render, screen } from '@testing-library/react';

import HomePage from './index';

const build = () => {
  const { container } = render(<HomePage />);

  return {
    container,

    /** Queries for single elements */
    asyncVideo: () => findByRole(container, 'img', { name: 'video name' }),

    /** Queries for multiple elements */
    videosList: () => findAllByRole(container, 'link'),
  };
};

const VIDEO_PAGE_LENGTH = 10;

describe('Home page testing', () => {
  beforeAll(() => {
    render(<HomePage />);
  });

  it('renders', () => {
    build();
  });

  it('contains header and preview videos', () => {
    const headerElement = screen.queryByTestId(/header/i);
    const previewListElement = screen.queryByTestId(/preview-list/i);
    expect(headerElement).toBeInTheDocument();
    expect(previewListElement).toBeInTheDocument();
  });

  it('displays an asynchronous video', async () => {
    const { asyncVideo } = build();
    expect(await asyncVideo()).toBeDefined();
  });

  it('renders a list of videos', async () => {
    const { videosList } = build();

    expect(await videosList()).toHaveLength(VIDEO_PAGE_LENGTH);
  });
});
