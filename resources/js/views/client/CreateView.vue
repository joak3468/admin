<template>
    <Base>
        <NavBar/>
        <h3>Crear nuevo cliente:</h3>
        <Form/>
    </Base>
</template>

<script setup>
import Form from '@/components/client/Form.vue';
import Base from '@/layout/Base.vue';
import NavBar from '@/layout/client/NavBar.vue';
</script>