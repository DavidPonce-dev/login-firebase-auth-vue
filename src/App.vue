<template>
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand">Login <FirebaseLogo /><VueLogo /></a>
    <div class="left">
      <router-link class="home" to="/">Inicio</router-link>
    </div>

    <div class="right">
      <router-link to="/login">Iniciar sesion</router-link>
      <router-link to="/register">Registrar</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
import FirebaseLogo from "./components/SVGlogos/FirebaseLogo";
import VueLogo from "./components/SVGlogos/VueLogo";
export default {
  components: {
    FirebaseLogo,
    VueLogo,
  },
};
</script>

<style scoped>
nav a {
  color: #fff;
}
nav > div > a.router-link-exact-active {
  color: #42b983;
}
.right {
  margin-left: auto;
}
.right a{
  margin-left: 15px;
}
.left {
  margin-right: auto;
}
.left a{
  margin-right: 15px;
}
</style>
