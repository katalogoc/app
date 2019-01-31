import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_AUTHORS = gql`
  query authors {
    authors {
      id
      nickname
      articles {
        id
        title
        text
        author {
          id
          nickname
        }
      }
    }
  }
`;

export default () => (
  <Query query={GET_AUTHORS}>
    {({ data: { authors } }) => (
      <div>
        {authors && authors.length ? (
          authors.map(author => <div>{author.nickname}</div>)
        ) : (
          <div>The are no authors yet :(</div>
        )}
      </div>
    )}
  </Query>
);
