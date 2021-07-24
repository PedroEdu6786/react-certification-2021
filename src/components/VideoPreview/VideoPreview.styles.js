import styled from 'styled-components';
import { Heading, Image, Stack, Text } from '../../theme/components/Foundation.component';

export const VideoPreviewContainer = styled(Stack)`
  max-width: 345px;
  border-radius: 1rem;
  -webkit-box-shadow: 5px 5px 17px 1px rgba(0, 0, 0, 0.06);
  box-shadow: 5px 5px 17px 1px rgba(0, 0, 0, 0.06);
`;

export const InfoContainer = styled(Stack)`
  padding: 1rem;
  background-color: white;
  border-radius: 0 0 0.5rem 0.5rem;

  * + * {
    padding-top: 1rem;
  }
`;

export const ThumbnailContainer = styled(Stack)`
  overflow: hidden;
  height: 175px;
  position: relative;
  align-items: center;
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const Thumbnail = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`;

export const VideoPreviewTitle = styled(Heading)`
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.75rem;
`;

export const VideoPreviewDescription = styled(Text)`
  color: #575757;
  line-height: 1.5rem;
  font-size: 1rem;
`;
