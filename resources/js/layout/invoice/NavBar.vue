<template>
  <nav class="sub-navbar">
    <ul>
      <li>
        <router-link :to="{ name: 'invoices' }">Sin terminar</router-link>
        <router-link :to="{ name: 'invoices.summaries' }" class="router-invoice">Filtrar</router-link>
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

&.router-link-active{
      color: rgb(218, 187, 15);
    }
}

.sub-navbar .active {
  font-weight: bold;
}


.sub-navbar a:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #126979;

}
</style>