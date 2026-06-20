import { defineConfig } from 'vitepress'

const site = 'https://0110none.github.io/my_web'
const page = (text, path, extra = {}) => ({
  text,
  link: `${site}${path}`,
  target: '_self',
  rel: '',
  ...extra
})

export default defineConfig({
  title: 'Web',
  description: '程嘉骏的个人主页、项目展示与技术博客入口',
  lang: 'zh-CN',
  base: '/my_web/',
  cleanUrls: false,
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
      page('首页', '/'),
      page('项目展示', '/projects/'),
      page('技术博客', '/blog/'),
      page('在线简历', '/resume.html')
    ],
    sidebar: [
      {
        text: '导航',
        items: [
          page('首页', '/'),
          page('关于我', '/about.html', {
            collapsed: true,
            items: [
              page('学习经历', '/about.html#学习经历'),
              page('实践方向', '/about.html#实践方向')
            ]
          }),
          page('项目展示', '/projects/', {
            collapsed: true,
            items: [
              page('单摄像头人脸识别系统', '/projects/#单摄像头人脸识别系统'),
              page('多摄像头人脸跟踪系统', '/projects/#多摄像头人脸跟踪系统'),
              page('AI招聘顾问Agent系统', '/projects/#ai招聘顾问agent系统'),
              page('电子商务技术项目比赛', '/projects/#电子商务技术项目比赛')
            ]
          }),
          page('技术栈', '/skills.html', {
            collapsed: true,
            items: [
              page('能力侧重点', '/skills.html#能力侧重点')
            ]
          }),
          page('技术博客', '/blog/', {
            collapsed: true,
            items: [
              page('文章入口', '/blog/#技术博客')
            ]
          }),
          page('在线简历', '/resume.html'),
          page('联系方式', '/contact.html')
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
    },
    docFooter: {
      prev: false,
      next: false
    }
  }
})
