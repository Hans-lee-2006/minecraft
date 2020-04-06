<template>
  <div class="hello">
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
