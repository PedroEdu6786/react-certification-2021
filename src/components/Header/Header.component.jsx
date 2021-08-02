import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoSearch } from 'react-icons/go';
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
  SearchContainer,
  SearchInput,
} from './Header.styles';
import { Box, Stack } from '../../theme/components/Foundation.component';
import Context from '../../store/context';
import useYoutubeApi from '../../utils/hooks/useYoutubeApi';

function Header() {
  const [inputValue, setInputValue] = useState('wizeline');
  const [openDrawer, setOpenDrawer] = useState(false);
  const { globalDispatch } = useContext(Context);
  const location = useLocation();
  const history = useHistory();
  const { fetchVideos } = useYoutubeApi();

  const toggleMenu = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchVideos(inputValue);
    globalDispatch({ type: 'SET_INPUT', payload: inputValue });

    if (location.pathname !== '/') history.push('/');
  };

  const handleChange = (event) => setInputValue(event.target.value);

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
          <SearchContainer as="form" onSubmit={handleSubmit}>
            <Box pos="absolute" pl="1rem">
              <GoSearch size="1.125rem" color="#BDBDBD" />
            </Box>
            <SearchInput value={inputValue} onChange={handleChange} />
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
