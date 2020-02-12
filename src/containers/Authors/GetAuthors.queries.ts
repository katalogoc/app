import gql from 'graphql-tag';

export const GET_AUTHORS = gql`
  query GetAuthorsQuery {
    authors {
      id
      name
      alias
      thumbnail
      texts {
        id
        title
      }
    }
  }
`;
