import Vue from 'vue';
import App from './App.vue';
import router from './routers/router';
import store from './stores/store';
import './plugins/element';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
