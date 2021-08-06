import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyles } from '../../theme/styles';
import HomePage from '../../pages/Home';
import VideoDetails from '../../pages/VideoDetails';
import Layout from '../Layout';
import VideosProvider from '../../providers/VideosProvider';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <VideosProvider>
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
      </VideosProvider>
    </BrowserRouter>
  );
}

export default App;
