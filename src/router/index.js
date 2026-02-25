import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Recommended from '../views/Recommended.vue'
import Tools from '../views/Tools.vue'
import Resources from '../views/Resources.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recommended',
    name: 'Recommended',
    component: Recommended
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router