import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'FlyClash Docs',
  description: 'Documentation site powered by VitePress',
  base: '/FlyClash-docs/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '指南', link: '/guide/getting-started' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GtxFury/FlyClash-docs' }
    ]
  }
})
