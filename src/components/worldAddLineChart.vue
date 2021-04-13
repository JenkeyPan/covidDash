<template>
  <el-row>
        <el-col>
            <div class="grid-content bg-purple">
                <div id="worldAddLineChart"></div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import * as echarts from 'echarts'
import jsonp from 'jsonp'
export default {
  name: 'WorldAddLineChart',
  mounted () {
    this.getWorldAddData()
  },
  methods:{
    getWorldAddData() {
      jsonp('https://view.inews.qq.com/g2/getOnsInfo?name=disease_foreign', {}, (err, result) => {
        if (!err) {
          let data = JSON.parse(result.data)
          console.log('世界新增确诊趋势')
          let dateList = []//横坐标--日期
          let newAddConfirmList = []//纵坐标--确诊人数
          for(let i = 0; i < data.globalDailyHistory.length; i++) {
             newAddConfirmList.push(data.globalDailyHistory[i].all.newAddConfirm)
             dateList.push(data.globalDailyHistory[i].date)
          }
          let myChart = echarts.init(document.getElementById('worldAddLineChart'),'dark')
            const option = {
            name: '世界新增确诊趋势',
            title: {
              text: '世界新增确诊趋势'
            },
            xAxis: {
                type: 'category',
                data: dateList
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: newAddConfirmList,
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
#worldAddLineChart{
   width: 500px;
    height: 300px;
}
</style>