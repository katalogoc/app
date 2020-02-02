import React from 'react';
import { preloadQuery, useRelayEnvironment, usePreloadedQuery } from 'react-relay/hooks';
import { GET_AUTHORS } from './GetAuthors.queries';
import { Author } from '../../types';

export function Authors() {
  const environment = useRelayEnvironment();
  const preloadedQuery = preloadQuery(environment, GET_AUTHORS, {});
  
  const data: { authors: Author[] } = usePreloadedQuery(GET_AUTHORS, preloadedQuery) as any;
  return <ul>{data.authors.map((a: Author) => <li>{a.name} has authored {a.texts.length} books!</li>)}</ul>;
};
