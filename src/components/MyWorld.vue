<template>
  <div class="hello">
  <img class="mc" src="https://lh3.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP=s360-rw">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="block">
        <h2>我的作品</h2>
        <ol>
          <li v-for = "l in links" v-bind:key = "l.name"><a :href="l.url" target = "_blank">{{ l.name }}</a>
          <span class="more">{{ l.des }}</span>
          </li>
        </ol>
      </div>
    </div>
    <div class="container">
      <p>這裡是我的個人網站我會放上我自己的地圖，跟我正在玩的模組，跟我發現的有趣的網站。當然主要都還是跟minecraft有關，但還是會有一些其他的，畢竟這是我唯一有玩的遊戲啊!</p>
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
        {name: '生存', url: '/static/生存.zip', des: '詳細描述'}
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
.mc {
  width: 20vmin;
}
.more {
  margin-left: 2em;
}
</style>
