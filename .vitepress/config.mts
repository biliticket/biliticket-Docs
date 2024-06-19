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
          { text: '快速开始', link: '/guide/quick-started' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZianTT/BHYG' }
    ]
  }
})
