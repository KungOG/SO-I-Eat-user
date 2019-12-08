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
