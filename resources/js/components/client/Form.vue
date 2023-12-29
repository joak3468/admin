<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="form-group row">
                    <label for="name" class="col-sm-3 col-form-label">Nombre</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="name" placeholder="Nombre..." name="name" v-model="props.name">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="cuil" class="col-sm-3 col-form-label">CUIL</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="cuil" placeholder="Cuil..." name="cuil" v-model="props.cuil">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="iva" class="col-sm-3 col-form-label">IVA</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="iva" placeholder="Enter your IVA" name="iva" v-model="props.iva">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="address" class="col-sm-3 col-form-label">Direccion</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="address" placeholder="Enter your address" name="address" v-model="props.address">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="sale_condition" class="col-sm-3 col-form-label">Condicion frente al iva</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="sale_condition" placeholder="Enter the sale condition" name="sale_condition" v-model="props.sale_condition">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="price" class="col-sm-3 col-form-label">Precio</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="price" placeholder="Enter the price" name="price" @input="handlePriceInput" v-model="props.price">
                    </div>
                </div>


                <div class="form-group row">
                    <label for="addemailress" class="col-sm-3 col-form-label">Email</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="email" placeholder="Enter your email" name="email" v-model="props.email">
                    </div>
                </div>



                <div class="form-group row">
                    <label for="message" class="col-sm-3 col-form-label">Mensaje</label>
                    <div class="col-sm-9">
                        <textarea class="form-control" id="message" placeholder="Enter a message" name="message" v-model="props.message"></textarea >
                    </div>
                </div>

                
                <button type="submit" class="btn btn-primary mt-2" @click="submitForm">{{ submitBtn }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { useClientStore } from '@/store/client';
import router from '@/router';

const props = defineProps({
    name: String,
    cuil: Number,
    iva: String,
    address: String,
    sale_condition: String,
    price: Number,
    email: String,
    message: String,
    isUpdate: {
        default: false,
        type: Boolean
    },
    clientId: Number
});

const submitBtn = ref("");
submitBtn.value = props.isUpdate ? 'Actualizar' : 'Crear'; 
const clientStore = useClientStore();


function handlePriceInput() {
  price.value = price.value.replace(/[^0-9]/g, '');
}


const submitForm = async () => {
    const formData = {
        user_id: 1,
        name: props.name,
        cuil: props.cuil,
        iva: props.iva,
        address: props.address,
        sale_condition: props.sale_condition,
        price: props.price,
        message: props.message,
    };

    try {
        if (props.isUpdate) 
            formData.id = props.clientId;    
        const response = props.isUpdate ? await clientStore.update(formData) : await clientStore.create(formData);
        
        if(response.status === 200)
            router.push({name: 'clients'});
    } catch (e) {
        console.log('Error', e);
    }
}

</script>

<style scoped>
.form-group {
    margin-bottom: 1rem;
}


</style>