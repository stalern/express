<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to use Aladdin Express and have the honour to read the source code,<br>
      please check out the
      <a href="https://easydoc.xyz/p/20238801/EpmZOqVM" target="_blank" rel="noopener">Aladdin Express API document</a>.
    </p>
    <h3>Friendship Links</h3>
    <ul>
      <li><a href="https://cn.vuejs.org/" target="_blank" rel="noopener">vue.js</a></li>
      <li><a href="http://wxxlamp.cn" target="_blank" rel="noopener">wxxlamp</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin:  10px;
}
a {
  color: #b9512d;
}
</style>
