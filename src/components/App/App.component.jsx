import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import VideoDetails from '../../pages/VideoDetails';
import Layout from '../Layout';
import ThemeContentProvider from '../../providers/ThemeContentProvider';

function App() {
  return (
    <BrowserRouter>
      <ThemeContentProvider>
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
      </ThemeContentProvider>
    </BrowserRouter>
  );
}

export default App;
