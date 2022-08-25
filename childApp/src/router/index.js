import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/index',
    name: 'Index',
    meta: {
      // requireAuth: true,
    },
    component: () => import('../views/index.vue'),
  },
  {
    path: '/menu',
    name: 'Menu',
    meta: {
      // requireAuth: true,
    },
    component: () => import('../views/menu.vue'),
  },
  {
    path: '/main',
    name: 'Main',
    meta: {
      // requireAuth: true,
    },
    component: () => import('../views/mainMoudle/index.vue'),
    redirect: '/main/menu',
    children: [
      {
        path: '/main/menu',
        name: 'Main_menu',
        meta: {
          // requireAuth: true,
        },
        component: () => import('../views/mainMoudle/menu.vue'),
      },
      {
        path: '/main/directCurrent',
        name: 'Main_directCurrent',
        meta: {
          // requireAuth: true,
        },
        component: () => import('../views/mainMoudle/directCurrent/index.vue'),
      },
    ],
  },
];
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch((err) => err);
};
const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.userName) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    }
  } else {
    next();
  }
});

export default router;
