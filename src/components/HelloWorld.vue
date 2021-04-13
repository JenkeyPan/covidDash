<template>
  <div class="page">
    <Header/>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <lineChart/>
          <LocalAddLineChart/>
          <NowConfirmLineChart/>
        </div>
      </el-col>
      <el-col :span="8" :gutter="20">
        <div class="grid-content bg-purple-light">
          <Digit/>
          <chinaMap/>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
            <AddTrendLineChart/>
            <ChinaNews/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ChinaMap from './ChinaMap.vue'
import lineChart from './left/lineChart.vue'
import Digit from './middle/Digit.vue'
import LocalAddLineChart from './left/localAddLineChart.vue'
import NowConfirmLineChart from './left/nowConfirmLineChart';
import AddTrendLineChart from './addTrendLineChart';
import Header from './Header.vue'
import ChinaNews from './chinaNews'
export default {
  name: 'HelloWorld',
  components: {
    Header,
     ChinaMap,
    lineChart,
    Digit,
    LocalAddLineChart,
    NowConfirmLineChart,
    AddTrendLineChart,
    ChinaNews
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
