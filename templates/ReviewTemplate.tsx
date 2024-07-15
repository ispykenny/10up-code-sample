'use server';
import { Categories, Container, Reviews } from '@/components';
import { SearchParamTypes } from '@/types';
import Link from 'next/link';

export const ReviewTemplate = ({
  searchParams,
}: {
  searchParams: SearchParamTypes;
}) => {
  return (
    <main className="reviews-template">
      <section>
        <Reviews
          isLoaded
          searchParams={{
            orderBy: searchParams?.orderBy || 'DESC',
            take: searchParams?.take || 10,
            categoryName: searchParams?.categoryName || '',
          }}
        />
      </section>
    </main>
  );
};
