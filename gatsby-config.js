module.exports = {
  siteMetadata: {
    title: `Cameron Omiccioli-Akhmetova`,
    description: `Cameron Omiccioli-Akhmetova's Portfolio Website`,
    author: `@caomicc`,
  },
  plugins: [
    `gatsby-plugin-glamor`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#1fa2ff`,
        theme_color: `#1fa2ff`,
        display: `minimal-ui`,
        icon: `src/images/apple-touch-icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        storageKey: 'darkMode',
        minify: true,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: "linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)",
        // Height of the scroll indicator
        height: "5px",
        // Configure the z-index of the indicator element
        zIndex: `9999`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
