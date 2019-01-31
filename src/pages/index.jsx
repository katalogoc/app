import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Authors from '../containers/Authors';

const customHistory = createBrowserHistory();

export default () => (
  <Router history={customHistory}>
    <Switch>
      <Route route="/authors" component={Authors} />
      <Route route="/feed" component={() => <div>Feed page</div>} />
    </Switch>
  </Router>
);
