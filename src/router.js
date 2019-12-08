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
<<<<<<< HEAD
      path: '/about',
      name: 'about',
      component: () => import('./views/Info/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Info/Contact.vue'),
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('./views/Info/Terms.vue'),
=======
      path: '/info',
      name: 'info',
      component: () => import('./views/Info.vue'),
      children: [
        {
          path: '/about',
          name: 'about',
          component: () => import('./components/InfoPages/About.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('./components/InfoPages/Contact.vue'),
        },
        {
          path: '/terms',
          name: 'terms',
          component: () => import('./components/InfoPages/Terms.vue'),
        },
      ],
>>>>>>> 8eac955d75fde142bfd40a4b0c9d85ce9923f6c0
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
      path: '/orderitem/:id',
      name: 'orderitem',
      component: () => import('./views/OrderItem.vue'),
    },
    {
      path: '/orderitem',
      name: 'orderitems',
      component: () => import('./views/OrderItem.vue'),
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
