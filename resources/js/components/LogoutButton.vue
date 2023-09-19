<template>
    <button @click="logout">Logout</button>
  </template>
  
  <script>
  import { useAuthStore } from '@/store/auth';
  
  export default {
    methods: {
      logout() {
        const authStore = useAuthStore();
        authStore.logout();
        // Redirige al usuario a la página de inicio o a donde desees después del logout
        this.$router.push({ name: 'home' });
      },
    },
  };
  </script>
  
  <template>
    <nav>
      <router-link v-if="!isAuthenticated" :to="{ name: 'login' }">Access</router-link>
  
      <router-link :to="{ name: 'clients' }">Clients</router-link>
  
      <router-link :to="{ name: 'createClient' }">Create client</router-link>
  
      <div class="ml-auto">
        <!-- Aquí se incluye el botón de LogoutButton -->
        <LogoutButton v-if="isAuthenticated" />
      </div>
    </nav>
    <router-view />
  </template>
  
  <script>
  import LogoutButton from '@/components/LogoutButton.vue'; // Asegúrate de importar correctamente
  
  export default {
    components: {
      LogoutButton,
    },
    computed: {
      isAuthenticated() {
      },
    },
  };
  </script>
  