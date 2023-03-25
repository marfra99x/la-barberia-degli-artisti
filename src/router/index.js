import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import PricePage from '@/views/PricePage.vue' 
import GalleryPage from '@/views/GalleryPage.vue' 
import ContactsPage from '@/views/ContactsPage.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/price',
    name: 'price',
    component: PricePage
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryPage
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsPage
  },
]

const router = new VueRouter({
  routes
})

export default router
