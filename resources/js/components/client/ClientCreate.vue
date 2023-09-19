<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="form-group row">
                    <label for="name" class="col-sm-3 col-form-label">Name</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="name" placeholder="Enter your name" name="name" v-model="name">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="cuil" class="col-sm-3 col-form-label">CUIL</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="cuil" placeholder="Enter your CUIL" name="cuil" v-model="cuil">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="iva" class="col-sm-3 col-form-label">IVA</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="iva" placeholder="Enter your IVA" name="iva" v-model="iva">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="address" class="col-sm-3 col-form-label">Address</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="address" placeholder="Enter your address" name="address" v-model="address">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="sale_condition" class="col-sm-3 col-form-label">Sale condition</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="sale_condition" placeholder="Enter the sale condition" name="sale_condition" v-model="sale_condition">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="price" class="col-sm-3 col-form-label">Price</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="price" placeholder="Enter the price" name="price" @input="handlePriceInput" v-model="price">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="message" class="col-sm-3 col-form-label">Message</label>
                    <div class="col-sm-9">
                        <textarea class="form-control" id="message" placeholder="Enter a message" name="message" v-model="message"></textarea >
                    </div>
                </div>


                <button type="submit" class="btn btn-primary mt-2" @click="submitForm">Submit</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useClientStore } from '@/store/client';
import useAuthStore from '@/store/auth';
const store = useAuthStore();

let name = ref("");
let cuil = ref("");
let iva = ref("");
let address = ref("");
let sale_condition = ref("");
let price = ref("");
let message = ref("");

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
        message: message.value
    };

    try {
        const response = await clientStore.create(formData);
        if(response === 201) {
            console.log('Creado correctament');
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