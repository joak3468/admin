<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="col-md-6">
      <h1>Login</h1>
      <div class="mb-3">
        <label for="user">Usuario</label>
        <input type="email" class="form-control" id="user" aria-describedby="emailHelp" placeholder="Ingresar usuario" name="email" v-model="email">
      </div>
      <div class="mb-3">
        <label for="pass">Contraseña</label>
        <input type="password" class="form-control" id="pass" placeholder="contraseña" name="password" v-model="password">
      </div>

      <button type="submit" class="btn btn-primary mt-2" @click="loginUser">Enviar</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
import router from '../router';

const store = useAuthStore();
let email = ref("");
let password = ref("");
let feedback = ref("");
console.log("fedback", feedback);
const loginUser = async () => {
    const response = await store.login(email.value, password.value) 
    if(response.status == false) 
        feedback.value = "login error"
    else {
        const redirectRoute = router.currentRoute.value.query.redirect;
        router.push(redirectRoute || { name: 'clients' });
    }
}

</script>

<style scoped>

</style>