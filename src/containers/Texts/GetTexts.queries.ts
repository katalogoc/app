import gql from 'graphql-tag';

export const GET_TEXTS = gql`
  query GetTextsQuery {
    texts {
      id
      title
      authors {
        id
        name
      }
    }
  }
`;
