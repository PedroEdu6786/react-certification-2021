import React from 'react';
import { MemoryRouter } from 'react-router';
import { findAllByRole, findByRole, queryByRole, render } from '@testing-library/react';

import VideoDetails from './index';

const build = () => {
  const { container } = render(<VideoDetails />, { wrapper: MemoryRouter });

  return {
    container,

    /** Queries for single elements */
    asyncVideo: () => findByRole(container, 'img', { name: 'video name' }),
    title: () => queryByRole(container, 'h1', { name: 'video title' }),
    image: () => queryByRole(container, 'img', { name: 'video image' }),

    /** Queries for multiple elements */
    videosList: () => findAllByRole(container, 'link'),
  };
};

describe('Video details page', () => {
  it('renders', () => {
    build();
  });

  it('contains a title', () => {
    const { title } = build();
    expect(title()).toBeDefined();
  });

  it('contains an image', () => {
    const { image } = build();
    expect(image()).toBeDefined();
  });
});
