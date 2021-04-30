<template>
  <div class="page">
    <NavMenu/>
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
    <VaccineMap/>
  </div>
</template>

<script>
import ChinaMap from './china/middle/ChinaMap'
import lineChart from './china/left/lineChart'
import Digit from './china/middle/Digit'
import LocalAddLineChart from './china/left/localAddLineChart'
import NowConfirmLineChart from './china/left/nowConfirmLineChart'
import AddTrendLineChart from './china/right/addTrendLineChart'
import Header from './Header'
import ChinaNews from './china/right/chinaNews'
import NavMenu from './NavMenu'
import VaccineMap from './vaccine/vaccineMap'
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
    ChinaNews,
    NavMenu,
    VaccineMap
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
