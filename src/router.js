import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/user'
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./components/User.vue')
    },
    {
      path: '/config',
      name: 'config',
      component: () => import('./components/Config.vue')
    },
    {
      path: '/permission',
      name: 'permission',
      component: () => import('./components/Permission.vue')
    },
    {
      path: '/createNamespaced',
      name: 'createNamespaced',
      component: () => import('./components/CreateNamespaced.vue')
    }
  ]
})

export default router
