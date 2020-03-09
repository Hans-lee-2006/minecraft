<template>
  <div id="app">
    <nav class="ui menu">
      <router-link to = "/">home</router-link>
      <router-link to = "/myworld">我的作品</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

body {
  background-image: url('/static/bg-img.jpeg');
  background-repeat: repeat;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.ui.menu {
  background-color: white;
  padding: 0.5em;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
}

.mc {
  margin-top: 3em;
}
</style>
