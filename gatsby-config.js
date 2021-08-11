module.exports = {
  siteMetadata: {
    // siteUrl: "http://localhost:8000",
    title: "Procause-blog",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: `blog`,
    //     path: `${__dirname}/blog`,
    //   }
    // },
    "gatsby-plugin-mdx",
  {
    resolve: '@fika/gatsby-source-cockpit',
    options: {
      token: 'f38710c37bf97527a0dc3edfb1a0d0',
      baseUrl:'https://blogadmin.procause.org', // (1)
      locales: [], // (2)
      collections: [], // (3)
      singletons: [], // (4)
      // brokenImageReplacement: 'AN_URL_TO_AN_IMAGE', // (6)
    },
  },
  // {
  //   resolve: 'gatsby-source-cockpit-headless-cms',
  //   options: {
  //     cockpitConfig: {
  //       baseURL: 'https://blogadmin.procause.org',
  //       folder: '',
  //       accessToken: 'f38710c37bf97527a0dc3edfb1a0d0',
  //       collections: ['Blogs']
  //     },
  //   },
  // },
  ],
};
