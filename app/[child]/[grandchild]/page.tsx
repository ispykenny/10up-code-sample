import { ReviewQuery } from '@/queries';
import { ArticleTemplate, DefaultTemplate } from '@/templates';
import {
  fetchPageData,
  getPageSeoBySlug,
  getPostSeoBySlug,
  graphqlClient,
  Template,
} from '@/utils';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: {
    child: string;
    grandchild: string;
  };
}): Promise<Metadata> {
  const slug = params.child;
  const nestedSlug = params.grandchild;
  const seoData =
    slug === 'reviews'
      ? await getPostSeoBySlug(nestedSlug)
      : await getPageSeoBySlug(slug);
  return {
    ...seoData,
  };
}

export default async function GrandChildPage({
  params,
}: {
  params: {
    child: string;
    grandchild: string;
  };
}) {
  // handle blog page logic
  // for sample safe to assume if child route is 'reviews' then it's a blog page
  if (params.child === 'reviews') {
    const { post } = (await graphqlClient.request(ReviewQuery, {
      slug: params.grandchild,
    })) as any;
    return <ArticleTemplate post={post} />;
  }

  // if not from reviews slug then assume it's a page slug
  const fetchData = await fetchPageData(params.grandchild);
  const { status, data, template } = await fetchData.json();

  if (status !== 200) {
    return <div>Error: {status}</div>;
  }

  const templates: { [key: string]: JSX.Element } = {
    [Template.Default]: <DefaultTemplate data={data.pageBy} />,
  };
  const TemplateComponent = templates[template] || <>Page not found</>;
  return TemplateComponent;
}
