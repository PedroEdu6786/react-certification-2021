import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { Box } from '../../theme/components/Foundation.component';
import Header from '../Header/Header.component';
import ThemeContext from '../../providers/ThemeContentProvider/ThemeContext';
import VideoProvider from '../../providers/VideoProvider';
import { GlobalStyles } from '../../theme/styles';

const Layout = ({ children, ...rest }) => {
  const { globalState } = useContext(ThemeContext);

  const { theme } = globalState;

  return (
    <>
      <GlobalStyles />
      <VideoProvider>
        <ThemeProvider theme={theme}>
          <Box as="main" {...rest}>
            <Header />
            {children}
          </Box>
        </ThemeProvider>
      </VideoProvider>
    </>
  );
};

export default Layout;
