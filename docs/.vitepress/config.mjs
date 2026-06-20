import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Web',
  description: '程嘉骏的个人主页、项目展示与技术博客入口',
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
      {
        text: '导航',
        items: [
          { text: '首页', link: '/' },
          {
            text: '关于我',
            link: '/about',
            collapsed: true,
            items: [
              { text: '学习经历', link: '/about#学习经历' },
              { text: '实践方向', link: '/about#实践方向' }
            ]
          },
          {
            text: '项目展示',
            link: '/projects/',
            collapsed: true,
            items: [
              { text: '单摄像头人脸识别系统', link: '/projects/#单摄像头人脸识别系统' },
              { text: '多摄像头人脸跟踪系统', link: '/projects/#多摄像头人脸跟踪系统' },
              { text: 'AI招聘顾问Agent系统', link: '/projects/#ai招聘顾问agent系统' },
              { text: '电子商务技术项目比赛', link: '/projects/#电子商务技术项目比赛' }
            ]
          },
          {
            text: '技术栈',
            link: '/skills',
            collapsed: true,
            items: [
              { text: '能力侧重点', link: '/skills#能力侧重点' }
            ]
          },
          {
            text: '技术博客',
            link: '/blog/',
            collapsed: true,
            items: [
              { text: '文章入口', link: '/blog/#技术博客' }
            ]
          },
          { text: '在线简历', link: '/resume' },
          { text: '联系方式', link: '/contact' }
        ]
      }
    ],
    outline: false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/0110none' }
    ],
    footer: {
      message: '持续整理项目与学习记录',
      copyright: '© 2026 程嘉骏'
    }
  }
})
