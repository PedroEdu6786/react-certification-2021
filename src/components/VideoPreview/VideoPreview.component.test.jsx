import React from 'react';
import { MemoryRouter } from 'react-router';
import { fireEvent, queryByRole, render } from '@testing-library/react';

import VideoPreview from './VideoPreview.component';
import videos from '../../mocks/videos.json';

const build = (video, isFavoriteVideo = false, globalDispatch = null) => {
  const { container } = render(
    <VideoPreview
      videoData={video}
      isFavoriteVideo={isFavoriteVideo}
      globalDispatch={globalDispatch}
      isAuthenticated
    />,
    {
      wrapper: MemoryRouter,
    }
  );

  return {
    container,

    /** Queries for single elements */
    title: () => queryByRole(container, 'h1', { name: 'video title' }),
    image: () => queryByRole(container, 'img', { name: 'video image' }),
    addFavorite: () => queryByRole(container, 'button', { name: /Add to favorites/i }),
    removeFavorite: () =>
      queryByRole(container, 'button', { name: /Remove from favorites/i }),
    videoCard: () => queryByRole(container, 'article'),
  };
};

describe('Video preview component', () => {
  const video = videos.items[0];
  it('renders', () => {
    build(video);
  });

  it('contains a title', () => {
    const { title } = build(video);
    expect(title()).toBeDefined();
  });

  it('contains an image', () => {
    const { image } = build(video);
    expect(image()).toBeDefined();
  });

  it('shows add to favorites button', () => {
    const { videoCard, addFavorite } = build(video);
    fireEvent.mouseEnter(videoCard());
    expect(addFavorite()).toBeInTheDocument();
  });

  it('shows add to favorites button', () => {
    const { videoCard, removeFavorite } = build(video, true);
    fireEvent.mouseEnter(videoCard());
    expect(removeFavorite()).toBeInTheDocument();
  });
});
