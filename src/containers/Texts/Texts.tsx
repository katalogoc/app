import React from 'react';
import { preloadQuery, useRelayEnvironment, usePreloadedQuery } from 'react-relay/hooks';
import { GET_TEXTS } from './GetTexts.queries';
import { Text } from '../../types';
import { TextCards } from '../../components/TextCards';

export function Texts() {
  const environment = useRelayEnvironment();
  const preloadedQuery = preloadQuery(environment, GET_TEXTS, {});
  const data: { texts: Text[] } = usePreloadedQuery(GET_TEXTS, preloadedQuery) as any;
  return (
    <TextCards texts={data.texts} />
  );
};
