var dotenv = require("dotenv");
dotenv.config();

module.exports = {
  siteMetadata: {
    title: `OneShopper`,
    description: `E-Commerce site with Gatsby and React`,
    author: `@rohitguptab`,
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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OneShopper`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/oneshopper-logo.png`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `wsfyzsdbln1k`,
        accessToken: `w5Y6sQ33yKmk6REGb6ryzRy5Bntjjy0Ai5sLNBz1WaM`
      }
    },
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey: `ODRlZTI1OGUtMTMxMC00OWNjLTk3MGEtYTA3ZWUxMDRkNmRjNjM3MjQxOTEzMjkwNDY1MDUw`,
        autopop: true,
      },
    },
  ],
}
