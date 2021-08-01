import React from 'react';
import { render } from '@testing-library/react';
import PreviewList from './PreviewList.component';

describe('Home page testing', () => {
  beforeAll(() => {
    render(<PreviewList />);
  });
});
