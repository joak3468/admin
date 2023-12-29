import HomeView from '@/views/invoice/HomeView.vue';
import SummaryView from '@/views/invoice/SummaryView.vue';
const invoiceRoutes = [
  {
    path: '/invoices',
    name: 'invoices',
    component: HomeView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/invoices/resumen',
    name: 'invoices.summaries',
    component: SummaryView,
    meta: {
      requireAuth: true
    }
  }
];

export default invoiceRoutes;