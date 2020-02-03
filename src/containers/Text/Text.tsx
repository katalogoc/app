import React from 'react';
import { preloadQuery, useRelayEnvironment, usePreloadedQuery } from 'react-relay/hooks';
import { useParams } from 'react-router-dom';
import { GET_TEXT } from './GetText.queries';
import { Text as TextInterface } from '../../types';

interface TextRouteParam {
  id: string;
}

export function Text() {
  const params = useParams<TextRouteParam>();
  const environment = useRelayEnvironment();
  const preloadedQuery = preloadQuery(environment, GET_TEXT, {
    id: params.id,
  });
  const data: { text: TextInterface } = usePreloadedQuery(GET_TEXT, preloadedQuery) as any;
  return (
    <div>
      <h1>{data.text.title}</h1>
      {data.text.content}
    </div>
  );
}
