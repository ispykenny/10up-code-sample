import { GetSeoByPageSlugQuery, GetSeoByPostSlugQuery } from '@/queries';
import { SeoByPageTypes, SeoByPostTypes } from '@/types';
import { graphqlClient } from '@/utils/graphqlClient';

export const getPageSeoBySlug = async (slug: string) => {
  const seoData: SeoByPageTypes = await graphqlClient.request(
    GetSeoByPageSlugQuery,
    {
      slug,
    },
  );

  return {
    title: seoData.pageBy.seo.title,
    description: seoData.pageBy.seo?.metaDesc,
    openGraph: {
      images: [
        {
          url: seoData.pageBy.seo?.opengraphImage?.sourceUrl,
        },
      ],
    },
  };
};

export const getPostSeoBySlug = async (slug: string) => {
  const seoData: SeoByPostTypes = await graphqlClient.request(
    GetSeoByPostSlugQuery,
    {
      slug,
    },
  );

  return {
    title: seoData.post.seo.title,
    description: seoData.post.seo?.metaDesc,
    openGraph: {
      images: [
        {
          url: seoData.post.seo?.opengraphImage?.sourceUrl,
        },
      ],
    },
  };
};
