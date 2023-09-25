<template>
    <nav v-if="isAuthenticated" class="navbar" style="background-color: #8f8f8f;">
        <div class="container-fluid">
            <div class="d-flex justify-content-start">
            <router-link :to="{ name: 'clients' }">Clientes</router-link>
            <router-link :to="{name: 'invoices'}">Facturas</router-link>
            </div>
            <div class="d-flex justify-content-end">
            <button type="button" @click="logout" class="btn btn-outline-danger">Logout</button>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '@/store/auth';
import router from '@/router';

const authStore = useAuthStore();

const logout = () => {
    authStore.logout();
    router.push({name: 'login'})
}
const isAuthenticated = computed(() => {
  return authStore.token !== null;
});
</script>

<style lang="scss">
nav {
    padding: 30px;
    margin-bottom: 20px;
    a {
        font-weight: bold;
        font-size: 18px;
        color: #2c3e50;
        margin-right: 10px;
        &.router-link-exact-active{
            color: white;
        }
    }
}

</style>