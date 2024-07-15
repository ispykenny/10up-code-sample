export type ImageTypes = {
  node: {
    sourceUrl: string;
    alt?: string;
    mediaDetails?: {
      width: number;
      height: number;
    };
  };
};

export type HeroTypes = {
  heroTitle: string;
  heroTagline: string;
  backgroundImage: ImageTypes;
  includeRating?: number;
};

export type ReviewFieldsTypes = {
  rating: string[];
};

export type AuthorTypes = {
  node: {
    name: string;
    username: string;
    avatar: {
      url: string;
    };
  };
};

export type CategoryTypes = {
  nodes: {
    name: string;
    slug: string;
    count: number;
  }[];
};

export type PostTypes = {
  title: string;
  content: string;
  date: string;
  slug: string;
  reviewFields: ReviewFieldsTypes;
  featuredImage: ImageTypes;
  author: AuthorTypes;
  categories: CategoryTypes;
};

export type PostsTypes = {
  nodes: PostTypes[];
};

export type PageTypes = {
  title: string;
  content: string;
};

export type MenuItemTypes = {
  label: string;
  path: string;
}[];

export type MenuTypes = {
  menus: {
    nodes: {
      menuItems: {
        nodes: MenuItemTypes;
      };
    }[];
  };
};

export type SearchParamTypes = {
  categoryName: string;
  orderBy: 'DESC' | 'ASC';
  take: number;
};

export type ReviewProps = {
  isLoaded?: boolean;
  searchParams: SearchParamTypes;
};
