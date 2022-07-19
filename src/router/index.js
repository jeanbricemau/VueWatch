import { createRouter, createWebHashHistory } from 'vue-router';

import movieListComp from '@/components/liste/movieListComp';
import movieComp from '@/components/movieComp';
import top50Comp from '@/components/liste/top50Comp';
import searchComp from '@/components/liste/searchComp'

const routes = [
  {
    path: '/',
    name: 'home',
    component: movieListComp,
    props:{ URL :'https://api.themoviedb.org/3/discover/movie?api_key=1bb6a53d24541d6fce0843f7b08de85d&language=fr-FR&include_adult=false&include_video=true&vote_count.gte=500'}
  
  },
  {
    path: '/TopFrance', 
    name: 'TopFrance',
    component: movieListComp,
    props:{ URL : 'https://api.themoviedb.org/3/discover/movie?api_key=1bb6a53d24541d6fce0843f7b08de85d&language=fr-FR&include_adult=false&include_video=true&page=1&primary_release_date.gte=1980&with_original_language=fr&with_watch_monetization_types=flatrate&vote_count.gte=500'}
  },
  {
    path: '/TopUsa',
    name: 'TopUsa',
    component: movieListComp,
    props:{ URL : 'https://api.themoviedb.org/3/discover/movie?api_key=1bb6a53d24541d6fce0843f7b08de85d&language=en-US&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate&vote_count.gte=500'}
  },
  {
    path: '/TopAnnee',
    name: 'TopAnnee',
    component: movieListComp,
    props:{ URL : 'https://api.themoviedb.org/3/discover/movie?api_key=1bb6a53d24541d6fce0843f7b08de85d&language=fr-FR&include_adult=false&include_video=true&page=1&primary_release_year=2022&vote_count.gte=500&with_watch_monetization_types=flatrate'}
  },
  {
    path: '/top50',
    name: 'top50',
    component: top50Comp,
    props:{ URL : 'https://api.themoviedb.org/3/discover/movie?api_key=1bb6a53d24541d6fce0843f7b08de85d&language=fr-FR&sort_by=vote_count.desc'}
  },
  {
    path: '/Single/:id',
    name: 'Single',
    component: movieComp,
    props: true
  },
  {
    path:'/Search',
    name:"/Search",
    component: searchComp ,
    props:{ URL : 'https://api.themoviedb.org/3/search/movie?api_key=1bb6a53d24541d6fce0843f7b08de85d&language=fr-FR&query='}
  }

  

] 
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
