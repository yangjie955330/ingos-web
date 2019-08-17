import Vue from 'vue';
import Router from 'vue-router';

/**
 *
 */

// layout page component
import layout from '@/layouts/index.vue';

Vue.use(Router);

// site's index page
const index = {
  path: '/',
  component: layout,
  redirect: '/login', // temp redirect to login page
  children: [],
};

// routes info
const routes = [
  index, {
    name: 'login',
    path: '/secret/login',
    component: () => import('@/views/secret/login'),
    hidden: true,
  }, {
    name: '404',
    path: '/404',
    component: () => import('@/views/404'),
  }, {
    name: '500',
    path: '/500',
    component: () => import('@/views/500'),
  },
];

// loop folder to get all index.js file which contains router info
const routerContext = require.context('./', true, /index\.js$/);
routerContext.keys().forEach((router) => {
  const module = routerContext(router);
  // set all router as a children page in layout page
  index.children = [
    ...index.children,
    ...(module.default || module),
  ];
});

/**
 * @description set router instance
 */
const createRouter = () => new Router({
  mode: 'hash', // temp set hash router mode
  base: process.env.BASE_URL,
  routes,
});

const router = createRouter();

/**
  * @description reset router info
  */
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}


export default router;
