import React from 'react';
import { render, screen } from '@testing-library/react';
import PreviewList from './PreviewList.component';
import videos from '../../mocks/videos.json';

describe('Home page testing', () => {
  beforeAll(() => {
    render(<PreviewList />);
  });

  test('Should render all videos from videos mockup json', () => {
    const previewListElement = screen.queryByTestId(/preview-list/i);

    const numOfChilds = previewListElement.childElementCount;
    const numOfVideos = videos.items.length;

    expect(numOfChilds).toBe(numOfVideos);
  });
});
