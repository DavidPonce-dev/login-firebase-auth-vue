<template>
  <nav class="navbar navbar-dark bg-dark">
    <p class="navbar-brand" v-if="!user.loggedIn">userAuth<FirebaseLogo /><VueLogo /></p>
    <p class="navbar-brand" v-else>Bienvenido {{user.data.displayName}}<FirebaseLogo /><VueLogo /></p>
    <div class="left">
      <router-link class="home" to="/">Inicio</router-link>
    </div>

    <div class="right" v-if="!user.loggedIn">
      <router-link to="/login">Iniciar sesion</router-link>
      <router-link to="/register">Registrar</router-link>
    </div>
    <div class="right" v-else>
      <router-link to="/dashboard">Dashboard</router-link>
      <a href="#" @click.prevent="signOut">Sign out</a>
    </div>
  </nav>
</template>


<script>
import { mapGetters } from "vuex";

import firebase from 'firebase/app'
import 'firebase/auth'

import FirebaseLogo from "./SVGlogos/FirebaseLogo";
import VueLogo from "./SVGlogos/VueLogo";
export default {
  components: {
    FirebaseLogo,
    VueLogo,
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
    }),
  },
  methods: {
    signOut() {
      firebase.auth().signOut()
      .then(() => {
        this.$router.replace({
          name: "Home",
        });
      });
    },
  },
};
</script>

<style scoped>
a {
  color: #fff;
  padding: 5px 10px;
}
a.router-link-exact-active {
  color: #42b983;
}
p{
  margin:0;
}
.right {
  margin-left: auto;
}
.left {
  margin-right: auto;
  margin-left: 10px;
}
</style>