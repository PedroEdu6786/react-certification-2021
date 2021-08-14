import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  fireEvent,
  queryAllByRole,
  queryByRole,
  queryByTestId,
  render,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
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
    drawer: () => queryByRole(container, 'navigation'),
    overlay: () => queryByTestId(container, /overlay/i),
    themeButton: () => queryByTestId(container, /themeButton/i),
    darkTheme: () => queryByTestId(container, /darkTheme/i),
    lightTheme: () => queryByTestId(container, /lightTheme/i),

    /** Queries for multiple elements */
    button: () => queryAllByRole(container, 'button'),
  };
};

describe('Header testing', () => {
  it('renders', () => {
    build();
  });

  it('opens drawer on button click', () => {
    const { button, overlay, drawer } = build();
    expect(overlay()).toHaveStyle('display: none');
    expect(drawer()).toHaveStyle('left: -100%');

    fireEvent.click(button()[0]);
    expect(overlay()).toBeInTheDocument();
    expect(drawer()).toHaveStyle('left: 0');
    expect(overlay()).toHaveStyle('display: block');
  });

  it('toggles theme on button click', () => {
    const { lightTheme, darkTheme, themeButton } = build();
    expect(lightTheme()).toBeInTheDocument();

    act(() => {
      fireEvent.click(themeButton());
    });

    expect(darkTheme()).toBeInTheDocument();

    act(() => {
      fireEvent.click(themeButton());
    });

    expect(lightTheme()).toBeInTheDocument();
  });
});
