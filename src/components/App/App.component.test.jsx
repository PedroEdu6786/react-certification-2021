import React from 'react';
import { act } from 'react-dom/test-utils';
import { findAllByRole, fireEvent, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App.component';
import { youtubeClient } from '../../utils/helpers/youtube.helpers';
import videos from '../../mocks/videos.json';

const build = () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  return {
    container,

    /** Queries for multiple elements */
    videoCards: () => findAllByRole(container, 'article'),
  };
};

describe('App component test', () => {
  it('renders', async () => {
    await act(async () => {
      await build();
    });
  });

  it('navigates to video details screen', async () => {
    youtubeClient.mockImplementationOnce(() => Promise.resolve({ data: videos }));
    let videoCards = null;
    let container = null;
    await act(async () => {
      ({ videoCards, container } = await build());
    });

    let data = null;
    await waitFor(async () => {
      data = await videoCards();
    });

    const videoCard = data[1].children[0];

    act(() => {
      fireEvent.click(videoCard);
    });

    const expectedPath = `/${videos.items[1].id.videoId}`;

    expect(window.location.pathname).toEqual(expectedPath);
    expect(container).toMatchSnapshot();
  });
});
