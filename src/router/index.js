// fichier router/index.js ou un nom similaire
import { createRouter, createWebHistory } from 'vue-router';

import MainPage from '@page/MainPage.vue';
import Projets from '@page/Projets.vue';
import LegalMentions from '@page/LegalMentions.vue';

const routes = [
  {
    path: '/',
    name: 'Portfolio',
    component: MainPage
  },
  {
    path: '/projets',
    name: 'Projets',
    component: Projets,
  },
  {
    path: '/mentions-legales',
    name: 'LegalMentions',
    component: LegalMentions,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
