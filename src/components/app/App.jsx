import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ReleasePage from '../../containers/ReleasePage';
import SearchPage from '../../containers/SearchPage';
import ArtistPage from '../../containers/ArtistPage';
import LyricsPage from '../../containers/LyricsPage';

export default function App() {
  return (
    <Router>
      <Switch>

        <Route 
          path="/"
          exact
          component={SearchPage}
        />

        <Route 
          path="/artist/:artistID/:artistName/"
          exact
          component={ArtistPage}
        />

        <Route 
          exact
          path="/release/:releaseID/:artistName/:releaseTitle"
          component={ReleasePage}
        />

        <Route 
          exact
          path="/song/:artistName/:recordingTitle"
          component={LyricsPage}
        />  

      </Switch>
    </Router>
  );
}
