import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// loop to get all router address infos
const routes = [];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
