import { gql } from 'graphql-request';

export const PostQuery = gql`
  query PostQuery($categoryName: String, $order: OrderEnum!, $take: Int) {
    posts(
      where: {
        categoryName: $categoryName
        orderby: { field: DATE, order: $order }
      }
      first: $take
    ) {
      nodes {
        title
        slug
        date
        reviewFields {
          rating
        }
        featuredImage {
          node {
            sourceUrl(size: MOVIE_TRAILER)
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
      }
    }
  }
`;
