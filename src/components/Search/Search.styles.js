import styled from 'styled-components';
import { Input, Stack } from '../../theme/components/Foundation.component';

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
