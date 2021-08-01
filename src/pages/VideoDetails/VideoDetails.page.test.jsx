import React from 'react';
import { findAllByRole, findByRole, queryByRole, render } from '@testing-library/react';

import VideoDetails from './index';
import { YOUTUBE_MAX_RESULTS } from '../../utils/constants';

const build = () => {
  const { container } = render(<VideoDetails />);

  return {
    container,

    /** Queries for single elements */
    asyncVideo: () => findByRole(container, 'img', { name: 'video name' }),
    title: () => queryByRole(container, 'h1', { name: 'video title' }),
    image: () => queryByRole(container, 'img', { name: 'video image' }),

    /** Queries for multiple elements */
    videosList: () => findAllByRole(container, 'link'),
  };
};

describe('Home page testing', () => {
  it('renders', () => {
    build();
  });

  it('contains a title', () => {
    const { title } = build();
    expect(title()).toBeDefined();
  });

  it('contains an image', () => {
    const { image } = build();
    expect(image()).toBeDefined();
  });

  it('displays an asynchronous video', async () => {
    const { asyncVideo } = build();
    expect(await asyncVideo()).toBeDefined();
  });

  it('renders a list of videos', async () => {
    const { videosList } = build();

    expect(await videosList()).toHaveLength(YOUTUBE_MAX_RESULTS);
  });
});
