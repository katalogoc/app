import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams, Link } from 'react-router-dom';
import { GET_AUTHOR } from './GetAuthor.queries';
import { Author as AuthorInterface, Text } from '../../types';

interface RouteParams {
  id: string;
}

export function Author() {
  const params = useParams<RouteParams>();
  const { data, loading } = useQuery<{ author: AuthorInterface }>(GET_AUTHOR, {
    variables: {
      id: params.id,
    }
  });
  if (loading) {
    return <>'Loading...'</>;
  }
  return (
    <article>
      <h1>{data!.author.name}</h1>
      <h3>Has authored:</h3>
      <ul>
        {data!.author.texts.map((text: Text) => (
          <li>
            <Link to={`/texts/${text.id}`}>{text.title}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
