import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import PreviewRelatedList from './index';
import videos from '../../mocks/videos.json';
import { renderRelatedVideos } from './PreviewRelatedList.component';

const build = ({ buildVideos }) => {
  const { container } = render(<PreviewRelatedList videos={buildVideos} />);

  return {
    container,
  };
};

describe('Preview related list component', () => {
  it('renders', () => {
    build(videos);
  });

  it('renders related video', () => {
    const video = videos.items[0];
    const { container } = render(renderRelatedVideos(video), {
      wrapper: MemoryRouter,
    });
    expect(container).toBeDefined();
  });
});
