// setting router address under the home folder
export default [{
  name: 'portal',
  path: '/portal',
  component: () => import('@/views/home/portal'),
}, {
  name: 'dashboard',
  path: '/dashboard',
  component: () => import('@/views/home/dashboard'),
}, {
  name: 'workbench',
  path: '/workbench',
  component: () => import('@/views/home/workbench'),
}];
