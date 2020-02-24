<template>
  <div class="hello">
  <img src="https://lh3.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP=s360-rw">
    <h1>{{ msg }}</h1>
    <div class="container">
      <ol>
        <li><a href="https://www.minecraft.net/zh-hant/" target = "_blank">官網</a></li>
        <li><a href="https://www.curseforge.com/minecraft/modpacks" target = "_blank">全球最大的模組(mod)網站</a></li>
      </ol>
    </div>
    <div class="container">
      <p>《當個創世神》（英語：Minecraft，中國大陸譯作「我的世界」）是一款沙盒遊戲，最初由瑞典遊戲設計師馬庫斯·阿列克謝·泊松（別名Notch）單獨開發，隨後由2009年成立的瑞典公司Mojang開發並發行。玩家可以在一個隨機生成的3D世界內，以帶材質貼圖的立方體為基礎進行遊戲。遊戲中的其他特色包括探索世界、採集資源、合成物品及生存冒險等。遊戲有多種模式，生存模式中玩家必須維持生命並採集資源來打造自己的世界；創造模式中玩家擁有無限的資源並可飛行，大多數玩家會使用此模式來建造大型建築；冒險模式中玩家可在其他玩家客製化的地圖中遊玩。遊戲的Java版以其強大的第三方拓展模組而知名，它們可為遊戲添加各種新的物件、角色和功能。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to  mincraft'
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
