<template>
  <div class="hello">
    <vue-headful title="寫給麻瓜"/>
    <iframe src="https://hackmd.io/HuVYJXouSi6uZd8oNXmJQA?view"></iframe>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  margin-top: 50px;
}

iframe {
  width: 100%;
  height: 100vh;
  margin-bottom: -50px;
}

</style>
