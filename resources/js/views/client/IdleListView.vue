<template>
    <Base>
        <NavBar/>
        <h3>Clientes inactivos:</h3>
        <List
        :clients="clients"
        :view="view"
        />
    </Base>
</template>


<script setup>
import Base from '@/layout/Base.vue';
import NavBar from '@/layout/client/NavBar.vue';
import List from '@/components/client/List.vue';
import { ref, onMounted } from 'vue';
import { useClientStore } from '@/store/client';
import useAuthStore from '@/store/auth';
useAuthStore();

const clientStore = useClientStore();
const clients = ref([]);
const view = "Inactive";

onMounted(async() => {
    try{
        clients.value = await clientStore.getInactiveClients();
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