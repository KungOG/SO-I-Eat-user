import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';

Vue.use(axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
