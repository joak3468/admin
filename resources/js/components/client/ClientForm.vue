<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="form-group row">
                    <label for="name" class="col-sm-3 col-form-label">Nombre</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="name" placeholder="Nombre..." name="name" v-model="name">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="cuil" class="col-sm-3 col-form-label">CUIL</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="cuil" placeholder="Cuil..." name="cuil" v-model="cuil">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="iva" class="col-sm-3 col-form-label">IVA</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="iva" placeholder="Enter your IVA" name="iva" v-model="iva">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="address" class="col-sm-3 col-form-label">Direccion</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="address" placeholder="Enter your address" name="address" v-model="address">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="sale_condition" class="col-sm-3 col-form-label">Condicion frente al iva</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="sale_condition" placeholder="Enter the sale condition" name="sale_condition" v-model="sale_condition">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="price" class="col-sm-3 col-form-label">Precio</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="price" placeholder="Enter the price" name="price" @input="handlePriceInput" v-model="price">
                    </div>
                </div>


                <div class="form-group row">
                    <label for="addemailress" class="col-sm-3 col-form-label">Email</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="email" placeholder="Enter your email" name="email" v-model="email">
                    </div>
                </div>



                <div class="form-group row">
                    <label for="message" class="col-sm-3 col-form-label">Mensaje</label>
                    <div class="col-sm-9">
                        <textarea class="form-control" id="message" placeholder="Enter a message" name="message" v-model="message"></textarea >
                    </div>
                </div>

                
                <button type="submit" class="btn btn-primary mt-2" @click="submitForm">{{ submitBtn }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useClientStore } from '@/store/client';
import useAuthStore from '@/store/auth';
const store = useAuthStore();
import router from '@/router';



import { useRoute } from 'vue-router';

const route = useRoute();
const client = ref({});
let name = ref("");
let cuil = ref("");
let iva = ref("");
let address = ref("");
let sale_condition = ref("");
let price = ref("");
let message = ref("");
const emails = ref([]);


let isUpdate = route.name === 'updateClient';

const submitBtn = ref("");
submitBtn.value = isUpdate ? 'Actualizar' : 'Crear'; 

if ( isUpdate ) {
    onMounted(async() => {
        console.log('a');
        const params = {
            client_id: route.params.id,
            user_id: 1,
        };

        try {
            const store = useClientStore();
            client.value = await clientStore.getClient(params);

            if(Object.keys(client.value).length > 0) {
                name.value = client.value.name;
                cuil.value = client.value.cuil;
                iva.value = client.value.iva;
                address.value = client.value.address;
                sale_condition.value = client.value.sale_condition;
                price.value = client.value.price;
                message.value = client.value.message;
            }
        }catch(e) {
            console.log(e);
        }
    });

}

function handlePriceInput() {
  price.value = price.value.replace(/[^0-9]/g, '');
}

const clientStore = useClientStore();

const submitForm = async () => {
    const formData = {
        user_id: 1,
        name: name.value,
        cuil: cuil.value,
        iva: iva.value,
        address: address.value,
        sale_condition: sale_condition.value,
        price: price.value,
        message: message.value,
    };



    try {

        if(isUpdate)
            formData.id = parseInt(route.params.id);

        const response = !isUpdate ? await clientStore.create(formData) : await clientStore.update(formData);

        if(response.status === 200) {
            console.log('Creado correctament');
            router.push({name: 'clients'});
        }
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