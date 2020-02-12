import gql from 'graphql-tag';

export const GET_AUTHOR = gql`
  query GetAuthorQuery($id: ID!) {
    author(id: $id) {
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