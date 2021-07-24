import styled from 'styled-components';
import { defaultStyles, textDefaultStyles } from '../foundations/defaultStyles';

export const Box = styled.div`
  ${defaultStyles}
`;

export const Input = styled.input`
  ${defaultStyles};
  ${defaultStyles};
  background-color: #f5f5f5;
  border: 2px solid #cdcdcd;
  border-radius: 0.25rem;
  font-family: 'Montserrat', sans-serif;
`;

export const Heading = styled.h1`
  ${defaultStyles}
  ${textDefaultStyles}
`;

export const Text = styled.p`
  ${defaultStyles}
  ${textDefaultStyles}
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
  color: black;
`;

export const Image = styled.img`
  ${defaultStyles};
  object-fit: ${(props) => props.objectFit};
`;

Stack.defaultProps = {
  direction: 'column',
};
