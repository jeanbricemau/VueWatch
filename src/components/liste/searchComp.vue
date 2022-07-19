<template>
  <h1>Cherchr un film</h1>
  <p>Tapper votre recherche</p>
  <input  v-model="search" @keyup="Search(search)" />
  <section id="CARDS">
      <tr v-for="movie in movies" v-bind:key="movie.id">
        <cardComp :movie="movie"/>
      </tr>
  </section>


</template>

<script>
import axios from "axios";
import cardComp from "../cardComp.vue";

export default {
  name: "searchComp",
  components: {
    cardComp,
  },
  props: {
    URL: String,
  },
  data() {
     return {
        movies: [],  };
  },
  methods: {
    Search(search){
      axios
      .get(this.URL + search)
      .then((res) => {
        this.movies = res.data.results;
      });
  },

  },

};
</script>

<style>
#CARDS{
    display: flex;
    flex-direction: row;
    overflow: scroll !important;
    width: 90%;

  }
</style>
