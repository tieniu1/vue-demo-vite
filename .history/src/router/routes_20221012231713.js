import HomeView from '../views/homeView.vue';

export default [
  {
    path: '/',
    name: 'todo',
    component: () => import('../views/todoList.vue'),
  },
  {
    path: '/prop',
    name: 'prop',
    component: () => import('../views/props/index.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },

  {
    path: '/counter',
    name: 'counter',
    component: () => import('../views/counter.vue'),
  },
  {
    path: '/mouse',
    name: 'mouse',
    component: () => import('../views/mouse.vue'),
  },
  {
    path: '/watchList',
    name: 'watchList',
    component: () => import('../views/watchList.vue'),
  },
  {
    path: '/lifecycle',
    name: 'lifecycle',
    component: () => import('../views/lifecycle.vue'),
  },
  {
    path: '/ref',
    name: 'ref',
    component: () => import('../views/ref/index.vue'),
  },
  {
    path: '/slot',
    name: 'slot',
    component: () => import('../views/slot/index.vue'),
  },
  {
    path: '/buttonView',
    name: 'buttonView',
    component: () => import('../views/buttonView.vue'),
  },
  {
    path: '/com-model',
    name: 'com-model',
    component: () => import('../views/com-model/index.vue'),
  },
  {
    path: '/attrs',
    name: 'attrs',
    component: () => import('../views/attrs/index.vue'),
  },
];
