<template>
  <div class="hello">
  <img src="https://lh3.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP=s360-rw">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="block">
        <h2>相關連結</h2>
        <ol>
          <li><a href="https://www.minecraft.net/zh-hant/" target = "_blank">官網</a></li>
          <li><a href="https://www.curseforge.com/minecraft/modpacks" target = "_blank">全球最大的模組(mod)網站</a></li>
          <li><a href="https://mcfuns.com.tw/category/%E9%81%8A%E6%88%B2%E6%9D%90%E8%B3%AA/%E5%85%89%E5%BD%B1%E5%8C%85/" target = "_blank">繁中mod網站</a></li>
          <li><a href="https://howtobullshit.me/" target = "_blank">廢文產生器</a></li>
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
      <p>這裡是我的個人網站我會放上我自己的地圖，跟我正在玩的模組，跟我發現的有趣的網站。當然主要都還是跟minecraft有關，但還是會有一些其他的，畢竟這是我唯一有玩的遊戲啊!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to  minecraft'
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
