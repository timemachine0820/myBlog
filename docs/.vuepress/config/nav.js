module.exports = [
  { text: '主页', link: '/' },
  {
    text: '分类',
    icon: 'reco-category',
    items: [
      {
        text: '',
        items: [
          { text: 'blog搭建', link: '/views/Study/blog.md' },
          { text: 'vue', link: '/views/Study/vue.md' }
        ]
      },
      {
        text: '',
        items: [
          { text: '历程', link: '/views/Mark/idea.md' },
          { text: '想法', link: '/views/Mark/route.md' }
        ]
      }
    ]
  },
  {
    text: '时间线',
    link: '/timeline/',
    icon: 'reco-date'
  },
  {
    text: '留言板',
    link: '/views/Others/messageBoard.md',
    icon: 'reco-message'
  },
  { text: '关于', link: 'https://google.com' }
]
