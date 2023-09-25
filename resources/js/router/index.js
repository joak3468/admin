import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import clientRoutes from './clientRoutes'; 
import invoiceRoutes from './invoiceRoutes';
import useAuthStore from '@/store/auth';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/login',
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requireAuth: false
    }
  },
  ...clientRoutes, 
  ...invoiceRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  const isAuth = auth.token;
  if ((to.name == 'login' || to.name == '/') && isAuth != null) next('/clients');

  if (to.meta.requireAuth) {
    if (isAuth === null) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;