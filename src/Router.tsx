import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { Authors } from './containers/Authors';
import { Texts } from './containers/Texts';
import { Text } from './containers/Text';
import { Author } from './containers/Author';

export function Router() {
  return (
    <Switch>
      <Route exact path="/texts">
        <Suspense fallback="Loading texts...">
          <Texts />
        </Suspense>
      </Route>
      <Route exact path="/texts/:id">
        <Suspense fallback="Loading text...">
          <Text />
        </Suspense>
      </Route>
      <Route exact path="/authors">
        <Suspense fallback="Loading authors...">
          <Authors />
        </Suspense>
      </Route>
      <Route exact path="/authors/:id">
        <Suspense fallback="Loading author info...">
          <Author />
        </Suspense>
      </Route>
    </Switch>
  );
}
