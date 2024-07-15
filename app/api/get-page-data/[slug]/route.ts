import { DefaultTemplateQuery, LandingTemplateQuery } from '@/queries';
import {
  getPageTemplate,
  graphqlClient,
  Template,
  TemplateQueryMap,
} from '@/utils';
import { NextResponse } from 'next/server';

type ContextTypes = {
  params: {
    slug: string;
  };
};

export async function GET(request: Request, context: ContextTypes) {
  const slug = context.params.slug;

  try {
    const pageTemplate = await getPageTemplate(slug);

    const templateQuery: TemplateQueryMap = {
      [Template.Default]: DefaultTemplateQuery,
      [Template.Reviews]: DefaultTemplateQuery,
      [Template.Landing]: LandingTemplateQuery,
      [Template.undefined]: LandingTemplateQuery,
    };

    const pageData = await graphqlClient.request(
      templateQuery[pageTemplate as Template],
      { slug },
    );

    return NextResponse.json({
      status: 200,
      data: pageData,
      template: pageTemplate,
    });
  } catch (error) {
    console.error('Error fetching page data:', error);

    return NextResponse.json({
      status: 500,
      error: 'Internal Server Error',
    });
  }
}
