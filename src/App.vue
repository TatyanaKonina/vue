<template>

<div id ="app">
  <v-select
       :options="options"
       @select="optionSelect"
       :selected="selected"
  />
  <p>Option:{{selected}}</p>


  <!-- <v_main_wrapper/> -->

</div>

</template>

<script>
import vSelect from './components/v-select'
import v_main_wrapper from "./components/v-main-wrapper"
export default {
  name: 'App',
  components: {
   // v_main_wrapper,
   vSelect
  },
  
  data(){
    return {
        options:[
          {name: 'Option 1',value: 1},
          {name: 'Option 2',value: 2},
          {name: 'Option 3',value: 3},
          {name: 'Option 4',value: 4}
        ],
        selected: 'Select'
    }
  },
  methods:{
    optionSelect(option){
      this.selected = option.name
    }
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
