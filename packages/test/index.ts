
import { App } from 'vue'
import type { SFCWithInstall } from '../utils/types'
import Test from './src/index.vue'

Test.install = (app: App): void => {
  app.component(Test.name, Test)
}

const _Test: SFCWithInstall<typeof Test> = Test

export default _Test