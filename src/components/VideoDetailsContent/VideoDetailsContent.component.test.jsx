import React from 'react';
import { fireEvent, queryByRole, render } from '@testing-library/react';

import videos from '../../mocks/videos.json';
import VideoDetailsContent from './VideoDetailsContent.component';

const build = ({ ...rest }) => {
  const { container } = render(<VideoDetailsContent {...rest} />);

  return {
    container,

    /** Queries for single elements */
    addFavoriteButton: () =>
      queryByRole(container, 'button', { name: /Add to favorites/i }),
    removeFavoriteButton: () =>
      queryByRole(container, 'button', { name: /Remove from favorites/i }),
  };
};

describe('VideoDetails content component', () => {
  const videoData = videos.items[0];
  it('renders', () => {
    build(videoData);
  });

  it('renders favorite buttons when authenticated', () => {
    const { addFavoriteButton } = build({ videoData, isAuthenticated: true });
    expect(addFavoriteButton()).toBeInTheDocument();

    const { removeFavoriteButton } = build({
      videoData,
      isAuthenticated: true,
      isFavoriteVideo: true,
    });
    expect(removeFavoriteButton()).toBeInTheDocument();
  });

  it('adds a video to favorites', () => {
    const addFavoriteVideo = jest.fn();

    const { addFavoriteButton } = build({
      videoData,
      isAuthenticated: true,
      addFavoriteVideo,
    });

    fireEvent.click(addFavoriteButton());

    expect(addFavoriteVideo).toBeCalledTimes(1);
  });

  it('removes a video from favorites', () => {
    const removeFavoriteVideo = jest.fn();

    const { removeFavoriteButton } = build({
      videoData,
      isAuthenticated: true,
      isFavoriteVideo: true,
      removeFavoriteVideo,
    });

    fireEvent.click(removeFavoriteButton());

    expect(removeFavoriteVideo).toBeCalledTimes(1);
  });
});
