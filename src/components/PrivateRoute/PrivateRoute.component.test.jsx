import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { MemoryRouter } from 'react-router';
import { queryByText, render } from '@testing-library/react';
import PrivateRoute from './PrivateRoute.component';
import { Heading } from '../../theme/components/Foundation.component';

jest.mock('@auth0/auth0-react');

const build = () => {
  const { container } = render(
    <PrivateRoute>
      <Heading>Test</Heading>
    </PrivateRoute>,
    { wrapper: MemoryRouter }
  );

  return {
    container,
    heading: () => queryByText(container, /Test/i),
    loading: () => queryByText(container, /Loading.../i),
  };
};

describe('Private route component', () => {
  it('should not display heading when not authenticated', () => {
    useAuth0.mockImplementationOnce(() => ({ isAuthenticated: false }));
    const { heading } = build();
    expect(heading()).not.toBeInTheDocument();
  });

  it('should display heading when authenticated', () => {
    useAuth0.mockImplementationOnce(() => ({ isAuthenticated: true }));
    const { heading } = build();
    expect(heading()).toBeInTheDocument();
  });

  it('should display loading when waiting for authentication', () => {
    useAuth0.mockImplementationOnce(() => ({ isLoading: true }));
    const { loading } = build();
    expect(loading()).toBeInTheDocument();
  });
});
