<template>
<header>
    <h1><router-link to="/">VueWatch</router-link></h1>
    <nav>
      <router-link to="/top50">Top 50</router-link>
      <router-link to="/TopFrance">Meilleur film Francais</router-link>
      <router-link to="/TopUsa">Meilleur film americain</router-link>
      <router-link to="/TopAnnee">Film sortis cette annee</router-link>
      <router-link to="/Search">Rechercher</router-link>
    </nav>

</header>
    
</template>
<script>
import { routerLink } from "vue-router";


export default {
  name: "headerTemp",
  components: {
    routerLink

  },

  props: {
    title: String,
  },
};
</script>
<style scoped lang="scss">
header{
  width: 99vw;
  display: flex;
  justify-content: space-between;


}
  

</style>
