<template>
    <Base>
        <NavBar/>
        <h3>Facturas en proceso: </h3>
        <div class="invoice-card-container">
            <div v-for="invoice in invoices" :key="invoice.id" class="invoice-card">
                <Card
                    v-if="invoice.status !== 3"
                    :id="invoice.id"
                    :client_id="invoice.client_id"
                    :price="invoice.price"
                    :status="invoice.status"
                    :created_at="invoice.created_at"
                />
            </div>
        </div>
    </Base>
</template>

<script setup>
import Base from '@/layout/Base.vue';
import NavBar from '@/layout/invoice/NavBar.vue';
import Card from '../../components/invoice/Card.vue';

import { useInvoiceStore } from '@/store/invoice';
import { ref, onMounted } from 'vue';
import useAuthStore from '@/store/auth';

useAuthStore();
const invoiceStore = useInvoiceStore();
const invoices = ref([]);


onMounted( async () => {
    try {
        invoices.value = await invoiceStore.getInvoices();
    } catch(e) {
        console.log(e);
    }
});

</script>


<style scoped>
.invoice-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


.invoice-card {
  margin: 10px;
  
}
</style>