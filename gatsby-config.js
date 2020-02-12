require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    author: 'Juliano Farias',
    siteTitle: `Juliano's blog`,
    siteTitleAlt: `Juliano Farias - Front End Engineer`,
    siteImage: `./banner.jpg`,
    siteLanguage: `en-US`,
    siteDescription: `A place about me and my thoughts`,
    siteUrl: `https://iamjuliano.dev`,
    siteHeadline: `Juliano Farias - Front End Engineer`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/frontendwizard`,
          },
          {
            name: `Github`,
            url: `https://www.github.com/thefrontendwizard/`,
          },
          {
            name: `DEV`,
            url: `https://www.dev.to/frontendwizard/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `iamjuliano.dev`,
        short_name: `iamjuliano.dev`,
        description: `A blog about front end development and anything else that pops into a mind of a front end engineer.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
