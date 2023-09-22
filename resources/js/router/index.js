import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue'; 
import ClientsListView  from '../views/client/ClientsListView.vue';
import CreateView from '../views/client/CreateView.vue';
import UpdateView from '../views/client/UpdateView.vue';
import useAuthStore from '@/store/auth';
import HomeInvoiceView from '../views/invoice/HomeInvoiceView.vue';

const routes = [    
    {
        path: '/client/create',
        name: 'createClient',
        component: CreateView,
        meta: {
            requireAuth: true
        }
    },    
    {
        path: '/client/update/:id',
        name: 'updateClient',
        component: UpdateView,
        meta: {
            requireAuth: true
        }
    },          
    {
        path: '/clients',
        name: 'clients',
        component: ClientsListView,
        meta: {
            requireAuth: true
        }
    },  
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
        path: '/Invoice',
        name: 'invoice',
        component: HomeInvoiceView,
        meta: {
            requireAuth: true
        }
    } 

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const auth = useAuthStore();
    const isAuth = auth.token;
    if((to.name == "login" || to.name == "/") && isAuth != null)
        next('/clients');

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