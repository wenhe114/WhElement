import { App } from 'vue'
import type { SFCWithInstall } from '../utils/types'
import NoVNC from './src/index.vue'

NoVNC.install = (app: App): void => {
  app.component(NoVNC.name, NoVNC)
}

const _NoVNC: SFCWithInstall<typeof NoVNC> = NoVNC

export default _NoVNC
