import styled from 'styled-components';
import { Grid } from '../../theme/components/Foundation.component';

export const BodyContainer = styled(Grid)`
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  padding: 2rem 3rem;
  background-color: #f9f9f9;
`;

export const PreviewsContainer = styled(Grid)`
  gap: 1rem;

  justify-content: center;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (min-width: 1870px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
