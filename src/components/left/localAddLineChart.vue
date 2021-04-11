<template>
  <el-row>
        <el-col>
            <div class="grid-content bg-purple">
                <div id="localAddLineChart"></div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import * as echarts from 'echarts'
import jsonp from 'jsonp'
export default {
  name: 'LocalAddLineChart',
  mounted () {
    this.getLocalAddData()
  },
  methods:{
    getLocalAddData() {
      jsonp('https://view.inews.qq.com/g2/getOnsInfo?name=disease_other', {}, (err, result) => {
        if (!err) {
          let data = JSON.parse(result.data)
          console.log('本土新增趋势')
          console.log(data)
          let dateList = []//横坐标--日期
          let localAddConfirmList = []//纵坐标--数字
          for(let i = 0; i < data.chinaDayAddList.length; i++) {
             localAddConfirmList.push(data.chinaDayAddList[i].localConfirmadd)
             dateList.push(data.chinaDayAddList[i].date)
          }
          let myChart = echarts.init(document.getElementById('localAddLineChart'),'dark')
          const option = {
            name: '本土新增确诊趋势',
            title: {
              text: '本土新增确诊趋势'
            },
            xAxis: {
                type: 'category',
                data: dateList
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: localAddConfirmList,
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
#localAddLineChart{
   width: 400px;
    height: 300px;
}
</style>