import { createRouter, createWebHistory } from 'vue-router';

import MainPage from '@page/MainPage.vue';
import Projets from '@page/Projets.vue';
import ProjetDetail from '@page/ProjetDetail.vue';
import LegalMentions from '@page/LegalMentions.vue';
import Sitemap from '@page/Sitemap.vue';

const routes = [
  {
    path: '/:lang?',
    children: [
      {
        path: '',
        name: 'Portfolio',
        component: MainPage,
      },
      {
        path: 'projets',
        name: 'Projets',
        component: Projets,
      },
      {
        path: 'projets/:id',
        name: 'ProjetDetail',
        component: ProjetDetail,
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

const router = createRouter({
  history: createWebHistory(),
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
