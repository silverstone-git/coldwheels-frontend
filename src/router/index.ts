import { createMemoryHistory, createRouter } from 'vue-router'

import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import Landing from '../components/Landing.vue'
import Search from '../components/Search.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/search', component: Search },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
