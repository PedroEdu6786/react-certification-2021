import React from 'react';
import { fireEvent, queryByRole, render } from '@testing-library/react';

import videos from '../../mocks/videos.json';
import VideoDetailsContent from './VideoDetailsContent.component';
import { addFavoriteVideo, removeFavoriteVideo } from '../../utils/helpers/video.helpers';
import { getFromLocalStorage } from '../../utils/helpers/localStorage.helpers';
import { REACT_CHALLENGE_FAVORITE_VIDEOS } from '../../utils/constants';

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
  const videoData = videos.items[1];
  const globalDispatch = jest.fn();

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
    const { addFavoriteButton } = build({
      videoData,
      isAuthenticated: true,
      isFavoriteVideo: false,
      addFavoriteVideo: () => addFavoriteVideo(videoData, globalDispatch),
    });

    fireEvent.click(addFavoriteButton());
    const video = getFromLocalStorage(REACT_CHALLENGE_FAVORITE_VIDEOS);
    expect(video[0]).toEqual(videoData);
  });

  it('removes a video from favorites', () => {
    const { removeFavoriteButton } = build({
      videoData,
      isAuthenticated: true,
      isFavoriteVideo: true,
      removeFavoriteVideo: () =>
        removeFavoriteVideo(videoData.id.videoId, globalDispatch),
    });

    fireEvent.click(removeFavoriteButton());
    const video = getFromLocalStorage(REACT_CHALLENGE_FAVORITE_VIDEOS);
    expect(video.length).toEqual(0);
  });
});
