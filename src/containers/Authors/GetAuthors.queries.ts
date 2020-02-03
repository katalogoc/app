import graphql from 'babel-plugin-relay/macro';

export const GET_AUTHORS = graphql`
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