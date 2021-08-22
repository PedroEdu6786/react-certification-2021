import React from 'react';
import { MemoryRouter } from 'react-router';
import { cleanup, queryAllByRole, queryByText, render } from '@testing-library/react';

import VideosProvider from '../../providers/VideoProvider';
import FavoriteVideos from './FavoriteVideos.page';

import videos from '../../mocks/videos.json';
import { addFavoriteVideo } from '../../utils/helpers/video.helpers';

const build = () => {
  const { container } = render(
    <VideosProvider>
      <FavoriteVideos />
    </VideosProvider>,
    { wrapper: MemoryRouter }
  );

  return {
    container,

    /** Queries for single elements */
    missingVideos: () => queryByText(container, /There is no favorite videos/i),

    /** Queries for multiple elements */
    thumbnails: () => queryAllByRole(container, 'img'),
  };
};

const addFavoriteTest = () => {
  const globalDispatch = jest.fn();
  videos.items.forEach((video) => addFavoriteVideo(video, globalDispatch));
};

describe('Video details page', () => {
  afterEach(cleanup);

  it('renders', () => {
    const { missingVideos } = build();
    expect(missingVideos()).toBeInTheDocument();
  });

  it('renders favorite videos', () => {
    addFavoriteTest();
    const { thumbnails } = build();
    expect(thumbnails().length).toBe(videos.items.length);
  });
});
