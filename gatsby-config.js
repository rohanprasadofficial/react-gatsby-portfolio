module.exports = {
  siteMetadata: {
    title: `Rohan Prasad`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@rohanprasadofficial`,
    youtube: `@rohanprasadofficial`,
    linkedin: `@rohanprasadofficial`,
    twitter: `@rohanpdofficial`,
    instagram: `@rohanprasadofficial`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rohan Prasad`,
        short_name: `Ro.`,
        start_url: `/`,
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
        crossOrigin: `use-credentials`,
        // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // Apply gatsby-mdx to both .mdx and .md files
        extensions: [".mdx", ".md"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`],
      },
    },
  ],
}
