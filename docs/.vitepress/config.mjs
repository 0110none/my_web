import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Web',
  description: '程嘉骏的个人主页、项目展示与技术博客入口',
  lang: 'zh-CN',
  base: '/my_web/',
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
      { text: '首页', link: '/my_web/' },
      { text: '项目展示', link: '/my_web/projects/' },
      { text: '技术博客', link: '/my_web/blog/' },
      { text: '在线简历', link: '/my_web/resume' }
    ],
    sidebar: [
      {
        text: '导航',
        items: [
          { text: '首页', link: '/my_web/' },
          {
            text: '关于我',
            link: '/my_web/about',
            collapsed: true,
            items: [
              { text: '学习经历', link: '/my_web/about#学习经历' },
              { text: '实践方向', link: '/my_web/about#实践方向' }
            ]
          },
          {
            text: '项目展示',
            link: '/my_web/projects/',
            collapsed: true,
            items: [
              { text: '单摄像头人脸识别系统', link: '/my_web/projects/#单摄像头人脸识别系统' },
              { text: '多摄像头人脸跟踪系统', link: '/my_web/projects/#多摄像头人脸跟踪系统' },
              { text: 'AI招聘顾问Agent系统', link: '/my_web/projects/#ai招聘顾问agent系统' },
              { text: '电子商务技术项目比赛', link: '/my_web/projects/#电子商务技术项目比赛' }
            ]
          },
          {
            text: '技术栈',
            link: '/my_web/skills',
            collapsed: true,
            items: [
              { text: '能力侧重点', link: '/my_web/skills#能力侧重点' }
            ]
          },
          {
            text: '技术博客',
            link: '/my_web/blog/',
            collapsed: true,
            items: [
              { text: '文章入口', link: '/my_web/blog/#技术博客' }
            ]
          },
          { text: '在线简历', link: '/my_web/resume' },
          { text: '联系方式', link: '/my_web/contact' }
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
