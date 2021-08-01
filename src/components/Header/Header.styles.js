import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box, Input, Stack } from '../../theme/components/Foundation.component';

export const HeaderContainer = styled(Stack)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem;
  width: 100%;
`;

export const SearchInput = styled(Input)`
  color: black;
  height: 2rem;
  padding-left: 2.5rem;
  width: 100%;

  font-size: 1rem;

  :focus {
    border: 2px solid #3eaeff;
  }
`;

export const SearchContainer = styled(Stack)`
  position: relative;
  background-color: #f5f5f5;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: 1rem;

  max-width: 450px;
`;

export const BurgerContainer = styled(Box)`
  background: none;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

export const Drawer = styled(Stack)`
  background-color: #f5f5f5;
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
    display: block;

    * + * {
      margin-left: 1rem;
    }
  }
`;

export const DrawerItem = styled(Link)`
  color: black;
  text-decoration: none;
  :hover,
  :active {
    background-color: #e8e8e8;
    transition: 0.4s;
    cursor: pointer;
  }
`;
