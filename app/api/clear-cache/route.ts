'use server';

import { graphqlClient } from '@/utils';
import { gql } from 'graphql-request';
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

const getPostsToRevalidate = gql`
  {
    posts {
      nodes {
        slug
      }
    }
  }
`;

export async function GET() {
  const { posts } = (await graphqlClient.request(getPostsToRevalidate)) as {
    posts: {
      nodes: { slug: string }[];
    };
  };
  const slugs = posts.nodes.map((post) => post.slug);

  for (const slug of slugs) {
    revalidatePath(`reviews/${slug}`);
  }

  revalidateTag('global');

  return NextResponse.json({
    revalidated: true,
  });
}
