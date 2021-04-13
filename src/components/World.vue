<template>
  <div> 
    <Header/>
    <el-row>
      <el-col :span="16"><div class="grid-content bg-purple">
        <WorldDigit/>
        <WorldAddMap/>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <WorldAddLineChart/>
          <WorldAddTrendLineChart/>
          <WorldTopTenBarChart/>
        </div>
      </el-col>
    </el-row>
  </div>

</template>
<script>
import Header from './Header'
import WorldMap from './worldMap'
import WorldAddMap from './worldAddMap'
import WorldDigit from './worldDigit'
import WorldAddLineChart from './worldAddLineChart'
import WorldAddTrendLineChart from './worldAddTrendLineChart'
import WorldTopTenBarChart from './worldTopTenBarChart'
export default {
  name: "World",
  components: {
    WorldMap,
    WorldAddMap,
    WorldDigit,
    WorldAddLineChart,
    WorldAddTrendLineChart,
    WorldTopTenBarChart,
    Header
  }
}
</script>
<style>

</style>