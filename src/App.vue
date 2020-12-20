<template>
  <nav>
  </nav>
  <nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Login <FirebaseLogo /> <VueLogo /></a>
    <router-link to="/">Inicio</router-link> |
    <router-link to="/login">Iniciar sesion</router-link> |
    <router-link to="/register">Registrar</router-link>
</nav>
  <router-view />
</template>

<script>
import FirebaseLogo from './components/SVGlogos/FirebaseLogo'
import VueLogo from './components/SVGlogos/VueLogo'
export default {
  components:{
    FirebaseLogo,
    VueLogo
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #fff;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
