<template>
  <div class="card" style="width: 18rem">
    <img :src="img" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{titulo}}</h5>
      <p class="card-text">{{texto}}</p>
      <router-link
        class="btn btn-primary"
        :to="link"
      >
        {{linkText}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    titulo:{
      type:String,
      required:false,
      default:''
    },
    texto:{
      type:String,
      required:false,
      default:''
    },
    img:{
      type: String,
      required:false,
      default:''
    },
    link:{
      type:String,
      required:false,
      default:'#'
    },
    linkText:{
      type:String,
      required:false,
      default:''
    }
  }
};
</script>

<style>
.card{
  margin: 0 auto;
}
</style>