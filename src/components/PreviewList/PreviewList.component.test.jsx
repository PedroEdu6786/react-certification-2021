import React from 'react';
import { render } from '@testing-library/react';
import PreviewList from './PreviewList.component';
import videos from '../../mocks/videos.json';

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
});
