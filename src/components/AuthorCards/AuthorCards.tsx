import React from 'react';
import { Author } from '../../types';
import { AuthorCard } from './AuthorCard';

interface AuthorCardsProps {
  authors: Author[];
}
export function AuthorCards({ authors }: AuthorCardsProps) {
  return (
    <ul>
      {authors.map((author: Author) => (
        <li>
          <AuthorCard author={author} />
        </li>
      ))}
    </ul>
  );
}
