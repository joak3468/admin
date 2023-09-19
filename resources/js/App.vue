
<template >
    <nav v-if="isAuthenticated" class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <div class="d-flex justify-content-start">
        <router-link :to="{ name: 'clients' }">Clients</router-link>
        <router-link :to="{ name: 'createClient' }">Create client</router-link>
        </div>
        <div class="d-flex justify-content-end">
        <button type="button" @click="logout" class="btn btn-outline-danger">Logout</button>
        </div>
    </div>
    </nav>
    <router-view/>
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
#main {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: #2c3e50;
}
nav {
    padding: 30px;
    
    a {
        font-weight: bold;
        color: #2c3e50;
        margin-right: 10px;
        &.router-link-exact-active{
            color: #42b983;
        }
    }
}

</style>