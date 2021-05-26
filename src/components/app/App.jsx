import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Search from '../../containers/Search';
import Artist from '../../containers/Artist';

export default function App() {
  return (
    <Router>
      <Switch>

        <Route 
          path="/"
          exact
          component={Search}
        />

        <Route 
          path="/artist/:artistID"
          exact
          component={Artist}
        />

        {/* <Route 
          path="/release/:releaseID"
        />

        <Route 
          path="/song/:songID"
        /> */}

      </Switch>
    </Router>
  );
}
