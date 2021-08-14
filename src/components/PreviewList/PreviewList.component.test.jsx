import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import PreviewList from './PreviewList.component';
import videos from '../../mocks/videos.json';
import { renderRelatedVideos } from '../PreviewRelatedList/PreviewRelatedList.component';

const build = ({ buildVideos }) => {
  const { container } = render(<PreviewList videos={buildVideos} />);

  return {
    container,
  };
};

describe('Preview list', () => {
  it('renders', () => {
    build(videos);
  });

  it('renders related videos', () => {
    const video = videos.items[0];
    const { container } = render(renderRelatedVideos(video), {
      wrapper: MemoryRouter,
    });
    expect(container).toBeDefined();
  });
});
