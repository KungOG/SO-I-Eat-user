import Vue from 'vue';

import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('./views/Info.vue'),
      children: [
        {
          path: '/about',
          name: 'about',
          component: () => import('./components/Info/About.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('./components/Info/Contact.vue'),
        },
        {
          path: '/terms',
          name: 'terms',
          component: () => import('./components/Info/Terms.vue'),
        },
      ],
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: () => import('./views/Confirmation.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('./views/Menu.vue'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/Order.vue'),
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('./views/Loading.vue'),
    },
  ],
});
