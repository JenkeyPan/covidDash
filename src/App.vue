<template>
  <div id="app">
    <HelloWorld/>
    <chinaMap/>
    <lineChart/>
    <Digit/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ChinaMap from './components/ChinaMap.vue'
import lineChart from './components/left/lineChart.vue'
import Digit from './components/middle/Digit.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    ChinaMap,
    lineChart,
    Digit
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url("~@/assets/background.png");
}
</style>
