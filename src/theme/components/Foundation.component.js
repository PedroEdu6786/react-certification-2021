import styled from 'styled-components';
import { defaultStyles, textDefaultStyles } from '../foundations/defaultStyles';

export const Box = styled.div`
  ${defaultStyles}
`;

export const Button = styled.button`
  ${defaultStyles};
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
`;

export const Input = styled.input`
  ${defaultStyles};
  ${defaultStyles};
  background-color: ${(props) => props.theme.background};
  border: 2px solid #cdcdcd;
  border-radius: 0.25rem;
  font-family: 'Montserrat', sans-serif;
`;

export const Heading = styled.h1`
  ${defaultStyles};
  ${textDefaultStyles};
  color: ${(props) => props.theme.font};
`;

export const Text = styled.p`
  ${defaultStyles};
  ${textDefaultStyles};
  color: ${(props) => props.theme.font};
`;

export const Stack = styled(Box)`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;

export const Grid = styled(Box)`
  display: grid;
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;

export const Link = styled.a`
  ${defaultStyles};
  ${textDefaultStyles};
  text-decoration: none;
  color: ${(props) => props.theme.font};
`;

export const Image = styled.img`
  ${defaultStyles};
  object-fit: ${(props) => props.objectFit};
`;

export const Container = styled(Grid)`
  width: 100%;
  height: 100vh;
  gap: 2rem;
  padding: 2rem 2rem;
  background-color: ${(props) => props.theme.background};

  @media only screen and (min-width: 768px) {
    padding: 2rem 3rem;
  }
`;

export const BodyContainer = styled(Container)`
  height: 200%;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const GhostButton = styled(Button)`
  font-weight: bold;
  color: ${(props) => props.theme.font};

  padding: 1rem;
  border-radius: 5px;
  transition: 0.3s;
  :hover,
  :active {
    background-color: ${(props) => props.theme.shadow};
  }
`;

export const OutlineButton = styled(GhostButton)`
  border: 2px solid ${(props) => props.theme.shadow};
`;

export const Overlay = styled(Box)`
  background-color: rgba(84, 84, 84, 0.4);
  display: ${(props) => (props.show ? 'block' : 'none')};
  height: 200vh;
  left: 0;
  padding: 2rem;
  position: fixed;
  top: 0;
  width: 150vw;
  z-index: 1;
  transition: 0.4s;
`;

Stack.defaultProps = {
  direction: 'column',
};
