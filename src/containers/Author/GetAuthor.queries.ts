import graphql from 'babel-plugin-relay/macro';

export const GET_AUTHOR = graphql`
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