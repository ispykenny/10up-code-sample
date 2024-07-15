import { gql } from 'graphql-request';

export const LandingTemplateQuery = gql`
  query LandingTemplateQuery($slug: String!) {
    pageBy(uri: $slug) {
      hero {
        heroTitle
        heroTagline
        backgroundImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
