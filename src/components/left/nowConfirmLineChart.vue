<template>
  <el-row>
        <el-col>
            <div class="grid-content bg-purple">
                <div id="nowConfirmLineChart"></div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import * as echarts from 'echarts'
import jsonp from 'jsonp'
export default {
  name: 'NowConfirmLineChart',
  mounted () {
    this.getNowConfirmData()
  },
  methods:{
    getNowConfirmData() {
      jsonp('https://view.inews.qq.com/g2/getOnsInfo?name=disease_other', {}, (err, result) => {
        if (!err) {
          let data = JSON.parse(result.data)
          console.log('本土现有确诊趋势')
          let dateList = []//横坐标--日期
          let nowConfirmList = []//纵坐标--数字
          for(let i = 0; i < data.chinaDayList.length; i++) {
             nowConfirmList.push(data.chinaDayList[i].nowConfirm)
             dateList.push(data.chinaDayList[i].date)
          }
          let myChart = echarts.init(document.getElementById('nowConfirmLineChart'),'dark')
          const option = {
            name: '本土现有确诊趋势',
            title: {
              text: '本土现有确诊趋势'
            },
            xAxis: {
                type: 'category',
                data: dateList
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: nowConfirmList,
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
#nowConfirmLineChart{
   width: 400px;
    height: 300px;
}
</style>