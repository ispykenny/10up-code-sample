import { gql } from 'graphql-request';

export const NavQuery = gql`
  query NavQuery {
    menus(where: { slug: "header" }) {
      nodes {
        menuItems {
          nodes {
            path
            label
          }
        }
      }
    }
  }
`;
