import { requiresPermission } from 'src/functions/requires-permission'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home',
        component: () => import('pages/home/Index.vue')
      },
      { path: '/about', name: 'about',
        component: () => import('pages/about/Index.vue')
      },
      { path: '/preservation', name: 'preservation',
        component: () => import('pages/preservation/Index.vue'),
        beforeEnter: (to, from, next) => requiresPermission(['preservation'], to, next)
      },
      { path: 'configuration/tipitaka-edition', name: 'tipitakaEdition',
        component: () => import('pages/configuration/tipitakaEdition/Index.vue'),
        beforeEnter: (to, from, next) => requiresPermission(['configuration'], to, next)
      },
      { path: 'configuration/page-content', name: 'pageContent',
        component: () => import('pages/configuration/pageContent/Index.vue'),
        beforeEnter: (to, from, next) => requiresPermission(['configuration'], to, next)
      },
      { path: 'user', name: 'user',
        component: () => import('pages/user/Index.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
