<template>
  <div class="hello">
  <img src="https://lh3.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP=s360-rw">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="block">
        <h2>相關連結</h2>
        <ol>
          <li v-for="l in links" v-bind:key="l.name">
            <a :href="l.url" target="_blank">
              {{ l.name }}
            </a>
          </li>
        </ol>
      </div>
    </div>
    <div class="container">
      <div class="block">
        <h2>我的作品</h2>
        <ol>
          <li><a href="/static/生存.zip" target = "_blank">生存</a></li>
        </ol>
      </div>
    </div>
    <div class="container">
      <p>這裡是我的個人網站我會放上我自己的地圖，跟我正在玩的模組，跟我發現的有趣的網站。當然主要都還是跟minecraft有關，畢竟這是我唯一有玩的遊戲啊!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to  minecraft',
      links: [
        {name: '官網', url: 'https://www.minecraft.net/zh-hant/'},
        {name: '全球最大的模組(mod)網站', url: 'https://www.curseforge.com/minecraft/modpacks'},
        {name: '繁中mod網站', url: 'https://mcfuns.com.tw/category/%E9%81%8A%E6%88%B2%E6%9D%90%E8%B3%AA/%E5%85%89%E5%BD%B1%E5%8C%85/'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.block {
  width: 250px;
}
p {
  max-width: 600px;
}
h1, h2 {
  font-weight: normal;
}
ol {
  list-style-type:decimal;
}
a {
  color: #42b983;
}
</style>
