import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetails from '../views/ProductDetails.vue'
import CartPage from '../views/Cart.vue'
import FavoritePage from '../views/Favorite.vue'
import CheckoutPage from '../views/Checkout.vue'
import StorePage from '../views/Store.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/store',
    name: 'store',
    component: StorePage
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: FavoritePage
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutPage
  },
  {
    path: '/product/:id',
    name: 'product',
    props: true,
    component: ProductDetails
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
