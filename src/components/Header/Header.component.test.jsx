import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, queryAllByRole, queryByTestId, render } from '@testing-library/react';
import Header from './Header.component';
import ThemeContentProvider from '../../providers/ThemeContentProvider';

const build = () => {
  const { container } = render(
    <ThemeContentProvider>
      <Header />
    </ThemeContentProvider>,
    { wrapper: MemoryRouter }
  );

  return {
    container,

    /** Queries for single elements */
    overlay: () => queryByTestId(container, /overlay/i),

    /** Queries for multiple elements */
    button: () => queryAllByRole(container, 'button'),
  };
};

describe('Header testing', () => {
  it('renders', () => {
    build();
  });
  it('opens drawer on button click', () => {
    const { button, overlay } = build();

    fireEvent.click(button()[0]);
    expect(overlay()).toBeInTheDocument();
  });
});
