import React, { useState, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FiMoon, FiSun } from 'react-icons/fi';
import {
  Burger,
  BurgerContainer,
  Drawer,
  DrawerItem,
  HeaderContainer,
  LeftNav,
  Navigation,
  Overlay,
  RightNav,
  ThemeButton,
} from './Header.styles';
import Search from '../Search';
import ThemeContext from '../../providers/ThemeContentProvider/ThemeContext';
import { setThemeAction } from '../../providers/ThemeContentProvider/ThemeContextProvider.actions';
import { GhostButton } from '../../theme/components/Foundation.component';

function Header() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [openDrawer, setOpenDrawer] = useState(false);
  const { globalState, globalDispatch } = useContext(ThemeContext);

  const { theme } = globalState;

  const handleTheme = () => {
    if (theme.theme === 'light') {
      globalDispatch(setThemeAction('dark'));
      return;
    }

    globalDispatch(setThemeAction('light'));
  };

  const toggleMenu = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
    <HeaderContainer data-testid="header" as="header">
      <Navigation>
        {/* Drawer Menu */}
        <Drawer as="nav" left={openDrawer}>
          <DrawerItem to="/" onClick={toggleMenu}>
            Home
          </DrawerItem>
        </Drawer>

        {/* Page overlay */}
        <Overlay data-testid="overlay" show={openDrawer} onClick={toggleMenu} />

        <LeftNav>
          {/* Burger Icon that displays drawer */}
          <BurgerContainer as="button" onClick={toggleMenu}>
            <Burger />
          </BurgerContainer>

          {/* Search input */}
          <Search />
        </LeftNav>

        <RightNav>
          <ThemeButton as="button" data-testid="themeButton" onClick={handleTheme}>
            {theme.theme === 'light' ? (
              <FiMoon data-testid="lightTheme" size="2.5rem" color="#BDBDBD" />
            ) : (
              <FiSun data-testid="darkTheme" size="2.5rem" color="#BDBDBD" />
            )}
          </ThemeButton>
          {isAuthenticated ? (
            <GhostButton onClick={() => logout({ returnTo: window.location.origin })}>
              Logout
            </GhostButton>
          ) : (
            <GhostButton onClick={loginWithRedirect}>Login</GhostButton>
          )}
        </RightNav>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
