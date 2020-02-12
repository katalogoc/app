import React from 'react';
import { Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { createBrowserHistory } from 'history';
import { client } from './client';
import App from './App';

export function AppRoot() {
  return (
    <ApolloProvider client={client}>
      <Router history={createBrowserHistory()}>
        <App />
      </Router>
    </ApolloProvider>
  );
}
