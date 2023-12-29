import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import clientRoutes from './clientRoutes'; 
import invoiceRoutes from './invoiceRoutes';
import useAuthStore from '@/store/auth';
<<<<<<< HEAD
import NotFoundView from '@/views/PageNotFoundView.vue';
=======
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b

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
<<<<<<< HEAD
  {
    path: '/:catchAll(.*)',
    name: 'error',
    component: NotFoundView,
    meta: {
      requireAuth: true
    }
  },
=======
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
  ...clientRoutes, 
  ...invoiceRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
<<<<<<< HEAD
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
  
=======
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
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
});

export default router;