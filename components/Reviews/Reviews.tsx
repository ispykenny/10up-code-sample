'use server';

import { PostQuery } from '@/queries';
import { PostsTypes, ReviewProps } from '@/types';
import { graphqlClient } from '@/utils';
import { ReviewsClient } from './ReviewsClient';

export const Reviews = async ({ searchParams, isLoaded }: ReviewProps) => {
  const { posts }: { posts: PostsTypes } = await graphqlClient.request(
    PostQuery,
    {
      categoryName: searchParams?.categoryName || '',
      order: searchParams?.orderBy?.toUpperCase() || 'DESC',
      take: searchParams?.take || 10,
    },
  );
  const reviews = posts.nodes;
  return <ReviewsClient isLoaded={!!isLoaded} reviews={reviews} />;
};
