 <template>
  <div id="app">
    <nav class="ui menu">
      <router-link class = "fat-only" to = "/"><i class="home icon"></i>首頁</router-link>
      <router-link class = "fat-only" to = "/myworld">我的作品</router-link>
      <router-link class = "fat-only" to = "/p1">寫給麻瓜</router-link>
      <router-link class = "fat-only" to = "/p2">寫給初學者</router-link>
      <router-link class = "fat-only" to = "/p3">寫給老手</router-link>
      <span id = "fb" class="fat-only">
        <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhans-lee-2006.github.io%2Fminecraft%2F%23%2F&layout=button_count&size=small&width=73&height=20&appId" width="73" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      </span>
      <router-link class = "thin-only" to = "/"><i class="home icon"></i></router-link>
      <router-link class = "thin-only" to = "/myworld">作品</router-link>
      <router-link class = "thin-only" to = "/p1">麻瓜</router-link>
      <router-link class = "thin-only" to = "/p2">初學</router-link>
      <router-link class = "thin-only" to = "/p3">老手</router-link>
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
  background-image: url('https://i.imgur.com/g53gEVR.jpg');
  background-repeat: repeat;
}

.router-link-exact-active.router-link-active {
  font-size: 1.5em;
  color: blue !important;
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
  padding: 5px;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
}

.ui.menu a {
  margin: 0 0.5em;
  text-decoration: none;
}

.mc {
  margin-top: 3em;
}

#fb {
  position: relative;
  top: 3px;
}

@media screen and (min-width: 421px) {
  .thin-only {
    display: none !important;
  }
}

@media screen and (max-width: 420px) {
  .fat-only {
    display: none !important;
  }
}
</style>
