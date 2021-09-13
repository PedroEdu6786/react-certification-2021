import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Stack, Grid } from '../../theme/components/Foundation.component';

export const RelatedLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const RelatedVideoContainer = styled(Stack)`
  flex-direction: row;

  * + * {
    padding-left: 0.5rem;
  }
`;

export const PreviewContainer = styled(Grid)`
  gap: 1rem;

  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
