<template>
    <Base>
        <NavBar/>
        <h3>Lista de todos los clients registrados:</h3>
        <List
        :clients="clients"
        :view="view"
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
</script>
