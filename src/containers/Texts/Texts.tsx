import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_TEXTS } from './GetTexts.queries';
import { Text } from '../../types';
import { TextCards } from '../../components/TextCards';

interface TextResponse {
  texts: Text[];
}

export function Texts() {
  const { data, loading } = useQuery<TextResponse>(GET_TEXTS);
  return loading ? <>Loading...</> : <TextCards texts={data!.texts} />;
}
