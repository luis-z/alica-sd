import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b80bd5d2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _5bf61773 = () => interopDefault(import('../pages/blank-page.vue' /* webpackChunkName: "pages/blank-page" */))
const _7f19c225 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ar",
    component: _b80bd5d2,
    name: "index___ar"
  }, {
    path: "/blank-page",
    component: _5bf61773,
    name: "blank-page___es"
  }, {
    path: "/contact",
    component: _7f19c225,
    name: "contact___es"
  }, {
    path: "/de",
    component: _b80bd5d2,
    name: "index___de"
  }, {
    path: "/en",
    component: _b80bd5d2,
    name: "index___en"
  }, {
    path: "/id",
    component: _b80bd5d2,
    name: "index___id"
  }, {
    path: "/pt",
    component: _b80bd5d2,
    name: "index___pt"
  }, {
    path: "/zh",
    component: _b80bd5d2,
    name: "index___zh"
  }, {
    path: "/ar/blank-page",
    component: _5bf61773,
    name: "blank-page___ar"
  }, {
    path: "/ar/contact",
    component: _7f19c225,
    name: "contact___ar"
  }, {
    path: "/de/blank-page",
    component: _5bf61773,
    name: "blank-page___de"
  }, {
    path: "/de/contact",
    component: _7f19c225,
    name: "contact___de"
  }, {
    path: "/en/blank-page",
    component: _5bf61773,
    name: "blank-page___en"
  }, {
    path: "/en/contact",
    component: _7f19c225,
    name: "contact___en"
  }, {
    path: "/id/blank-page",
    component: _5bf61773,
    name: "blank-page___id"
  }, {
    path: "/id/contact",
    component: _7f19c225,
    name: "contact___id"
  }, {
    path: "/pt/blank-page",
    component: _5bf61773,
    name: "blank-page___pt"
  }, {
    path: "/pt/contact",
    component: _7f19c225,
    name: "contact___pt"
  }, {
    path: "/zh/blank-page",
    component: _5bf61773,
    name: "blank-page___zh"
  }, {
    path: "/zh/contact",
    component: _7f19c225,
    name: "contact___zh"
  }, {
    path: "/",
    component: _b80bd5d2,
    name: "index___es"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
