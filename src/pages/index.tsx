import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { Authors } from './Authors';
import { Texts } from './Texts';

export default () => (
  <Switch>
    <Route exact path="/texts">
      <Suspense fallback="Loading texts...">
        <Texts />
      </Suspense>
    </Route>
    <Route exact path="/authors">
      <Suspense fallback="Loading authors...">
        <Authors />
      </Suspense>
    </Route>
  </Switch>
);
