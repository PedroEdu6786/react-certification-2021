import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyles } from '../../theme/styles';
import HomePage from '../../pages/Home';
import VideoDetails from '../../pages/VideoDetails';
import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/:videoId">
            <VideoDetails />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
