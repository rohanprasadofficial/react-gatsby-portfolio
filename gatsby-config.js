module.exports = {
  siteMetadata: {
    title: `Rohan Prasad`,
    description: `Rohan is a Software Engineer based in India , currently working at Microsoft as a UX Developer - Consultant`,
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
        background_color: "#00000",
        theme_color: "#ffffff",
        display: `standalone`,
        icon: `src/images/logo.png`,
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
