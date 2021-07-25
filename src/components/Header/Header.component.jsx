import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoSearch } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';
import { FiMoon } from 'react-icons/fi';
import { Box, Stack } from '../../theme/components/Foundation.component';
import {
  BurgerContainer,
  Drawer,
  DrawerItem,
  HeaderContainer,
  LeftNav,
  Overlay,
  RightNav,
  SearchContainer,
  SearchInput,
} from './Header.styles';

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
          <DrawerItem href="#" onClick={toggleMenu}>
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
          <SearchContainer>
            <Box pos="absolute" pl="1rem">
              <GoSearch size="1.125rem" color="#BDBDBD" />
            </Box>
            <SearchInput />
          </SearchContainer>
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
