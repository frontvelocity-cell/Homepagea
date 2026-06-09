import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import ContactForm from './components/ContactForm.vue'
import NotFound from './components/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: ContactForm },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')