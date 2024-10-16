import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import FoodStuffs from './components/FoodStuffs.vue'
import BallStuff from './components/BallStuff.vue'
import AddForm from './components/AddForm.vue'

const app = createApp(App)

app.use(createPinia())

app.component('FoodStuffs', FoodStuffs)
app.component('BallStuff', BallStuff)
app.component('AddForm', AddForm)
app.mount('#app')
