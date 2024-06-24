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
          { text: '最佳实践', link: '/bhyg/best-practice'},
          { text: '进阶使用', link: '/bhyg/advanced'},
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

  head: [['link', { rel: 'icon', href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='500' height='500' viewBox='0 0 500 500'%3E%3Cdefs%3E%3CclipPath id='clip-biliticket'%3E%3Crect width='500' height='500'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg id='biliticket' clip-path='url(%23clip-biliticket)'%3E%3Cpath id='1' d='M-4.21-390.422,39.528-629.743H71.869c6.217-17.26,11.81-31.608,17.1-43.862a276.89,276.89,0,0,1,15.5-31.33c5.036-8.486,9.749-14.635,14.409-18.8a28.054,28.054,0,0,1,6.949-4.7A16.551,16.551,0,0,1,132.687-730a16.381,16.381,0,0,1,6.836,1.567,27.434,27.434,0,0,1,6.873,4.7c4.593,4.163,9.207,10.312,14.105,18.8a271.678,271.678,0,0,1,15,31.33c5.089,12.258,10.45,26.605,16.388,43.862h36.653L273.2-390.422ZM133.675-710.236c-4.426,0-9.447,4.156-14.924,12.352-4.381,6.557-9.062,15.7-13.913,27.175-8.257,19.533-14.224,39.33-14.284,39.528h83.367c-.049-.186-5.295-19.982-12.847-39.528-4.434-11.475-8.782-20.618-12.925-27.175C142.971-706.08,138.1-710.236,133.675-710.236Z' transform='translate(115.504 810.211)' fill='%23ff2764'/%3E%3Cpath id='2' d='M115.441,106.8l18.873,18.878h18.459L171.651,106.8a5.824,5.824,0,1,1,8.237,8.237l-10.647,10.635h12.143a20.374,20.374,0,0,1,20.375,20.375v46.57a20.374,20.374,0,0,1-20.374,20.374H105.708A20.374,20.374,0,0,1,85.333,192.62v-46.57a20.374,20.374,0,0,1,20.375-20.374h12.137L107.2,115.029a5.824,5.824,0,1,1,8.237-8.237Zm65.943,30.521H105.708a8.732,8.732,0,0,0-8.691,7.893l-.041.839v46.57a8.732,8.732,0,0,0,7.893,8.691l.839.041h75.676a8.732,8.732,0,0,0,8.691-7.893l.041-.839v-46.57a8.732,8.732,0,0,0-8.732-8.732Zm-61.123,17.464a5.821,5.821,0,0,1,5.821,5.821v11.643a5.821,5.821,0,1,1-11.643,0V160.6a5.821,5.821,0,0,1,5.821-5.821Zm46.57,0a5.821,5.821,0,0,1,5.821,5.821v11.643a5.821,5.821,0,1,1-11.643,0V160.6a5.821,5.821,0,0,1,5.821-5.821Z' transform='translate(106.454 144.914)' fill='%23fff'/%3E%3Cpath id='3' d='M228.108,29.232h-4.872v-6.09c0-3.5,1.484-5.268,5.055-7.689l.276-.188c2.52-1.71,3.195-2.538,3.195-4.3a6.09,6.09,0,0,0-12.18,0H214.71a10.962,10.962,0,0,1,21.924,0c0,3.843-1.6,5.8-5.331,8.334l-.278.189c-2.339,1.587-2.917,2.274-2.917,3.658Zm-2.436,8.526a3.045,3.045,0,1,1,3.045-3.045A3.045,3.045,0,0,1,225.672,37.758Z' transform='translate(135.617 100.686) rotate(31)' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E" }]],

  lang: 'zh-CN',

  lastUpdated: true,
})
