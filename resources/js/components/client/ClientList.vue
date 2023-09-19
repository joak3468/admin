<template>

<div class="container">
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
            <th>Estado</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="client in clients" :key="client.id">
            <td>{{ client.name }}</td>
            <td>{{ client.cuil }}</td>
            <td>{{ client.iva }}</td>
            <td>{{ client.address }}</td>
            <td>{{ client.sale_condition }}</td>
            <td>{{ client.price }}</td>
            <td>{{ client.email }}</td>
            <td>{{ client.message }}</td>
            <td>{{ client.status == 1 ? 'Activo' : 'Inactivo' }}</td>
        </tr>
        </tbody>
    </table>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useClientStore } from '@/store/client';
    import useAuthStore from '@/store/auth';

    const store = useAuthStore();

    const clientStore = useClientStore();
    const clients = ref([]);

    onMounted(async() => {
        try{
            clients.value = await clientStore.getClients();
        }catch(e){
            console.log(e);
        }
    });
</script>

<style scoped>
.custom-table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  width: 100%;
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