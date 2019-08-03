// setting router address under the home folder
export default [{
  name: 'dashboard',
  path: '/dashboard',
  component: () => import('@/views/home/dashboard'),
}, {
  name: 'workbench',
  path: '/workbench',
  component: () => import('@/views/home/workbench'),
}];
