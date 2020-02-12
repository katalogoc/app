import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();

export const client = new ApolloClient({
  link: ApolloLink.from([
    new HttpLink({
      uri: process.env.API_URL!,
      credentials: 'same-origin',
    }),
  ]),
  cache,
} as any);
