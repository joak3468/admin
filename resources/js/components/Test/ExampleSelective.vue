<template>
    <!--
    <h1 v-if="age < 18">Es menor.</h1>
    <h1 v-else>Es mayor.</h1>
        v-show si no cumple la condicion te crea la etiqueta pero en disabled, cosa de que no la vez.


    
    -->
    <h1 v-show="age < 18">Es menor.</h1>
    <h1 v-show="age > 18">Es mayor.</h1>


    <ul>
        <li v-for="(country, index) in countries" v-bind:key="index">{{ country }}</li>
    </ul>

    <ul>
        <li v-for="country in countriesObj" v-bind:key="country.code">{{ country.name  }}</li>
    </ul>

</template>

<script setup>
import {ref} from 'vue';
let countries = ref ([ 'Spain', 'France', 'UK', 'Italy' ])
let age = 10;


let countriesObj = ref ([ 
    {
        code: 'es',
        name: 'Spain'
    },
    {
        code: 'en',
        name: 'UK',
    },
    {
        code: 'fr',
        name: 'France'
    }
 ])


</script>