import React from 'react';
import { Box } from '../../theme/components/Foundation.component';
import Header from '../Header/Header.component';

const Layout = ({ children, ...rest }) => {
  return (
    <Box as="main" {...rest}>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
