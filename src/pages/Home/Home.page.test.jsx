import React from 'react';
import {
  cleanup,
  queryByRole,
  queryByTestId,
  render,
  waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import HomePage from './index';
import VideosProvider from '../../providers/VideoProvider';
import { youtubeClient } from '../../utils/helpers';
import videos from '../../mocks/videos.json';

const build = () => {
  const { container } = render(
    <VideosProvider>
      <HomePage />
    </VideosProvider>,
    { wrapper: MemoryRouter }
  );

  return {
    container,

    /** Queries for single elements */
    header: () => queryByTestId(container, /header/i),
    previewVideos: () => queryByTestId(container, /previewList/i),
    title: () => queryByRole(container, 'heading', { name: 'Welcome to the challenge!' }),

    /** Queries for multiple elements */
  };
};

describe('Home page testing', () => {
  afterEach(cleanup);

  it('renders', async () => {
    const { title } = build();
    await waitFor(() => {
      expect(title()).toBeDefined();
    });
  });

  it('contains header and preview videos', async () => {
    const { header } = build();
    await waitFor(async () => {
      expect(header()).toBeDefined();
    });
  });

  it('loads videos from api', async () => {
    youtubeClient.mockImplementationOnce(() => Promise.resolve({ data: videos }));
    const { previewVideos } = build();
    expect(youtubeClient).toBeCalledTimes(1);
    await waitFor(async () => {
      expect(await previewVideos()).toBeDefined();
    });
  });
});
