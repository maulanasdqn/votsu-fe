import { createRouter, createWebHistory } from 'vue-router'
import { TokenService } from '../services/token/index.service'
import Home from '../views/home/index.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import Forgot from '../views/auth/forgot.vue'
import Dashboard from '../views/user/index.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      public: true,
      title_browser: 'Votsu | Dashboard',
    },
  },
  {
    path: '/register',
    component: Register,
    meta: {
      public: true,
      title_browser: 'Votsu | Dashboard',
    },
  },
  {
    path: '/login',
    component: Login,
    meta: {
      public: true,
      title_browser: 'Votsu | Dashboard',
    },
  },
  {
    path: '/forgot',
    component: Forgot,
    meta: {
      public: true,
      title_browser: 'Votsu | Dashboard',
    },
  },
  {
    path: '/user/dashboard',
    component: Dashboard,
    meta: {
      public: false,
      title_browser: 'Votsu | Dashboard',
    },
  },
]

export const router = createRouter({
  routes,
  history: createWebHistory(),
})

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some((record) => record.meta.public)
  const specialCase = to.matched.some((record) => record.meta.special_case)

  if (specialCase) {
    return next()
  }

  const onlyWhenLoggedOut = to.matched.some(
    (record) => record.meta.onlyWhenLoggedOut
  )
  const loggedIn = !!TokenService.getToken()

  if (!isPublic && !loggedIn) {
    return next({
      path: '/',
      query: { redirect: to.fullPath },
    })
  }

  if (loggedIn && onlyWhenLoggedOut) {
    return next('/user/dashboard')
  }

  next()
})

// router.afterEach((to) => {
//   if (process.browser) window.document.title = to.meta.title_browser || 'ctr.id'
// })
