import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { Query, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import { hot } from 'react-hot-loader/root';
import { resolvers, typeDefs } from './resolvers';
import Pages from './pages';
import Login from './pages/Login';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: process.env.API_URL,
    headers: {
      authorization: localStorage.getItem('token'),
      'client-name': 'hyped-text',
      'client-version': '1.0.0',
    },
  }),
  initializers: {
    isLoggedIn: () => !!localStorage.getItem('token'),
  },
  resolvers,
  typeDefs,
});

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const App = () => (
  <ApolloProvider client={client}>
    <Query query={IS_LOGGED_IN}>{({ data }) => (data.isLoggedIn ? <Pages /> : <Login />)}</Query>
  </ApolloProvider>
);

export default hot(App);
