<template>
  <div> 
    <NavMenu/>
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
import WorldMap from './world/worldMap'
import WorldAddMap from './world/worldAddMap'
import WorldDigit from './world/worldDigit'
import WorldAddLineChart from './world/worldAddLineChart'
import WorldAddTrendLineChart from './world/worldAddTrendLineChart'
import WorldTopTenBarChart from './world/worldTopTenBarChart'
import NavMenu from './NavMenu'
export default {
  name: "World",
  components: {
    WorldMap,
    WorldAddMap,
    WorldDigit,
    WorldAddLineChart,
    WorldAddTrendLineChart,
    WorldTopTenBarChart,
    Header,
    NavMenu
  }
}
</script>
<style>

</style>