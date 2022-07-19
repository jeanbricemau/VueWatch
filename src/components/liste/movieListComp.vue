<template>
  <section id="LIST">
    <div class="d-flex flex-wrap justify-content-around boutons">
      <button @click="changeI(-1)">Precedent</button>
        <span> {{ this.sort_by.at(this.I).name }}</span>
      <button @click="changeI(+1)">Suivant</button>
    </div>
     
  <section id="CARDS">
      <tr v-for="movie in movies" v-bind:key="movie.id">
        <cardComp :movie="movie"/>
      </tr>
  </section>

  </section>
  
  
</template>

<script>
import axios from "axios";
import cardComp from "../cardComp.vue";

export default {
  name: "movieListComp",
  components: {
    cardComp,
  },
  props: {
    URL: String,
  },
  data() {
     return {
        movies: [],
         pages: 0,
          sort_by: [
         {
            value: "&sort_by=vote_count.desc",
        name: "Nombre total de vote",
      },
            {
         value: "&sort_by=vote_count.asc",
         name: "Nombre total de vote -/+",
       },
              {
                value: "&sort_by=revenue.desc",
                name: "Nombre d'entrées +/-",
              },
           {
             value: "&sort_by=revenue.asc",
             name: "Nombre d'entrées -/+",
           },
         
           {
              value: "&sort_by=release_date.desc",
             name: "Date de sorti  +/-",
           },
        {
          value: "&sort_by=release_date.asc",
          name: "Date de sortie -/+ ",
        },
           {
             value: "&sort_by=original_title.desc",
             name: "Alphabetique A-z",
           },

        {
          value: "&sort_by=original_title.asc",
          name: "Alphabetique Z-A",
        },
        
      ],
      I: 0,
    };
  },

  methods: {
    changeI(i) {
       this.I += i;
      if (this.I == -1) {
        this.I = this.sort_by.length;
      } else if (this.I > this.sort_by.length) {
        this.I = 0;
        this.i = 0;
      }
    },
  },
  mounted() {
     this.pages =+ 1;
      axios
      .get(this.URL + this.sort_by.at(this.I).value + "&page=" + this.pages)
      .then((res) => {
        this.movies = res.data.results;
      });
  },
  updated() {
      axios
      .get(this.URL + this.sort_by.at(this.I).value + "&page=" + this.pages)
      .then((res) => {
        this.movies = res.data.results;
      });
  },
};
</script>
<style lang="scss" scoped>
#LIST{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  overflow: hidden;
  width: 100% !important;

  .boutons{
    
    width: 100%;
  }

  #CARDS{
    display: flex;
    flex-direction: row;
    overflow: scroll !important;
    width: 90%;

  }

}
</style>
