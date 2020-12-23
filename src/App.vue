<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
body{
  background: rgba(0, 0, 0, 0.5) url(./assets/wallpaper.jpg) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: calc(100vh - 57px);
  min-width: 100%;
  overflow: hidden;
}
@media (max-width: 576px) { 
  body{
    min-height: 100vh
  }
 }
</style>