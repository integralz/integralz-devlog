module.exports = {
  siteMetadata: {
    title: `integralz's DevBlog`,
    siteUrl: `https://integralz-dev.netlify.app/`,
    description: ``,
    topics: [],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Posts',
        path: '/page'
      },
    ],
    footerMenu: [
      {
        name: 'Posts',
        path: '/page'
      },
    ],
    search: true,
    author: {
      name: `integralz`,
      description: `Hello! I'm <strong>integralz</strong>. If you like my blog
        <a href="https://github.com/integralz" rel="noopener" target="_blank">follow my GitHub!</a>`,
      social: {
        facebook: ``,
        twitter: ``,
        linkedin: ``,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/integralz`,
        twitch: ``
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/cinamonroll.png`
        }
      }
    }
  ]
};
