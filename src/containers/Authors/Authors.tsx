import React from 'react';
import { preloadQuery, useRelayEnvironment, usePreloadedQuery } from 'react-relay/hooks';
import { GET_AUTHORS } from './GetAuthors.queries';
import { Author } from '../../types';
import  { AuthorCards } from '../../components/AuthorCards';

export function Authors() {
  const environment = useRelayEnvironment();
  const preloadedQuery = preloadQuery(environment, GET_AUTHORS, {});
  
  const data: { authors: Author[] } = usePreloadedQuery(GET_AUTHORS, preloadedQuery) as any;
  return <AuthorCards authors={data.authors} />;
};
