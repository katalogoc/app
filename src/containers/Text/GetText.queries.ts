import graphql from 'babel-plugin-relay/macro';

export const GET_TEXT = graphql`
  query GetTextQuery($id: ID!) {
    text(id: $id) {
      id
      title
      url
      content
      authors {
        id
        name
      }
    }
  }
`;