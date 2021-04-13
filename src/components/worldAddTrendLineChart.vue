<template>
  <el-row>
        <el-col>
            <div class="grid-content bg-purple">
                <div id="worldAddTrendLineChart"></div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import * as echarts from 'echarts'
import jsonp from 'jsonp'
export default {
  name: 'WorldAddTrendLineChart',
  mounted () {
    this.getWorldAddTrendData()
  },
  methods:{
    getWorldAddTrendData() {
      jsonp('https://view.inews.qq.com/g2/getOnsInfo?name=disease_foreign', {}, (err, result) => {
        if (!err) {
          let data = JSON.parse(result.data)
          console.log('世界新增确诊趋势')
          let dateList = []//横坐标--日期
          let confirmList = []//纵坐标--确诊人数
          let deadList = []
          for(let i = 0; i < data.globalDailyHistory.length; i++) {
             confirmList.push(data.globalDailyHistory[i].all.confirm)
             dateList.push(data.globalDailyHistory[i].date)
             deadList.push(data.globalDailyHistory[i].all.dead)
          }
          let myChart = echarts.init(document.getElementById('worldAddTrendLineChart'),'dark')
            const option = {
            name: '世界确诊趋势',
            title: {
              text: '世界确诊趋势'
            },
             tooltip: {
                trigger: 'axis'
            },
            toolbox: {

            },
            legend: {
                data: ['确诊人数', '死亡人数']
            },
            xAxis: {
                type: 'category',
                data: dateList
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: '确诊人数',
                data: confirmList,
                type: 'line',
                smooth: true
              },
              {
                name: '死亡人数',
                data: deadList,
                type: 'line',
                smooth: true
              }]
          };
          myChart.setOption(option)
        }
      })
    }
  }
  
}
</script>
<style>
#worldAddTrendLineChart{
   width: 400px;
    height: 300px;
}
</style>