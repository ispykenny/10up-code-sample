import { Container } from '@/components';
import { PageTypes } from '@/types';

export const DefaultTemplate = ({ data }: { data: PageTypes }) => {
  return (
    <main className="default-template">
      <section>
        <Container size="sm">
          <h1>{data.title}</h1>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </Container>
      </section>
    </main>
  );
};
