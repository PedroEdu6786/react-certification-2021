import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Redirect } from 'react-router-dom';
import { Heading } from '../../theme/components/Foundation.component';

function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated, isLoading } = useAuth0();

  const handleAuthentication = () => {
    if (isLoading) {
      return <Heading>Loading...</Heading>;
    }
    return isAuthenticated ? children : <Redirect to="/" />;
  };

  return <Route {...rest} render={handleAuthentication} />;
}

export default PrivateRoute;
