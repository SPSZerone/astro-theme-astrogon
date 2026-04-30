
export type Navigation = {
  path: string;
  label: string;
};

export const site = {
  theme: 'astrogon',

  title: "Astrogon - William Chen - 陈威 - SPS",
  description: "My personal websize",
  image: "@assets/profile/avatar.png",
  author: "William Chen - 陈威",
  baseUrl: "https://astrogon.me.seapianosnow.com",

  navEnable: true,
  homeSiteEnable: true,

  navigations: [
    {
      path: 'portfolio',
      label: 'View Portfolios <br/> 我的作品',
    },
    {
      path: 'blog',
      label: 'Read Blog <br/> 我的博客',
    },
  ] satisfies Navigation[],

} as const;
