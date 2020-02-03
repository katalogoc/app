import React from 'react';
import { Text } from '../../types';
import { Link } from 'react-router-dom';

interface TextCardProps {
  text: Text;
}

export function TextCard({ text }: TextCardProps) {
  return (
    <article>
      <header>
        <h1>
          <Link to={`/texts/${text.id}`}>{text.title}</Link>
        </h1>
        <p>{text.title} was written by {text.authors?.map(a => a.name).join(', ')}</p>
      </header>
    </article>
  )
}