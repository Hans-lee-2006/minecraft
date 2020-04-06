<template>
  <div class="hello">
  <img class="mc" src="https://lh3.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP=s360-rw">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="block">
        <h2>請看說明</h2>
        <ol>
          <li v-for="l in links" v-bind:key="l.name">
            <router-link id ="big" :to = "l.route">
              <span :class="l.class">{{ l.name }}</span>
            </router-link>
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
        {name: '寫給麻瓜', route: '/p1', url: 'https://hackmd.io/HuVYJXouSi6uZd8oNXmJQA?view', class: 'blue'},
        {name: '寫給初學者', route: '/p2', url: 'https://hackmd.io/5fJF_mU8S0e915U6h7dG2w?view', class: 'green'},
        {name: '寫給老手', route: '/p3', url: 'https://hackmd.io/A7Wgqb4IQh27zXzZ7BbTFQ?view', class: 'red'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#big {
  font-size: 1.5em;
  text-decoration: none;
}

.blue{
  color: blue;
}
.green{
}
.red{
  color: red;
  /* text-shadow: 2px 2px 0px red;*/
}
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

li {
  font-size: 22px;
}

a {
  color: #42b983;
}
.mc {
  width: 20vmin;
}
</style>
