import React from 'react';
import { MemoryRouter } from 'react-router';
import { cleanup, queryAllByRole, render } from '@testing-library/react';

import VideosProvider from '../../providers/VideoProvider';
import FavoriteVideoDetails from './FavoriteVideoDetails.page';

import videos from '../../mocks/videos.json';
import { addFavoriteVideo } from '../../utils/helpers/video.helpers';

const build = () => {
  const { container } = render(
    <VideosProvider>
      <FavoriteVideoDetails />
    </VideosProvider>,
    { wrapper: MemoryRouter }
  );

  return {
    container,

    /** Queries for single elements */

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

  it('renders favorite videos', () => {
    addFavoriteTest();
    const { thumbnails } = build();
    expect(thumbnails().length).toBe(videos.items.length);
  });
});
