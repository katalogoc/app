import React from 'react';
import { preloadQuery, useRelayEnvironment, usePreloadedQuery } from 'react-relay/hooks';
import { GET_TEXTS } from './GetTexts.queries';
import { Text } from '../../types';

export function Texts() {
  const environment = useRelayEnvironment();
  const preloadedQuery = preloadQuery(environment, GET_TEXTS, {});
  const data: { texts: Text[] } = usePreloadedQuery(GET_TEXTS, preloadedQuery) as any;
  return (
    <ul>
      {data.texts.map((t: Text) => (
        <li>
          {t.title} was written by {t.authors?.map(a => a.name).join(', ')}
        </li>
      ))}
    </ul>
  );
};
