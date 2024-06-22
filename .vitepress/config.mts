import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "biliticket",
  description: "biliticket 相关项目文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '指南', 
        link: '/guide/what-is-this',
        activeMatch: '/guide/' 
      }
      ,
      {
        text: 'BHYG', 
        link: '/bhyg/what-is-bhyg',
        activeMatch: '/bhyg/' 
      }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '这是什么', link: '/guide/what-is-this' },
          { text: '常见问题', link: '/guide/faq' }
        ]
      },
      {
        text: 'BHYG',
        items: [
          { text: '什么是BHYG', link: '/bhyg/what-is-bhyg' },
          { text: '快速开始', link: '/bhyg/quick-started' },
          { text: '安全性和隐私', link: '/bhyg/secure_and_privacy' },
          { text: '代理', link: '/bhyg/proxy' },
        ]
      },
      {
        text: '附录',
        items: [
          { text: '其他项目', link: '/other-projects' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/biliticket/biliticket-Docs' }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/biliticket/biliticket-Docs/edit/main/:path'
    }
  },

  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],

  lang: 'zh-CN',

  lastUpdated: true,
})
