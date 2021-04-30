<template>
   <el-row>
        <el-col>
            <div class="grid-content">
                <china-vaccine-line-chart/>
                <vaccine-digit/>
                <vaccine-table/>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import * as echarts from 'echarts'
import 'echarts/lib/chart/map/china.js'//引入echarts中的中国地图
import jsonp from 'jsonp'//引入jsonp
import VaccineDigit from './VaccineDigit'
import ChinaVaccineLineChart from './chinaVaccineLineChart'
import VaccineTable from './vaccineTable'

export default {
  name: 'VaccineMap',
  mounted() {
  },
  components:{
    ChinaVaccineLineChart,
    VaccineDigit,
    VaccineTable
    
  },
  methods: {
   
  }
}
</script>
<style>

</style>