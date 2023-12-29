<template>
<<<<<<< HEAD
         <div class="col-md-2 mb-2 d-flex align-items-center">
        <span class="me-2">Cliente:</span>
        <input v-model="clienteFilter" type="text" class="form-control">
      </div>
=======
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
    <table class="table custom-table">
        <thead>
        <tr>
            <th>Nombre</th>
            <th>CUIL</th>
            <th>IVA</th>
            <th>Direccion</th>
            <th>Condicion de Venta</th>
            <th>Precio</th>
            <th>Email</th>
            <th>Mensaje</th>
            <th v-if="props.view == 'Home'">Estado</th>
            <th>Modificar</th>
            <th>Crear Factura</th>
            <th v-if="props.view == 'Home'">M. Estado</th>
        </tr>
        </thead>
        <tbody>
<<<<<<< HEAD
        <tr v-for="client in filteredInvoices" :key="client.id">
=======
        <tr v-for="client in props.clients" :key="client.id">
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
            <td class="client-item"> {{ client.name }}</td>
            <td class="client-item"> {{ client.cuil }}</td>
            <td class="client-item"> {{ client.iva }}</td>
            <td class="client-item"> {{ client.address }}</td>
            <td class="client-item"> {{ client.sale_condition }}</td>
            <td class="client-item"> {{ client.price }}</td>
            <td class="client-item"> {{ client.email }}</td>
            <td class="client-item"> {{ client.message }}</td>
            <td  v-if="props.view == 'Home'" class="client-item"> {{ client.status == 1 ? 'Activo' : 'Inactivo' }}</td>
            <td class="client-item"><router-link :to="{name: 'client.update', params: {id: client.id}}" class="route"><ion-icon name="build-sharp"></ion-icon></router-link></td>
            <td class="client-item" @click="createInvoice(client.id, client.price)"><router-link :to="{name: 'invoices'}" class="route"><ion-icon name="create-sharp"></ion-icon></router-link></td>
            <td v-if="props.view == 'Home'" class="client-item">
<<<<<<< HEAD
                <button @click="emits('updateStatus',client.id, 0)" class="btn" v-if="client.status == 1" ><ion-icon name="close-circle-sharp"></ion-icon></button>
                <button @click="emits('updateStatus',client.id, 1)" class="btn" v-else><ion-icon name="chevron-down-circle-sharp"></ion-icon></button>
=======
                <button @click="updateStatus(client.id, 0)" class="btn" v-if="client.status == 1" ><ion-icon name="close-circle-sharp"></ion-icon></button>
                <button @click="updateStatus(client.id, 1)" class="btn" v-else><ion-icon name="chevron-down-circle-sharp"></ion-icon></button>
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script setup>
<<<<<<< HEAD
import { ref, defineProps, defineEmits, computed, onMounted } from 'vue';
import { useInvoiceStore } from '@/store/invoice';
=======





import { ref, onMounted, defineProps, watch } from 'vue';
import { useClientStore } from '@/store/client';
import useAuthStore from '@/store/auth';
import { useInvoiceStore } from '@/store/invoice';
useAuthStore();

>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b

const props = defineProps({
    clients: Array,
    view: String,
});

<<<<<<< HEAD
const clienteFilter = ref('');


const matchesFilter = (client) => {
  return (
    client.name.includes(clienteFilter.value) ||
    client.cuil.toString().includes(clienteFilter.value) ||
    client.address.includes(clienteFilter.value)
  );
};

const filteredInvoices = computed(() => {
  return props.clients?.filter((invoice) => matchesFilter(invoice)) || [];
});


const emits = defineEmits(['updateStatus']);
const invoiceStore = useInvoiceStore();
=======
const clientStore = useClientStore();
const invoiceStore = useInvoiceStore();
const clients = ref([]);



const updateStatus = async (id, newStatus) => {
    try {
        const formData = { 'client_id' : id, 'status': newStatus };
        const response = await clientStore.updateStatus(formData);

        if (response.status === 200)
            clients.value = await clientStore.getClients();

    }catch(e) {
        console.log(e);
    }
}  
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b

const createInvoice = async (id, price) => {
    try {
        const formData = { 'client_id': id, 'price': price };
        const response = await invoiceStore.create(formData);
    }catch(e) {
        console.log(e);
    }
}

</script>

<style scoped>
.custom-table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  width: 100%;
}

.route{
    text-decoration: none;
    color: black;

}
.custom-table th, .custom-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.custom-table th {
  background-color: #f0f0f0;
}
</style>