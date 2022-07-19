<template>
 
  <div class="mt-5" id="trailer" v-if="video[0]">
  <iframe width="650" height="300" v-bind:src="'https://www.youtube.com/embed/' + video[0].key" frameborder="0"              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen class="shadow"></iframe></div>
  <h1>{{ movie.title }}</h1>
  <p>{{ movie.overview }}</p>
  <img
    :src="`https://image.tmdb.org/t/p/w600_and_h900_bestv2` + movie.poster_path"
    alt=""
  />
</template>

<script>
import axios from "axios";

export default {
  name: "movieComp",
  props: {
    id: Number,
  },

  data() {
    return {
      movie: [],
      video: [],
    };
  },
  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.id +
          "?api_key=1bb6a53d24541d6fce0843f7b08de85d&language=fr-FR"
      )
      .then((res) => {
        this.movie = res.data;
      });
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.id +
          "/videos?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr"
      )
      .then((response) => {
        this.video = response.data.results;
        console.log(this.video);
      });
  },
  mounted() {
    console.log(this.movie);
  },
};
</script>
<style scoped lang="scss">
.youtube {
  width: 40vw;
  height: auto;
  aspect-ratio: 16/9;
}

@media screen and (max-width: 500px) {
  .youtube {
    width: 90vw;
  }
  img {
    width: 90%;
  }
}
</style>
