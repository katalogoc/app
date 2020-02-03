import React from 'react';
import { preloadQuery, useRelayEnvironment, usePreloadedQuery } from 'react-relay/hooks';
import { useParams, Link } from 'react-router-dom';
import { GET_AUTHOR } from './GetAuthor.queries';
import { Author as AuthorInterface, Text } from '../../types';

interface RouteParams {
  id: string;
}
interface AuthorProps {}

export function Author({}: AuthorProps) {
  const params = useParams<RouteParams>();
  const environment = useRelayEnvironment();
  const preloadedQuery = preloadQuery(environment, GET_AUTHOR, {
    id: params.id,
  });

  const data: { author: AuthorInterface } = usePreloadedQuery(GET_AUTHOR, preloadedQuery) as any;
  return (
    <article>
      <h1>{data.author.name}</h1>
      <h3>Has authored:</h3>
      <ul>
        {data.author.texts.map((text: Text) => (
          <li>
            <Link to={`/texts/${text.id}`}>{text.title}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
