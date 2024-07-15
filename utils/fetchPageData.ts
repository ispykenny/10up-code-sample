import { ROUTES } from './routes';

export const fetchPageData = async (slug: string) =>
  fetch(ROUTES.GET_PAGE + `/${slug}`, {
    next: {
      tags: ['cache'],
    },
  });
