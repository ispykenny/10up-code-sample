import { DefaultTemplate, ReviewTemplate } from '@/templates';
import { SearchParamTypes } from '@/types';
import { fetchPageData, getPageSeoBySlug, Template } from '@/utils';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: {
    child: string;
  };
}): Promise<Metadata> {
  const slug = params.child;
  const seoData = await getPageSeoBySlug(slug);
  return {
    ...seoData,
  };
}

export default async function ChildPage({
  params,
  searchParams,
}: {
  params: {
    child: string;
  };
  searchParams: SearchParamTypes;
}) {
  const fetchData = await fetchPageData(params.child);
  const { status, data, template } = await fetchData.json();

  if (status !== 200) {
    return <div>Error: {status}</div>;
  }

  const templates: { [key: string]: JSX.Element } = {
    [Template.Default]: <DefaultTemplate data={data.pageBy} />,
    [Template.Reviews]: <ReviewTemplate searchParams={searchParams} />,
  };
  const TemplateComponent = templates[template] || <>Page not found</>;
  return TemplateComponent;
}
