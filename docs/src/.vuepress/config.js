module.exports = {
  title: "JustSkiv's blog",
  description: "some description",
  // port: 8080
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4'],
    plugins: {
      'markdown-it-mark': true,
      'markdown-it-footnote': true,
      'markdown-it-abbr': true,
      'markdown-it-task-lists': true
    },
  },

  theme: 'vuepress-theme-justskiv',

  head: [
    ['meta', {name: 'theme-color', content: '#3eaf7c'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', {rel: "shortcut icon", href: "/favicon.ico"}],
  ],

  // wordPerminute: {cn: 300, en: 160},
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: require('./config/themeConfig'),

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/blog', {
      globalPagination: {
        prevText: '',
        nextText: ''
      },
      directories: [
        {
          id: 'post',
          dirname: '_post',
          path: '/post/',
          itemPermalink: '/post/:year/:month/:day/:slug',
          pagination: {
            perPagePosts: 10,
          },
        }
      ],
      frontmatters: [
        {
          id: "tag",
          keys: ['tag', 'tags'],
          path: '/tags/',
          frontmatter: {title: 'Tag'},
          pagination: {
            lengthPerPage: 10
          }
        },
        {
          id: "category",
          keys: ['category', 'categories'],
          path: '/categories/',
          frontmatter: {title: 'Category'},
          pagination: {
            lengthPerPage: 10
          }
        }
      ],
      sitemap: {
        hostname: 'http://blog.tuzov.su/'
      },
      feed: {
        canonical_base: 'http://blog.tuzov.su/',
      },
      // comment: {
      //   service: 'vssue',
      //   owner: '80maker',
      //   repo: '80maker.github.io',
      //   clientId: 'Iv1.57b5c522319529f6',
      //   clientSecret: '7ad0e3d1455a2d6425c813b37a0526e9bd820657',
      // }
    }],
    // '@vuepress/plugin-back-to-top',
    // '@vuepress/plugin-medium-zoom',
  ]
}
