import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyles } from '../../theme/styles';
import HomePage from '../../pages/Home';
import VideoDetails from '../../pages/VideoDetails';
import Layout from '../Layout';
import GlobalStateProvider from '../../store/GlobalStateProvider';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <GlobalStateProvider>
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
      </GlobalStateProvider>
    </BrowserRouter>
  );
}

export default App;
