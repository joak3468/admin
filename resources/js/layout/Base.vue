<template>
    <div>
        <Navbar />
        <div class="container-fluid">
            <slot></slot>
        </div>
    </div>
    </template>

<script setup>
import Navbar from '@/layout/Navbar.vue';
</script>
