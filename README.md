### Get Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### ENV vars

I have included ENV vars into the notes in the submit link

#### context

This application is using the following tools

- Next.js (app directory) for **RSC** and using **TypeScript**
- **WPGraphQL** to pull in data
- WordPress as the CMS (using **ACF**)

#### Styling

For styling I am using `.SCSS` and `css variables`

#### Patterns

Components will have the following patterns

`/components/ComponentName/ComponentName.tsx`

with a sibling file

`/components/ComponentName/index.ts`

This enables cleaner imports like:
`import { ComponentA, ComponentB } from @/components`

#### GraphQL Queries

GraphlQL Queries are found in `@/queries`

#### TypeScript

Types are found in `@/types`

### Route Examples

---

#### Child Routes

Child routes make the `fetchPageData($slug) (path: api/get-page-data/$slug)` request. This request does the following:

It gets the slug template so it can use the associated graphql query

##### Templates that are supported

- Default
- Article
- Review

```
const pageTemplate = await getPageTemplate(slug);

   const templateQuery: TemplateQueryMap = {
      [Template.Default]: DefaultTemplateQuery,
      [Template.Reviews]: DefaultTemplateQuery,
      [Template.Landing]: LandingTemplateQuery,
      [Template.undefined]: LandingTemplateQuery,
    };

  const pageData = await gqlClient.request(
    templateQuery[pageTemplate as Template],
    {
      slug,
    },
  );

  return NextResponse.json({
    status: 200,
    data: pageData,
    template: pageTemplate,
  });
```

**and the [child]->page.tsx**
will use:

```
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

```
