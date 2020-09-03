import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Listings from './views/Listings.vue'
import Contact from './views/Contact.vue'
import Post from './views/Post.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/listing/:type',
    name: 'listing',
    component: Listings
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/listing/:type/:id',
    name: 'post',
    component: Post
  }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop,
        behavior: 'smooth'
      })
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
