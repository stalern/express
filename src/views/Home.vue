<template>
  <div class="home">
    <img alt="Aladdin logo" src="../assets/aladdin.jpg">
    <index msg="Welcome to Aladdin Express"/>
  </div>

</template>

<script>
// @ is an alias to /src
import index from '../components/Index'

export default {
  name: 'Home',
  components: {
    index
  }
}
</script>

<style>
  img {
    margin-top: 70px;
    width: 500px;
  }
</style>
