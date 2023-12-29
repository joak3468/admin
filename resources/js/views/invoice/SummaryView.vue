<template>
<<<<<<< HEAD
  <Base>
    <NavBar/>
    <div class="row">
      <div class="col-md-2 mb-2">
        <select v-model="selectedStatus" class="form-select custom-select" aria-label="Default select example">
          <option value="all" selected>Todos</option>
          <option v-for="(value, key) in status" :key="key" :value="key">{{ value }}</option>
        </select>
      </div>
      <div class="col-md-1 mb-2">
        <VDatePicker v-model.range="range" :color="selectedColor">
          <template #default="{ togglePopover }">
            <button
              class="btn btn-sm btn-secondary text-white font-semibold rounded-md"
              @click="togglePopover"
            >
              Seleccionar Rango
            </button>
          </template>
        </VDatePicker>
      </div>
      <div class="col-md-2 mb-2 d-flex align-items-center">
        <span class="me-2">Cliente:</span>
        <input v-model="clienteFilter" type="text" class="form-control">
      </div>
      <div class="col-md-1">
        <button class="btn btn-sm btn-danger" @click="filter">Filtrar</button>
      </div>
    </div>

    <table class="table custom-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Fecha de creación</th>
          <th>Acción</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invoice in filteredInvoices" :key="invoice.id">
          <td :class="'status-' + invoice.status">{{ invoice.client.name }}</td>
          <td :class="'status-' + invoice.status">{{ invoice.price }}</td>
          <td :class="'status-' + invoice.status">{{ formatearFecha(invoice.created_at) }}</td>
          <td :class="'status-' + invoice.status">
            <a @click="updateStatus(invoice.id, invoice.status - 1)" href="#" v-if="invoice.status > 0" class="btn btn-outline-secondary card-link">pasar a {{ status[invoice.status - 1]  }}</a>
            <a @click="updateStatus(invoice.id, invoice.status + 1)" href="#" v-if="invoice.status < 3" class="btn btn-outline-secondary card-link">pasar a {{ status[invoice.status + 1]  }}</a>
          </td>
          <td :class="'status-' + invoice.status">{{ status[invoice.status] }}</td>
        </tr>
      </tbody>
    </table>
  </Base>
=======
    <div>

    </div>
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
</template>

<script setup>

<<<<<<< HEAD
const clienteFilter = ref('');

const matchesFilter = (invoice) => {
  const clienteLowerCase = invoice.client.name.toLowerCase();
  const clienteFilterLowerCase = clienteFilter.value.toLowerCase();
  return (
    clienteLowerCase.includes(clienteFilterLowerCase) &&
    invoice.client.name.toLowerCase().includes(clienteFilterLowerCase)
  );
};

const filteredInvoices = computed(() => {
  return invoices.value.filter((invoice) => matchesFilter(invoice));
});

import Base from '@/layout/Base.vue';
import { formatearFecha } from "@/helpers.js";
import { ref, onMounted, computed } from 'vue';
import { useInvoiceStore } from '@/store/invoice';
import { format, startOfMonth } from 'date-fns'
import NavBar from '@/layout/invoice/NavBar.vue';

const status = {0: 'Procesando', 1: 'Creada', 2: 'Enviada', 3: 'Pagada'}; 
const today = new Date()
const firstDateOfMonth = startOfMonth(today);
const lastDateOfMonth = today;


const filterInfo = () => ({
    status: selectedStatus.value,
    dateFrom: format(range.value.start, 'yyyy-MM-dd'),
    dateTo: format(range.value.end, 'yyyy-MM-dd')
});

function filter() {
  getData(filterInfo());
}


const range = ref({
  start: firstDateOfMonth,
  end: lastDateOfMonth,
});



const selectedStatus = ref('all');
const invoiceStore = useInvoiceStore();
const invoices = ref([]);
async function getData() {
  try {
    invoices.value = await invoiceStore.getInvoicesWithName(filterInfo());
  } catch(e) {
      console.log(e);
  }
}



getData(filterInfo());

const updateStatus = async ( invoiceID, newStatus ) => {
  const formData = {
      id: invoiceID,
      status: newStatus
  };
  try{
      const response = await invoiceStore.update(formData);
      if(response.status == 200){
          getData()
      }
  }catch(e){
      console.log(e);
  }
}
</script>

<style scoped>
.table {
border-collapse: collapse;
width: 100%;
}

th, td {
border: 1px solid #ddd;
padding: 8px;
text-align: left;
}

th {
background-color: #f2f2f2;
}

.status-0 {
background-color: #b7b9b7;
}

.status-1 {
background-color: #FFFF99;
}

.status-2 {
background-color: #ADD8E6;
}

.status-3 {
background-color: #90EE90;
}
=======
</script>

<style scoped>

>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
</style>