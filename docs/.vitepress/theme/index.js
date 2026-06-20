import DefaultTheme from 'vitepress/theme'
import ResumeImage from './ResumeImage.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ResumeImage', ResumeImage)
  }
}
