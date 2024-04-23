import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      redirect: '/list',
      children: [
        {
          path: '/list',
          name: 'List',
          component: () => import('../views/list/index.vue')
        }
      ]
    }
  ]
})

export default router
