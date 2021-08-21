import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../Layout';
import ThemeContentProvider from '../../providers/ThemeContentProvider';
import HomePage from '../../pages/Home';
import VideoDetails from '../../pages/VideoDetails';
import FavoriteVideos from '../../pages/FavoriteVideos';
import FavoriteVideoDetails from '../../pages/FavoriteVideoDetails';
import PrivateRoute from '../PrivateRoute/PrivateRoute.component';

function App() {
  return (
    <BrowserRouter>
      <ThemeContentProvider>
        <Layout>
          <Switch>
            <PrivateRoute path="/favorites/:videoId">
              <FavoriteVideoDetails />
            </PrivateRoute>
            <PrivateRoute exact path="/favorites">
              <FavoriteVideos />
            </PrivateRoute>
            <Route path="/:videoId">
              <VideoDetails />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </Layout>
      </ThemeContentProvider>
    </BrowserRouter>
  );
}

export default App;
