import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `je-miralles.github.io`,
    siteUrl: `https://je-miralles.github.io`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: {
    typesOutputPath: `gatsby-types.d.ts`,
  },
  plugins: [
    'gatsby-plugin-postcss',
  ],
}

export default config
