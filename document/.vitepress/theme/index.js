import DefaultTheme from 'vitepress/theme'
// import ElButton from "../components/el-button/index"
// import ElElement from "element-plus"
// import 'element-plus/lib/theme-chalk/index.css';
// import ELement from "../../../lib/index.esm"
import "../../../lib/theme/index.css"
export default {
    ...DefaultTheme,
    // ElElement,
  enhanceApp({ app }) {
    app.mixin({
      mounted() {
          import('../../../lib/index.esm').then(function (m) {
            app.use(m.default)
          })
      },
  })
    // register global components
    // console.log(app,Vue);
    // app.use(ElElement)
    // app.use(ELement)
    // app.component('el-element1',ElButton)
  },
//   use(ElElement)
}