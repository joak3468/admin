<template>
    <Base>
        <h3>Actualizar cliente:</h3>
        <Form
            :name="client.name"
            :cuil="client.cuil"
            :iva="client.iva"
            :address="client.address"
            :sale_condition="client.sale_condition"
            :price="client.price"
            :email="client.email"
            :isUpdate="isUpdate"
            :message="client.message"
            :clientId="client.id"
            :test="test"
        />
    </Base>
</template>

<script setup>
import Form from '@/components/client/Form.vue';
import Base from '@/layout/Base.vue';
import { ref, onMounted } from 'vue';
import { useClientStore } from '@/store/client';
import { useRoute } from 'vue-router';
import useAuthStore from '@/store/auth';
useAuthStore();

const isUpdate = "True";
const route = useRoute();
const client = ref({});
const clientStore = useClientStore();

onMounted(async() => {
        const params = {
            client_id: route.params.id,
            user_id: 1,
        }
        try {
            client.value = await clientStore.getClient(params);
        }catch(e) {
            console.log(e);
        }
});


</script>