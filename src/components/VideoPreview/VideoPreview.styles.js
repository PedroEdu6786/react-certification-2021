import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Heading, Image, Stack, Text } from '../../theme/components/Foundation.component';

export const VideoLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.font};
`;

export const VideoPreviewContainer = styled(Stack)`
  background-color: ${(props) => props.theme.cardBackground};

  max-width: 345px;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 17px 1px rgba(0, 0, 0, 0.06);
  box-shadow: 5px 5px 17px 1px rgba(0, 0, 0, 0.06);
  transition: 0.3s;

  :hover {
    background-color: ${(props) => props.theme.shadow};
  }
`;

export const InfoContainer = styled(Stack)`
  padding: 1rem;
  border-radius: 0 0 10px 10px;

  * + * {
    padding-top: 1rem;
  }
`;

export const ThumbnailContainer = styled(Stack)`
  overflow: hidden;
  height: 175px;
  position: relative;
  align-items: center;
  border-radius: 10px 10px 0 0;
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
  color: ${(props) => props.theme.font};
  line-height: 1.5rem;
  font-size: 1rem;
`;
