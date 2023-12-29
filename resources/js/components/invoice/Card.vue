<template>
  <div v-if="!props.notVisible" class="card" style="width: 18rem;">
    <div class="card-body">
      <div class="status">
        <h6 class="status-container">
          <button class="btn btn-outline-danger mb-1" @click="deleteInvoice()">Borrar</button>
          <span class="status-text">{{ getStatus(props.status) }}</span>
        </h6>
      </div>
      <hr class="separator" />
      <div class="card-info">
        <h4 class="card-title text-center">{{ name }}</h4>
        <p class="card-text"><strong>Precio:</strong> {{ props.price }}</p>
        <p class="card-text"><strong>Fecha:</strong> {{ formatDate(props.created_at) }}</p>
      </div>
      <div class="card-links">
          <a @click="updateStatus(props.status - 1)" href="#" v-if="props.status > 0" class="btn btn-outline-secondary card-link">Back Status</a>
          <a @click="updateStatus(props.status + 1)" href="#" v-if="props.status < 3" class="btn btn-outline-secondary card-link">Next Status</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';
import { format } from 'date-fns';
import { useClientStore } from '@/store/client';
import { useInvoiceStore } from '@/store/invoice';

const deleteInvoice = async () => {
    try{
        const response = await invoiceStore.delete({id: props.id});
        if(response.status == 200)
            props.notVisible = true;
    }catch(e){
        console.log(e);
    }
}

const invoiceStore = useInvoiceStore();
const updateStatus = async ( newStatus ) => {
    const formData = {
        id: props.id,
        status: newStatus
    };
    try{
        const response = await invoiceStore.update(formData);
        if(response.status == 200){
            props.status = newStatus;
            if(props.status == 3) 
                props.notVisible = true;
        }
    }catch(e){
        console.log(e);
    }
}


const formatDate = (date) => {
    return format(new Date(date), 'yyyy-MM-dd');
};

const status = {0: 'Procesando', 1: 'Creada', 2: 'Enviada', 3: 'Pagada'}; 

const getStatus = (numStatus) => {
    return status[numStatus];
}

const name = ref("");

const props = defineProps({
        client_id: {
            type: Number,
            default: 0,
            requeried: true
        },
        status: {
            type: Number,
            default: 0,
            requeried: true
        },
        price: {
            type: Number,
            default: 0,
            requeried: true 
        },
        created_at: String,
        id: Number,
        notVisible: Boolean,
});

onMounted(async() => {
    const params = {
        client_id: props.client_id,
        user_id: 1,
    };
    try {
        const store = useClientStore();
        name.value = await store.getName(params);
    } catch (e) {
        console.log(e);
    }
});



</script>

<style scoped>
.status {
  text-align: end;
  font-size: smaller;
  margin-bottom: 8px;
}

.separator {
  border-top: 1px solid #ccc;
  margin: 8px 0;
}

.card-info {
  display: flex;
  flex-direction: column;
}

.card-links {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
}

.status-container {
  display: flex;
  align-items: center; /* Centra verticalmente los elementos dentro del contenedor */
  justify-content: space-between; /* Coloca espacio entre los elementos */
}

.status-text {
  margin-left: 10px; /* Espacio entre el botón y el texto del estado */
}
</style>