import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'FlyClash Docs',
  description: 'Documentation site powered by VitePress',
  base: '/FlyClash-docs/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '简介', link: '/guide/getting-started' },
      { text: '使用教程', link: '/guide/tutorial' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '简介', link: '/guide/getting-started' },
            { text: '使用教程', link: '/guide/tutorial' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GtxFury/FlyClash-docs' }
    ]
  }
})
