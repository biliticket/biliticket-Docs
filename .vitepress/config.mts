import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BHYG",
  description: "BHYG 使用文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '指南', 
        link: '/guide/what-is-bhyg',
        activeMatch: '/guide/' 
      }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '什么是BHYG', link: '/guide/what-is-bhyg' },
          { text: '快速开始', link: '/guide/quick-started' },
          { text: '常见问题', link: '/guide/faq' }
        ]
      },
      {
        text: '拓展阅读',
        items: [
          { text: '安全性和隐私', link: '/extend/secure_and_privacy' },
          { text: '代理', link: '/extend/proxy' }
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
      { icon: 'github', link: 'https://github.com/ZianTT/BHYG' }
    ]
  }
})
