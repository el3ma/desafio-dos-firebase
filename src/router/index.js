import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import('../views/RegistroView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/userview',
    name: 'userview',
    component: () => import('../views/UserView.vue'),
    meta:{
      login: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  let authRequired = to.meta.login
  let usuario = store.state.usuario
  if(authRequired){
    if(usuario){
      next()
    }else{
      next('/login')
    }
  }else {
    next();
  }
})

export default router
