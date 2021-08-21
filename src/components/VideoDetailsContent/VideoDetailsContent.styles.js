import styled from 'styled-components';
import { Stack } from '../../theme/components/Foundation.component';

export const VideoPlayer = styled.iframe`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const VideoContent = styled(Stack)`
  * + * {
    padding-top: 1rem;
  }
  height: 600px;
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

export const VideoDataContainer = styled(Stack)`
  @media only screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;
