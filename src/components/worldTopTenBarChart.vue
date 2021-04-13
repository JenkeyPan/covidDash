<template>
  <el-row>
        <el-col>
            <div class="grid-content bg-purple">
                <div id="worldTopTenBarChart"></div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import * as echarts from 'echarts'
import jsonp from 'jsonp'
export default {
  name: 'WorldTopTenBarChart',
  mounted () {
    this.getWorldTopTenData()
  },
  methods:{
    getWorldTopTenData() {
      jsonp('https://view.inews.qq.com/g2/getOnsInfo?name=disease_foreign', {}, (err, result) => {
        if (!err) {
          let data = JSON.parse(result.data)
          console.log('世界确诊TOP10')
          let country = []//横坐标--国家
          let addConfirmList = []//纵坐标--确诊人数
          for(let i = 0; i < data.countryAddConfirmRankList.length; i++) {
             addConfirmList.push(data.countryAddConfirmRankList[i].addConfirm)
             country.push(data.countryAddConfirmRankList[i].nation)
          }
          let myChart = echarts.init(document.getElementById('worldTopTenBarChart'),'dark')
            const option = {
              title: {
                text: '24小时新增确诊国家TOP10'
              },
              xAxis: {
                  type: 'category',
                  data: country
              },
              yAxis: {
                  type: 'value'
              },
              series: [{
                  data: addConfirmList,
                  type: 'bar'
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
#worldTopTenBarChart{
   width: 400px;
    height: 300px;
}
</style>