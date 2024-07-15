export type SeoTypes = {
  seo: {
    title: string;
    metaDesc: string;
    opengraphImage: {
      sourceUrl: string;
    };
  };
};

export type SeoByPageTypes = {
  pageBy: SeoTypes;
};

export type SeoByPostTypes = {
  post: SeoTypes;
};
