import { defineRouter } from '#q-app/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { useAuth } from 'src/services/useAuth'

export default defineRouter(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  // Guard global
  Router.beforeEach(async (to, from, next) => {
    const publicPaths = [
      '/',
      '/login',
      '/register',
      '/work-with-us',
      '/benefits-for-you'
    ]
    const isPublic = publicPaths.includes(to.path)
    if (isPublic) {
      return next()
    }
    try {
      await useAuth().checkUser()
      next()
    } catch (err) {
      console.error('User check failed:', err)
      next('/login')
    }
  })

  return Router
})
