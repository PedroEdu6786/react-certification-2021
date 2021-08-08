import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Box, Button, Stack } from '../../theme/components/Foundation.component';

export const HeaderContainer = styled(Stack)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem;
  width: 100%;
  background-color: ${(props) => props.theme.header};
`;

export const BurgerContainer = styled(Box)`
  background: none;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

export const Drawer = styled(Stack)`
  background-color: ${(props) => props.theme.background};
  height: 150vh;
  left: ${(props) => props.left};
  position: fixed;
  top: 0;
  width: 60%;
  z-index: 10;

  transition: 0.4s;

  max-width: 300px;

  *,
  * + * {
    padding: 1rem 2rem;
  }
`;

export const Overlay = styled(Box)`
  background-color: rgba(84, 84, 84, 0.4);
  display: ${(props) => props.display};
  height: 200vh;
  left: 0;
  padding: 2rem;
  position: fixed;
  top: 0;
  width: 150vw;
  z-index: 1;
  transition: 0.4s;
`;

export const LeftNav = styled(Stack)`
  flex-direction: row;
  width: 600px;
`;

export const RightNav = styled(Stack)`
  flex-direction: row;
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;

    * + * {
      margin-left: 1rem;
    }
  }
`;

export const ThemeButton = styled(Button)``;

export const DrawerItem = styled(Link)`
  color: ${(props) => props.theme.font};
  text-decoration: none;
  :hover,
  :active {
    background-color: ${(props) => props.theme.shadow};
    transition: 0.4s;
    cursor: pointer;
  }
`;

export const Burger = styled(GiHamburgerMenu)`
  color: ${(props) => props.theme.font};
  font-size: 2rem;
`;
