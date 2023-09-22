<template>
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
            <th>Modificar</th>
            <th>Crear Factura</th>
            <th>M. Estado</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="client in clients" :key="client.id">
            <td class="client-item"> {{ client.name }}</td>
            <td class="client-item"> {{ client.cuil }}</td>
            <td class="client-item"> {{ client.iva }}</td>
            <td class="client-item"> {{ client.address }}</td>
            <td class="client-item"> {{ client.sale_condition }}</td>
            <td class="client-item"> {{ client.price }}</td>
            <td class="client-item"> {{ client.email }}</td>
            <td class="client-item"> {{ client.message }}</td>
            <td class="client-item"> {{ client.status == 1 ? 'Activo' : 'Inactivo' }}</td>
            <td class="client-item"><router-link :to="{name: 'updateClient', params: {id: client.id}}"><ion-icon name="build-sharp"></ion-icon></router-link></td>
            <td class="client-item"> <ion-icon name="create-sharp"></ion-icon></td>
            <td class="client-item">
                <ion-icon v-if="client.status == 1" name="close-circle-sharp"></ion-icon>
                <ion-icon v-else name="chevron-down-circle-sharp"></ion-icon>
            </td>
        </tr>
        </tbody>
    </table>
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