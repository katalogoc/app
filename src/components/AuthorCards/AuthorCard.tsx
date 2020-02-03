import React from 'react';
import { Author } from '../../types';
import { Link } from 'react-router-dom';

interface AuthorCardProps {
  author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <article>
      <header>
        <h1>
          <Link to={`/authors/${author.id}`}>{author.name}</Link>
        </h1>
        <p>{author.name} has authored {author.texts.length} books!</p>
      </header>
    </article>
  )
}