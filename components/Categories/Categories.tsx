import { CategoryQuery } from '@/queries';
import { CategoryTypes } from '@/types';
import { graphqlClient } from '@/utils';
import Link from 'next/link';

export const Categories = async () => {
  const { categories }: { categories: CategoryTypes } =
    await graphqlClient.request(CategoryQuery);

  return (
    <ul>
      {categories.nodes.map((category) => (
        <li key={category.slug}>
          <Link href={`/reviews?categoryName=${category.slug?.toLowerCase()}`}>
            {category.name} (count: {category.count})
          </Link>
        </li>
      ))}
    </ul>
  );
};
