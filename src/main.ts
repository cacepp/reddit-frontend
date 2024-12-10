import '@/assets/reset.scss'
import '@/assets/fonts.scss'
import '@/assets/main.scss'
import 'vuetify/styles'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app
  .use(vuetify)
  .use(createPinia())
  .use(router)

app.mount('#app')
