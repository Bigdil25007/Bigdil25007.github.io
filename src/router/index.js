import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import MainPage from '@page/MainPage.vue';
import Projets from '@page/Projets.vue';
import LegalMentions from '@page/LegalMentions.vue';
import Sitemap from '@page/Sitemap.vue';

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
        component: MainPage,
      },
      {
        path: 'projets/:id?',
        name: 'Projets',
        component: Projets,
        props: true,
      },
      {
        path: 'mentions-legales',
        name: 'LegalMentions',
        component: LegalMentions,
      },
      {
        path: 'plan-site',
        name: 'PlanSite',
        component: Sitemap,
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
