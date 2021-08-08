import styled from 'styled-components';
import { Input, Stack } from '../../theme/components/Foundation.component';

export const SearchInput = styled(Input)`
  color: ${(props) => props.theme.font};
  height: 2rem;
  padding-left: 2.5rem;
  width: 100%;

  font-size: 1rem;

  :focus {
    border: 2px solid ${(props) => props.theme.background};
  }
`;

export const SearchContainer = styled(Stack)`
  position: relative;
  background-color: ${(props) => props.theme.background};
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: 1rem;

  max-width: 450px;
`;
