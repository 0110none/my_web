import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '程嘉骏',
  description: '人工智能专业应届毕业生个人主页、项目展示与技术博客入口',
  lang: 'zh-CN',
  cleanUrls: true,
  appearance: false,
  head: [
    ['meta', { name: 'theme-color', content: '#0f766e' }]
  ],
  themeConfig: {
    logo: false,
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '项目展示', link: '/projects/' },
      { text: '技术博客', link: '/blog/' },
      { text: '在线简历', link: '/resume' }
    ],
    sidebar: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about' },
      { text: '项目展示', link: '/projects/' },
      { text: '技术栈', link: '/skills' },
      { text: '学习经历', link: '/about#学习经历' },
      { text: '技术博客', link: '/blog/' },
      { text: '在线简历', link: '/resume' },
      { text: '联系方式', link: '/contact' }
    ],
    outline: {
      level: [2, 3],
      label: '目录'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/0110none' }
    ],
    footer: {
      message: '持续整理项目与学习记录',
      copyright: '© 2026 程嘉骏'
    }
  }
})
