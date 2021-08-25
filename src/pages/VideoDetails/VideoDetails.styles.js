import styled from 'styled-components';
import { Container, Stack } from '../../theme/components/Foundation.component';

export const BodyContainer = styled(Container)`
  height: 100%;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const VideoPlayer = styled.iframe`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const VideoContent = styled(Stack)`
  * + * {
    padding-top: 1rem;
  }
  height: 400px;
  @media only screen and (min-width: 768px) {
    height: 500px;
  }
  @media only screen and (min-width: 1024px) {
    height: 600px;
  }
  @media only screen and (min-width: 1440px) {
    height: 700px;
  }
`;
