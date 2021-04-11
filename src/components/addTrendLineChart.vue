<template>
  <el-row>
        <el-col>
            <div class="grid-content bg-purple">
                <div id="addTrendLineChart"></div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import * as echarts from 'echarts'
import jsonp from 'jsonp'
export default {
  name: 'AddTrendLineChart',
  mounted () {
    this.getAddTrendData()
  },
  methods:{
    getAddTrendData() {
      jsonp('https://view.inews.qq.com/g2/getOnsInfo?name=disease_other', {}, (err, result) => {
        if (!err) {
          let data = JSON.parse(result.data)
          console.log('本土现有确诊趋势')
          let dateList = []//横坐标--日期
          let confirmList = []//纵坐标--确诊人数
          let suspectList = []//纵坐标--疑似人数
          for(let i = 0; i < data.chinaDayList.length; i++) {
             confirmList.push(data.chinaDayAddList[i].confirm)
             suspectList.push(data.chinaDayAddList[i].suspect)
             dateList.push(data.chinaDayAddList[i].date)
          }
          let myChart = echarts.init(document.getElementById('addTrendLineChart'),'dark')
          const option = {
            name: '本土疫情新增趋势',
            title: {
              text: '本土疫情新增趋势'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['新增确诊', '新增疑似']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                data: dateList
            },
            yAxis: {
                type: 'value'
            },
            series: [
              {
                name: '新增确诊',
                data: confirmList,
                type: 'line',
                smooth: true
              },
              {
                name: '新增疑似',
                data: suspectList,
                type: 'line',
                smooth: true
              }
            ]
          };
          myChart.setOption(option)
        }
      })
    }
  }
  
}
</script>
<style>
#addTrendLineChart{
   width: 400px;
    height: 300px;
}
</style>