<template>
  <div id="app">
    <Header/>
    <router-view class="container"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  color: #234
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

img {
  max-width: 100%;
}

.v-enter {
  opacity: 0;
  transform: translate3d(-10px, 0, 0);
}

.v-enter-active {
  transition: all 300ms;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.content {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  grid-gap: 30px;
}

@media screen and (max-width: 400px) {
  .content {
    display: block;
  }  
}
</style>
