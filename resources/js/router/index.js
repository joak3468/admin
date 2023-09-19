import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue'; 
import ClientsListView  from '../views/ClientsListView.vue';
import CreateView from '../views/client/CreateView.vue';
import useAuthStore from '@/store/auth';


const routes = [    
    {
        path: '/create_client',
        name: 'createClient',
        component: CreateView,
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
    // {
    //     path: '/blog',
    //     name: 'blog',
    //     component: BlogView,
    //     meta: {
    //         requireAuth: false
    //     }
    // },    
    // {
    //     path: '/blog/:id',
    //     name: 'post',
    //     component: PostView,
    //     meta: {
    //         requireAuth: false
    //     }
    // },    
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