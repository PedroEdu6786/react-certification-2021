import React from 'react';
import { MemoryRouter } from 'react-router';
import { findAllByRole, queryByRole, render } from '@testing-library/react';

import VideoPreview from './VideoPreview.component';
import videos from '../../mocks/videos.json';

const build = ({ buildVideos }) => {
  const { container } = render(<VideoPreview {...buildVideos} />, {
    wrapper: MemoryRouter,
  });

  return {
    container,

    /** Queries for single elements */
    title: () => queryByRole(container, 'h1', { name: 'video title' }),
    image: () => queryByRole(container, 'img', { name: 'video image' }),

    /** Queries for multiple elements */
    videosList: () => findAllByRole(container, 'link'),
  };
};

describe('Video preview component', () => {
  it('renders', () => {
    build(videos);
  });

  it('contains a title', () => {
    const { title } = build(videos);
    expect(title()).toBeDefined();
  });

  it('contains an image', () => {
    const { image } = build(videos);
    expect(image()).toBeDefined();
  });
});
