<template>
   
   <div class="d-flex flex-wrap justify-content-around">
      <button @click="changeI(-1)">Precedent</button>
      <span>Trie => {{ this.sort_by.at(this.I)}}</span>
      <button @click="changeI(+1)" >Suivant </button>
   </div>
   <tbody class="d-flex flex-wrap justify-content-around">
      <tr v-for="movie in movies" v-bind:key="movie.id">
         <cardComp
            :date="movie.release_date"
            :title="movie.title"
            :overview="movie.overview"
            :img="
               `https://image.tmdb.org/t/p/w600_and_h900_bestv2` +
               movie.poster_path
            "
            :movieId="movie.id"
         />
      </tr>
   </tbody>
</template>

<script>
import axios from 'axios';
import cardComp from '../cardComp.vue';

export default {
   name: 'top50Comp',
   components: {
      cardComp,
   },
   props: {
      URL: String,
   },
   data() {
      return {
         movies: [],


      };
   },


      

   updated() {
      axios
         .get(this.URL  )
         .then((res) => {
            this.movies = res.data.results;
         });
   },
};
</script>
