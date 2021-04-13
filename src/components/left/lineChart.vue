<template>
    <el-row>
        <el-col>
            <div class="grid-content">
                <div id="chinaLineChart"></div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import * as echarts from 'echarts'
import jsonp from 'jsonp'

// 指定图表的配置项和数据

export default {
  name: 'lineChart',
  mounted () {
   this.getData()
  },
  methods: {
    getData () {
      jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427', {}, (err, result) => {
        if (!err) {
          // 请求数据成功
          console.log('中国折线图')
          let allConfirmedList = []
          let cureList = []
          let deathList = []
          let susList = []
          let dateList = []
          for (let i = 0; i < result.data.historylist.length; i++) {
            allConfirmedList.push(result.data.historylist[i].cn_conNum) // 累计确诊人数
            cureList.push(result.data.historylist[i].cn_cureNum) // 累计治愈人数
            deathList.push(result.data.historylist[i].cn_deathNum)// 累计死亡人数
            susList.push(result.data.historylist[i].cn_susNum)// 疑似人数
            dateList.push(result.data.historylist[i].date)
          }
          let myChart = echarts.init(document.getElementById('chinaLineChart'))
          const option = {
            title: {
              text: ''
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['累计确诊', '现有疑似', '累计治愈', '累计死亡'],
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: dateList,
              inverse: true
            },
            yAxis: {
              nameTextStyle: {
                fontSize: 18,
                fontWeight: 400
              },
              type: 'value'
            },
            zoom: 0.5,
            series: [
              {
                name: '累计确诊',
                type: 'line',
                color: 'red',
                data: allConfirmedList
              },
              {
                name: '现有疑似',
                type: 'line',
                color: 'yellow',
                data: susList
              },
              {
                name: '累计治愈',
                type: 'line',
                color: 'green',
                data: cureList
              },
              {
                name: '累计死亡',
                type: 'line',
                color: 'black',
                data: deathList
              }
            ]
          }
          
          myChart.setOption(option)
        }
      })
    }
  }
}
</script>
<style>
#chinaLineChart {
    width: 400px;
    height: 300px;
}
</style>
