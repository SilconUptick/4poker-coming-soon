module.exports = {
  siteMetadata: {
    title: `4Poker`,
    description: `4Poker`,
    author: `@silcon-dev`,
    siteUrl: `https://4poker.eu`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        formats: [`auto`, `webp`],
        placeholder: `dominantColor`,
        quality: 75,
        name: `4Poker`,
        short_name: `4Poker`,
        start_url: `/`,
        background_color: `transparent`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
