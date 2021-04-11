<template>
  <div id="app">
    <HelloWorld/>
    <chinaMap/>
    <WorldMap/>
    <WorldAddMap/>
    <lineChart/>
    <LocalAddLineChart/>
    <NowConfirmLineChart/>
    <AddTrendLineChart/>
    <Digit/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ChinaMap from './components/ChinaMap.vue'
import lineChart from './components/left/lineChart.vue'
import Digit from './components/middle/Digit.vue'
import LocalAddLineChart from './components/left/localAddLineChart.vue'
import NowConfirmLineChart from './components/left/nowConfirmLineChart';
import AddTrendLineChart from './components/addTrendLineChart';
import WorldMap from './components/worldMap';
import WorldAddMap from './components/worldAddMap'
export default {
  name: 'App',
  components: {
    HelloWorld,
    ChinaMap,
    lineChart,
    Digit,
    LocalAddLineChart,
    NowConfirmLineChart,
    AddTrendLineChart,
    WorldMap,
    WorldAddMap
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
