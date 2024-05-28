import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/fr',
  },
  {
    path: '/:lang',
    children: [
      {
        path: '',
        name: 'Portfolio',
        component: () => import('@page/MainPage.vue'),
      },
      {
        path: 'projets/:id?',
        name: 'Projets',
        component: () => import('@page/Projets.vue'),
        props: true,
      },
      {
        path: 'mentions-legales',
        name: 'LegalMentions',
        component: () => import('@page/LegalMentions.vue'),
      },
      {
        path: 'plan-site',
        name: 'PlanSite',
        component: () => import('@page/Sitemap.vue'),
      },
    ],
  },
];

const isDev = import.meta.env.MODE === 'development';

const router = createRouter({
  history: isDev ? createWebHistory() : createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  }
});

export default router;
