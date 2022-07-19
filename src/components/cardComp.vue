<template>
  <div class="card">
    <routerLink      class="moreInfoLink"      :to="{ name: 'Single', params: { id: this.movie.id } }">
      <img class="card-img" :src="preIMG + movie.poster_path  "  />
      <h5 class="card-title">{{ movie.title }}</h5>
    </routerLink>
  </div>
</template>
<script>
import { routerLink } from "vue-router";

export default {
  name: "cardComp",
  components: {
    routerLink,
  },
  props: {
    movie: null
  },

  data() {
    return {
      preIMG: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'
    };

  },
};
</script>

<style scoped lang="scss">
.card{
  border-radius: 5px;
  overflow:hidden;
  .card-img{
    width: calc(2*116px);
    height: auto;
  z-index: 0;
  }
  .card-title{
    width: fit-content;
    margin: auto;
    z-index: 1;


  }
}
</style>
