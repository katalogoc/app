import graphql from 'babel-plugin-relay/macro';

export const GET_AUTHORS = graphql`
  query GetAuthorsQuery {
    authors {
      id
      name
      alias
      texts {
        id
        title
      }
    }
  }
`;