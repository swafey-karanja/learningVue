import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import FoodStuffs from './components/FoodStuffs.vue'

const app = createApp(App)

app.use(createPinia())

app.component('FoodStuffs', FoodStuffs)
app.mount('#app')
