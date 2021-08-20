import React from 'react';
import { MemoryRouter } from 'react-router';
import { fireEvent, queryByTestId, render, waitFor } from '@testing-library/react';

import Search from './index';
import VideosProvider from '../../providers/VideoProvider';
import { youtubeClient } from '../../utils/helpers';
import videos from '../../mocks/videos.json';

const build = () => {
  const { container } = render(
    <VideosProvider>
      <Search />
    </VideosProvider>,
    { wrapper: MemoryRouter }
  );

  return {
    container,

    /** Queries for single elements */
    input: () => queryByTestId(container, /input-search/i),

    /** Queries for multiple elements */
  };
};

describe('Search component', () => {
  it('renders', () => {
    build();
  });

  it('submits form', async () => {
    youtubeClient.mockImplementationOnce(() => Promise.resolve({ data: videos }));
    const { input } = build();

    await waitFor(() => {
      fireEvent.submit(input());
      expect(youtubeClient).toBeCalledTimes(1);
    });
  });
});
