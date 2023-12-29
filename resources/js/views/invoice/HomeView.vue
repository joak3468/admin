<template>
    <Base>
    <NavBar/>
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
          <tr v-for="invoice in invoices" :key="invoice.id">
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
  </template>
  
  <script setup>


  
  import Base from '@/layout/Base.vue';
  import { formatearFecha } from "@/helpers.js";
  import { ref, onMounted, computed } from 'vue';
  import { useInvoiceStore } from '@/store/invoice';
  import NavBar from '@/layout/invoice/NavBar.vue';
  
  const status = {0: 'Procesando', 1: 'Creada', 2: 'Enviada', 3: 'Pagada'}; 
  
  const invoiceStore = useInvoiceStore();
  const invoices = ref([]);
 

  async function getData() {
  try {
    invoices.value = await invoiceStore.getInvoicesWithName({"status": [0,1,2]});
  } catch(e) {
      console.log(e);
  }
}
onMounted( () => getData() );
  const updateStatus = async ( invoiceID, newStatus ) => {
    const formData = {
        id: invoiceID,
        status: newStatus
    };
    try{
        const response = await invoiceStore.update(formData);
        getData();
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
  </style>