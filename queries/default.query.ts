import { gql } from 'graphql-request';

export const DefaultTemplateQuery = gql`
  query DefaultTemplateQuery($slug: String!) {
    pageBy(uri: $slug) {
      title
      content
    }
  }
`;
