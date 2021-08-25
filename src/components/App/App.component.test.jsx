import React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import ThemeContentProvider from '../../providers/ThemeContentProvider';
import App from './App.component';
import VideoProvider from '../../providers/VideoProvider';

const build = () => {
  const { container } = render(
    <ThemeContentProvider>
      <VideoProvider>
        <App />
      </VideoProvider>
    </ThemeContentProvider>,
    { wrapper: MemoryRouter }
  );

  return {
    container,
  };
};

describe('Header testing', () => {
  it('renders', async () => {
    await act(async () => {
      await build();
    });
  });
});
