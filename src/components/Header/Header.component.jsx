import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
import { FiMoon } from 'react-icons/fi';
import {
  BurgerContainer,
  Drawer,
  DrawerItem,
  HeaderContainer,
  LeftNav,
  Overlay,
  RightNav,
} from './Header.styles';
import { Stack } from '../../theme/components/Foundation.component';
import Search from '../Search';

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

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
            <GiHamburgerMenu size="2rem" />
          </BurgerContainer>

          {/* Search input */}
          <Search />
        </LeftNav>

        <RightNav>
          <FiMoon size="2.5rem" color="#BDBDBD" />
          <FaUserCircle size="2.5rem" color="#BDBDBD" />
        </RightNav>
      </Stack>
    </HeaderContainer>
  );
}

export default Header;
