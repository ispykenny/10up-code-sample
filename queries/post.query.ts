import { gql } from 'graphql-request';

export const ReviewQuery = gql`
  query ReviewQuery($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      date
      reviewFields {
        rating
      }
      featuredImage {
        node {
          sourceUrl(size: LARGE)
        }
      }
      author {
        node {
          name
          username
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
`;
