import { gql } from 'graphql-request';

export const GetSeoByPageSlugQuery = gql`
  query GetSeoByPageSlugQuery($slug: String!) {
    pageBy(uri: $slug) {
      seo {
        title
        metaDesc
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
`;

export const GetSeoByPostSlugQuery = gql`
  query GetSeoByPageSlugQuery($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      seo {
        metaDesc
        title
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
`;
