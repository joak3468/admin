<template>
<!--<p v-bind:class="{'danger' : hasError}">Mesaje enviado correctamente</p>-->
<p :class="{'danger' : hasError}">Mesaje enviado correctamente</p>

<p :style="{
    backgroundColor : '#ccc', color : c
}">Mesaje enviado correctamente</p>



<button v-on:click="handleClick()">Cambiar color</button>

</template>

<script setup>

    import {ref} from 'vue';
    let hasError = true;

    let c = ref('#fff');

    const handleClick = () => c.value = '#ff0000';

</script>


<style>
.danger{
    color: red;
}
</style>