import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { GET_TEXT } from './GetText.queries';
import { Text as TextInterface } from '../../types';

interface TextRouteParam {
  id: string;
}

interface TextResponse {
  text: TextInterface;
}

export function Text() {
  const params = useParams<TextRouteParam>();
  const { data, loading } = useQuery<TextResponse>(GET_TEXT, {
    variables: {
      id: params.id,
    },
  });
  return loading ? (
    <>Loading...</>
  ) : (
    <div>
      <h1>{data!.text.title}</h1>
      <p>Links:</p>
      <ul>
        <li>
          <a href={data!.text.url!} target="_blank" rel="noopener noreferrer">
            {data!.text.url}
          </a>
        </li>
      </ul>
    </div>
  );
}
