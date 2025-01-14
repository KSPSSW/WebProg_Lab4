import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/first-page',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/FirstPage.vue') }],
  },

  {
    path: '/pos',
    component: () => import('layouts/FullScreen.vue'),
    children: [{ path: '', component: () => import('pages/POSPage.vue') }],
  },

  {
    path: '/user-page',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/UserManagement.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
