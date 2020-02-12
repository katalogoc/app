import gql from 'graphql-tag';

export const GET_TEXT = gql`
  query GetTextQuery($id: ID!) {
    text(id: $id) {
      id
      title
      url
      authors {
        id
        name
      }
    }
  }
`;
