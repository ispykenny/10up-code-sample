'use server';

import { gql } from 'graphql-request';
import { graphqlClient } from '@/utils';

type pageTemplateProps = {
  pageBy: {
    template: {
      templateName: string;
    };
  };
};

export const getPageTemplate = async (slug: string): Promise<string> => {
  const GET_TEMPLATE = gql`
    query GetPageTemplate($slug: String!) {
      pageBy(uri: $slug) {
        template {
          templateName
        }
      }
    }
  `;

  const pageTemplate = (await graphqlClient.request(GET_TEMPLATE, {
    slug,
  })) as pageTemplateProps;

  return pageTemplate.pageBy.template.templateName;
};
