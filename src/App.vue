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
  background-image: url('/static/white-painted-wall-1939485.jpg');
  background-repeat: repeat;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif,
               'Microsoft JhengHei', /*  中文字型 */
                'Microsoft YaHei', /*  中文字型 */
                'STHeiti', /*  中文字型 */
                'Apple LiGothic Medium'; /*  中文字型 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.ui.menu {
  text-align: left;
  background-color: hsla(186, 100%, 56%, 0.5);
  padding: 0.5em;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
}

.ui.menu a, .ui.menu a:visited {
  margin: 0 2em;
  color: black;
  text-decoration: none;
}

.ui.menu a:hover {
 text-decoration: underline; 
}

.router-link-exact-active.router-link-active {
  font-size: 1.5em;
  color: blue !important;
}

.mc {
  margin-top: 3em;
}
</style>
