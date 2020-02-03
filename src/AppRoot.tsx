import React from 'react';
import App from './App';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import environment from './environment';

export function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Router history={createBrowserHistory()}>
        <App />
      </Router>
    </RelayEnvironmentProvider>
  );
}
