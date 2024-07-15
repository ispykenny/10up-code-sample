import { gql } from 'graphql-request';

export const CategoryQuery = gql`
  {
    categories {
      nodes {
        count
        name
        slug
      }
    }
  }
`;
