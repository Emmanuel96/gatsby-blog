require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
      token: process.env.COCKPIT_TOKEN,
      baseUrl:process.env.COCKPIT_BASE_URL,// (1)
      locales: [], // (2)
      collections: [], // (3)
      singletons: [], // (4)
      // brokenImageReplacement: 'AN_URL_TO_AN_IMAGE', // (6)
    },
  },
  "gatsby-plugin-react-helmet", 
  {
    resolve: 'gatsby-plugin-load-script',
    options: {
      // src: "https://code.jquery.com/jquery-3.6.0.js",
      // src: '/modernizr-3.6.0.min.js', 
      // src: '/jquery-migrate-3.1.0.min.js',
      // src:'/bootstrap.bundle.min.js',
      // src:'/parallax.min.js',
      // src:'/jquery.ajaxchimp.min.js',
      // src: ['/main.js'],
      // src:'/vendor.min.js',
      // src:'/plugins.min.js',
      src: '/jquery-3.4.1.min.js'
    },
  },
  ],
};
