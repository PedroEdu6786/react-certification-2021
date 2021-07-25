import React from 'react';
import { Heading } from '../../theme/components/Foundation.component';
import { BodyContainer } from './Home.styles';
import Layout from '../../components/Layout';
import PreviewList from '../../components/PreviewList';

function HomePage() {
  return (
    <Layout>
      <BodyContainer as="section">
        {/* Main Title */}
        <Heading fontSize="2.441rem">Welcome to the challenge!</Heading>

        {/* Video List */}
        <PreviewList />
      </BodyContainer>
    </Layout>
  );
}

export default HomePage;
