import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import clientRoutes from './clientRoutes'; 
import invoiceRoutes from './invoiceRoutes';
import useAuthStore from '@/store/auth';
import NotFoundView from '@/views/PageNotFoundView.vue';

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
  {
    path: '/:catchAll(.*)',
    name: 'error',
    component: NotFoundView,
    meta: {
      requireAuth: true
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
  const isAuth = auth.isAuth();
  const requireAuth = to.meta.requireAuth;


  if ((to.name == 'login' || to.name == '/') && isAuth)
    next('/clients');
  if (requireAuth) {
    if (!isAuth)
      next({ path: '/login', query: { redirect: to.fullPath } });
    next();
  } else 
    next();
  
});

export default router;