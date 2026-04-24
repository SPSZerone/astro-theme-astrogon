
export type Navigation = {
  path: string;
  label: string;
};

export const site = {
  theme: 'astrogon',

  navEnable: true,
  homeSiteEnable: true,

  navigations: [
    {
      path: 'portfolio',
      label: 'View portfolios <br/> 我的作品',
    },
    {
      path: 'blog',
      label: 'Read Blog <br/> 我的博客',
    },
  ] satisfies Navigation[],

} as const;
