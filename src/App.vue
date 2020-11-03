<template>
<div id ="app">
  <h1>Hello Vie</h1>
  <v_main_wrapper/>

</div>

</template>

<script>
import v_main_wrapper from "./components/v-main-wrapper"
export default {
  name: 'App',
  components: {
    v_main_wrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
