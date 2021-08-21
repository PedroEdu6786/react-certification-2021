import styled from 'styled-components';
import { Container } from '../../theme/components/Foundation.component';

export const BodyContainer = styled(Container)`
  height: 100%;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;
