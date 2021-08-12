import React, { useState, useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiMoon, FiSun } from 'react-icons/fi';
import {
  Burger,
  BurgerContainer,
  Drawer,
  DrawerItem,
  HeaderContainer,
  LeftNav,
  Overlay,
  RightNav,
  ThemeButton,
} from './Header.styles';
import { Stack } from '../../theme/components/Foundation.component';
import Search from '../Search';
import ThemeContext from '../../providers/ThemeContentProvider/ThemeContext';

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { globalState, globalDispatch } = useContext(ThemeContext);

  const { theme } = globalState;

  const handleTheme = () => {
    if (theme.theme === 'light') {
      globalDispatch({ type: 'SET_THEME', payload: 'dark' });
      return;
    }

    globalDispatch({ type: 'SET_THEME', payload: 'light' });
  };

  const toggleMenu = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
    <HeaderContainer data-testid="header" as="header">
      <Stack direction="row" align="center" justify="space-between" m="0 auto" w="100%">
        {/* Drawer Menu */}
        <Drawer as="nav" left={openDrawer ? 0 : '-100%'}>
          <DrawerItem to="/" onClick={toggleMenu}>
            Home
          </DrawerItem>
        </Drawer>

        {/* Page overlay */}
        <Overlay
          data-testid="overlay"
          display={openDrawer ? 'block' : 'none'}
          onClick={toggleMenu}
        />

        <LeftNav>
          {/* Burger Icon that displays drawer */}
          <BurgerContainer as="button" onClick={toggleMenu}>
            <Burger />
          </BurgerContainer>

          {/* Search input */}
          <Search />
        </LeftNav>

        <RightNav>
          <ThemeButton onClick={handleTheme}>
            {theme.theme === 'light' ? (
              <FiMoon size="2.5rem" color="#BDBDBD" />
            ) : (
              <FiSun size="2.5rem" color="#BDBDBD" />
            )}
          </ThemeButton>
          <FaUserCircle size="2.5rem" color="#BDBDBD" />
        </RightNav>
      </Stack>
    </HeaderContainer>
  );
}

export default Header;
