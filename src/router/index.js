import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',

    component: Register
  },
  {
    path: '/login',
    name: 'Login',

    component: Login
  },
  {
    path: '/product/:id',
    name: 'Product',

    component: Product
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
