<template>
  <nav class="sub-navbar">
    <ul>
      <li>
<<<<<<< HEAD
        <router-link :to="{ name: 'invoices' }">Sin terminar</router-link>
        <router-link :to="{ name: 'invoices.summaries' }" class="router-invoice">Filtrar</router-link>
=======
        <router-link :to="{ name: 'invoices' }">En proceso</router-link>
        <router-link :to="{ name: 'invoices.summaries' }">Resumen de Facturas</router-link>
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
      </li>
    </ul>
  </nav>
</template>


<style lang="scss" scoped>
.sub-navbar {
  color: #126979;
  width: 100%;
  padding: 0;
}

.sub-navbar ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.sub-navbar li {
  margin: 0 10px;
  position: relative;
}

.sub-navbar a {
  color: #126979;
  text-decoration: none;
  padding: 20px;
  font-size: 20px;
  position: relative;

<<<<<<< HEAD
&.router-link-active{
      color: rgb(218, 187, 15);
    }
}

=======
  &.router-link-exact-active{
            color: rgb(218, 187, 15);
    }
}



>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
.sub-navbar .active {
  font-weight: bold;
}


.sub-navbar a:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
<<<<<<< HEAD
  height: 2px;
  background-color: #126979;
=======
  height: 2px; /* Altura de la línea */
  background-color: #126979; /* Color de la línea */
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b

}
</style>