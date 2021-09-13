import styled from 'styled-components';
import { Stack } from '../../theme/components/Foundation.component';

export const EmptyVideos = styled(Stack)`
  align-items: center;
  border: 2px solid #e63946;
  border-radius: 5px;
  color: #e63946;
  padding: 1rem;
  height: 4rem;
  justify-content: center;

  * {
    color: #e63946;
    font-weight: bold;
  }
`;
