import { createApp } from 'vue'
import App from './App.vue'
import whelement from "../../lib/index.esm"

const app = createApp(App)
app.use(whelement)
app.mount('#app')