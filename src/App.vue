<template>
  <div id="app">
    <router-view/>
    
    
    
    <!-- <WorldMap/>
    <WorldAddMap/>
    
    
    
    
    
    <WorldDigit/>
    <WorldAddLineChart/>
    <WorldAddTrendLineChart/> -->
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
import WorldDigit from './components/worldDigit'
import WorldAddLineChart from './components/worldAddLineChart'
import WorldAddTrendLineChart from './components/worldAddTrendLineChart'
import WorldTopTenBarChart from './components/worldTopTenBarChart'
import ChinaNews from './components/chinaNews'
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
    WorldAddMap,
    WorldDigit,
    WorldAddLineChart,
    WorldAddTrendLineChart,
    WorldTopTenBarChart,
    ChinaNews
  }
}
</script>

<style>
#app {
  background-image: url("~@/assets/background.png");
}
</style>
