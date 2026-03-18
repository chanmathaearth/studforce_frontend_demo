
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { initMockApi } from './services/mockApi'

// Initialize mock API
initMockApi()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
