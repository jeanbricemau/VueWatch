<template>
  <headerTemp />

    <main class="container-fluid m-auto self-align-center">
     <routerView />
    </main>

  <footerTemp />

</template>

<script>
import headerTemp from './components/template/headerTemp'
import {routerView} from 'vue-router'
import footerTemp from './components/template/footerTemp'


export default {      
  name: 'App',
  components: {
    headerTemp, routerView , footerTemp,
  }
}
</script>
<style scoped  lang="scss">
#app{

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  position: fixed;

  width:99vw;
  height:99vh;

main{
  margin: auto;
  height: 100%;
  width: 100%;
overflow: hidden;
}
}

</style>
