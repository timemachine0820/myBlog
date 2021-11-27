const nav = require('./config/nav')

module.exports = {
  theme: 'reco',
  title: "Tao's blog",
  description: '干饭中，小等一会儿，马上就来',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    //移动端优化:在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化。
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  themeConfig: {
    type: 'blog', // 设置为Blog类型
    author: 'Tao', // 全局作者
    authorAvatar: '/img/profile.jpg', // 设置首页右侧信息栏头像
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认文案 “标签”
      }
    },
    nav, //nav:nav
    logo: '/img/naruto.jpg', //nav左侧的小logo
    subSidebar: 'auto', ////在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // vssueConfig: { //vssue配置
    //   platform: 'github',
    //   owner: 'timemachine0820',
    //   repo: 'test2021_11_22', // 待更改
    //   clientId: 'f564fd82c2663c4e46d1',
    //   clientSecret: '41682c9244f493fa7a8e5854171bbd1ac1d5cb15',
    // },
    valineConfig: {
      appId: 'qJNGmMywsungYjCaDn9Qp44Q-gzGzoHsz',
      appKey: 'w599eX9aucb0xuyF2w95ekTE',
      recordIP: true,
      meta: ['nick', 'mail'],
      placeholder: '请输入你的留言....',
      visitor: true
    }
  },
  markdown: {
    lineNumbers: true //代码显示行号
  },
  plugins: {
    // 看板娘插件
    '@vuepress-reco/vuepress-plugin-kan-ban-niang': {
      theme: ['blackCat'],
      clean: false,
      messages: {
        welcome: '你来啦 ',
        home: '进来坐坐',
        theme: '好吧，希望你能喜欢我的其他小伙伴。',
        close: '再见啦'
      },
      width: 150,
      height: 219
    },
    // 阅读进度条: "vuepress-plugin-reading-progress"
    'reading-progress': true,
    //一键复制代码插件: "vuepress-plugin-code-copy"
    'vuepress-plugin-code-copy': true,
    // vuepress-plugin-dynamic-title
    'dynamic-title': {
      showIcon: '/favicon.ico',
      showText: '',
      hideIcon: '/failure.ico',
      hideText: '嘿！咋走啦',
      recoverTime: 2000
    },
    // （依托于 git commit）： 文章最后更新时间转换
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).format('llll')
      }
    },
    '@vuepress/medium-zoom': {
      selector: 'img',
      options: {
        margin: 16
      }
    },
    //vuepress-plugin-meting: 音乐播放器
    meting: {
      meting: {
        // 网易
        server: 'netease',
        // 读取歌单列表
        type: 'playlist',
        mid: '2149257577'
      },
      // 不配置该项的话不会出现全局播放器
      aplayer: {
        // 吸底模式
        fixed: true,
        mini: true,
        // 自动播放
        autoplay: true,
        // 歌曲栏折叠
        listFolded: true,
        // 颜色
        theme: '#f9bcdd',
        // 播放顺序为随机
        order: 'random',
        // 初始音量
        volume: 0.3,
        // 关闭歌词显示
        lrcType: 0
      },
      mobile: {
        // 手机端去掉cover图
        cover: false
      }
    }
  }
}
