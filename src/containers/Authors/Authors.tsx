import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_AUTHORS } from './GetAuthors.queries';
import { AuthorCards } from '../../components/AuthorCards';

export function Authors() {
  const { data, loading } = useQuery(GET_AUTHORS);
  return loading ? <>Loading...</> : <AuthorCards authors={data!.authors} />;
}
