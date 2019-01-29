import React from 'react';
import { Router, Route } from 'react-router';

export default () => (
  <Router>
    <Route route="/feed" component={() => <div>Feed page</div>} />
  </Router>
);
