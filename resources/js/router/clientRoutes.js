import ListView from '@/views/client/ListView.vue';
import CreateView from '@/views/client/CreateView.vue';
import UpdateView from '@/views/client/UpdateView.vue';
import ActiveListView from '@/views/client/ActiveListView.vue';
import IdleListView from '@/views/client/IdleListView.vue';

const clientRoutes = [
  {
    path: '/client/create',
    name: 'client.create',
    component: CreateView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/client/update/:id',
    name: 'client.update',
    component: UpdateView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/clients',
    name: 'clients',
    component: ListView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/clients/inactive',
    name: 'clients.inactive',
    component: IdleListView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/clients/active',
    name: 'clients.active',
    component: ActiveListView,
    meta: {
      requireAuth: true
    }
  }
];

export default clientRoutes;