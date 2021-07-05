module.exports = {
  logo: '/logo.png',
  repo: '',
  editLinks: false,
  docsDir: '',
  editLinkText: '',
  lastUpdated: false,
  searchMaxSuggestions: 10,
  // subNav: [],
  nav: [
    {
      text: 'Guide',
      link: '/guide/',
    },
    {
      text: 'Posts',
      link: '/_post/',
    },
    {
      text: 'Config',
      link: '/config/'
    }
  ],
  sidebar: {
    '/guide/': [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '',
          'using-vue',
        ]
      }
    ],
    '/_post/': [
      {
        title: 'Posts',
        collapsable: false,
        children: [
          '',
          'first-post',
        ]
      }
    ],
  },
  social: [
    {
      type: 'email',
      link: 'tuzov.n@gmail.com'
    },
    {
      type: 'github',
      link: 'JustSkiv'
    },
    // {
    //   type: 'feed',
    //   link: '/rss.xml'
    // },
  ],
  copyright: '© 2021 ❤️ <a target="_blank" href="https://tuzov.su/">Nikolay Tuzov</a>'
}