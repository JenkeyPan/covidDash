<template>
   <el-row>
        <el-col>
            <div class="grid-content">
              <NavMenu/> <vaccine-digit/>
              <el-divider></el-divider>
              <el-row>
              <el-col :span="8"><div class="grid-content bg-purple"><china-vaccine-line-chart/></div></el-col>
              <el-col :span="16"><div class="grid-content bg-purple-light"><vaccine-table/></div></el-col>
            </el-row>             
            </div>
        </el-col>
    </el-row>
</template>
<script>
import * as echarts from 'echarts'
import 'echarts/lib/chart/map/china.js'//引入echarts中的中国地图
import jsonp from 'jsonp'//引入jsonp
import VaccineDigit from './vaccine/VaccineDigit'
import ChinaVaccineLineChart from './vaccine/chinaVaccineLineChart'
import VaccineTable from './vaccine/vaccineTable'
import NavMenu from './NavMenu'

export default {
  name: 'VaccineMap',
  mounted() {
  },
  components:{
    ChinaVaccineLineChart,
    VaccineDigit,
    VaccineTable,
    NavMenu
  },
  methods: {
   
  }
}
</script>
<style>

</style>