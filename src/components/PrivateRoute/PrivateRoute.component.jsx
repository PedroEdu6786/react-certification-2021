import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated } = useAuth0();

  const handleAuthentication = () => {
    return isAuthenticated ? children : <Redirect to="/" />;
  };

  return <Route {...rest} render={handleAuthentication} />;
}

export default PrivateRoute;
