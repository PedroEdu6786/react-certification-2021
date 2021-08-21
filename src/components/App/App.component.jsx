import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import VideoDetails from '../../pages/VideoDetails';
import Layout from '../Layout';
import ThemeContentProvider from '../../providers/ThemeContentProvider';
import FavoriteVideos from '../../pages/FavoriteVideos';
import PrivateRoute from '../PrivateRoute/PrivateRoute.component';

function App() {
  return (
    <BrowserRouter>
      <ThemeContentProvider>
        <Layout>
          <Switch>
            <PrivateRoute path="/favorites">
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
