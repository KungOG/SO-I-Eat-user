import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    /* {
      path: '/confirmation/:nr',
      name: 'confirmation',
      component: () => import('./views/Confirmation.vue'),
    }, */
    {
      path: "/info",
      name: "info",
      component: () => import("./views/Info.vue"),
      children: [
        {
          path: "/about",
          name: "about",
          component: () => import("./components/InfoPages/About.vue")
        },
        {
          path: "/contact",
          name: "contact",
          component: () => import("./components/InfoPages/Contact.vue")
        }
        /* {
          path: '/terms',
          name: 'terms',
          component: () => import('./components/InfoPages/Terms.vue'),
        }, */
      ]
    },
    {
      path: "/products",
      name: "products",
      component: () => import("./views/Products.vue")
    }
    /* {
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
    }, */
  ]
});
