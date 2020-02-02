import graphql from 'babel-plugin-relay/macro';

export const GET_TEXTS = graphql`
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