import React from 'react';
import { render } from '@testing-library/react';
import PreviewRelatedList from './index';
import videos from '../../mocks/videos.json';

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
});
