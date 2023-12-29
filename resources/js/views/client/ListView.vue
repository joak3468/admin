<template>
    <Base>
        <NavBar/>
        <h3>Lista de todos los clients registrados:</h3>
        <List
        :clients="clients"
        :view="view"
<<<<<<< HEAD
        @updateStatus="updateStatus"
=======
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
        />
    </Base>
</template>

<script setup>
import List from '@/components/client/List.vue';
import Base from '@/layout/Base.vue';
import NavBar from '@/layout/client/NavBar.vue';
import { ref, onMounted } from 'vue';
import { useClientStore } from '@/store/client';

const clientStore = useClientStore();
const clients = ref([]);
const view = "Home";

onMounted(async() => {
    try{
        clients.value = await clientStore.getClients();
    }catch(e){
        console.log(e);
    }
});
<<<<<<< HEAD



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
=======
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
</script>
