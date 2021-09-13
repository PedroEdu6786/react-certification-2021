import React from 'react';
import { Link } from 'react-router-dom';
import {
  GhostButton,
  Heading,
  Stack,
  Text,
} from '../../theme/components/Foundation.component';
import { ErrorContainer } from './NotFound.styles';

function NotFound() {
  return (
    <ErrorContainer as="section">
      <Stack align="center">
        <Heading fontSize="10rem">404</Heading>
        <Text fontSize="2rem">Page not found</Text>
        <GhostButton as={Link} to="/">
          Navigate to Home
        </GhostButton>
      </Stack>
    </ErrorContainer>
  );
}

export default NotFound;
