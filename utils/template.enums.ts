export enum Template {
  Default = 'Default',
  Reviews = 'Reviews',
  Landing = 'Landing',
  undefined = 'undefined',
}

export type TemplateQueryMap = {
  [key in Template]: string;
};
