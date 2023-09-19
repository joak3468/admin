<template>
    <form action="">
        <input type="text" v-model="inputText">
        <input type="checkbox" v-model="agree"> Acepto los terminos y condiciones


        <select v-model="country">
            <option value="Spain">Spain</option>
            <option value="Uk">Uk</option>
            <option value="France">France</option>
        </select>
    </form>
    <h3>{{ inputText }}</h3>
</template>
<script setup>

import {ref} from 'vue';
let inputText = ref('');
let agree = true;

let country = ref('Spain');
</script>

<!-- <script>
import {ref, defineComponent}  from 'vue';
export default defineComponent({
    data(){
        return {imputText : ''};
    }
});
</script> -->