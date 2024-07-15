import { Hero, Reviews } from '@/components';
import { SearchParamTypes } from '@/types';
import { fetchPageData, getPageSeoBySlug, graphqlClient } from '@/utils';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getPageSeoBySlug('home');
  return {
    ...seoData,
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParamTypes;
}) {
  const fetchData = await fetchPageData('home');
  const { status, data } = await fetchData.json();

  if (status !== 200) {
    return <div>Error: {status}</div>;
  }

  return (
    <main>
      <Hero data={data.pageBy.hero} />
      <section className="reviews-on-home">
        <Reviews searchParams={searchParams} />
      </section>
    </main>
  );
}
