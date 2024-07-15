import { Container, Hero } from '@/components';
import { PostTypes } from '@/types';
import dayjs from 'dayjs';
import Image from 'next/image';

export const ArticleTemplate = ({ post }: { post: PostTypes }) => {
  return (
    <main className="article-template">
      <Hero
        data={{
          includeRating: parseInt(post.reviewFields.rating[0]),
          heroTitle: post.title,
          heroTagline: `Posted on ${dayjs(post.date).format('MMMM DD, YYYY')}`,
          backgroundImage: {
            node: {
              sourceUrl: post.featuredImage.node.sourceUrl,
            },
          },
        }}
      />
      <section className="article">
        <Container size="sm">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Container>
      </section>

      <section className="articleAuthor">
        <Container size="sm">
          <div className="articleAuthor__inner">
            By: {post.author.node.name}
            {post.author.node.avatar && (
              <Image
                src={post.author.node.avatar.url}
                alt={post.author.node.name}
                width={30}
                height={30}
              />
            )}{' '}
          </div>
          <div className="articleTags">
            {post.categories.nodes.map((category, index: number) => (
              <span key={index}>{category.name}</span>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};
