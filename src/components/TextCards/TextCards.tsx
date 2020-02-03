import React from 'react';
import { Text } from '../../types';
import { TextCard } from './TextCard';

interface TextCardsProps {
  texts: Text[];
}
export function TextCards({ texts }: TextCardsProps) {
  return (
    <ul>
      {texts.map((text: Text) => (
        <li>
          <TextCard text={text} />
        </li>
      ))}
    </ul>
  );
}
