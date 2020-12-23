<template>
  <div class="container">
    <div class="jumbotron">
      <div class="row">
        <Card
        :img="require('../assets/vue-firebase.png')"
        titulo= "Login vue"
        class="col-6-sm"
        texto= 'Este es un sistema de login basado en vue con firebase como backend. \\n aqui puedes iniciar sesion'
        link= "/login"
        linkText="IniciarSesion"
      />
        <Card
        :img="require('../assets/vue-firebase.png')"
        titulo= "Login vue"
        class="col-6-sm"
        texto= 'Este es un sistema de login basado en vue con firebase como backend. \n aqui puedes iniciar sesion'
        link= "/login"
        linkText="IniciarSesion"
      />
        <Card
        :img="require('../assets/vue-firebase.png')"
        titulo= "Login vue"
        class="col-6-md"
        texto= 'Este es un sistema de login basado en vue con firebase como backend. \n aqui puedes iniciar sesion'
        link= "/login"
        linkText="IniciarSesion"
      />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  components: {
    Card
  }
};
</script>

<style scoped>
.container{
  overflow-y: scroll;
}
.jumbotron {
  background: transparent;
}
</style>