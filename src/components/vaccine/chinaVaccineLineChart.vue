<template>
  <el-row>
        <el-col>
            <div class="grid-content">
                <div id="chinaVaccineLineChart"></div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'ChinaVaccineLineChart',
  mounted(){
    this.getChinaVaccineData()

  },
  methods:{
    getChinaVaccineData(){
      this.$axios({
                method:'get',
                url:'https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=VaccineTrendData',
            }).then((response) =>{          //这里使用了ES6的语法
            let chinaArray = response.data.data.VaccineTrendData.totalTrend['中国'];
            let date = [];
            let data = [];
            for(let i = 0; i < chinaArray.length; i++){
              date.push(chinaArray[i].date);
              data.push(chinaArray[i].total_vaccinations);
            }

            for(let i = 0 ; i < data.length; i++){
              if(data[i] == -1){
                data[i] = data[i - 1];
              }
            }
            const option = {
                xAxis: {
                    type: 'category',
                    data: date
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: data,
                    type: 'line'
                }]
            };
             let myChart = echarts.init(document.getElementById('chinaVaccineLineChart'), 'dark');
             myChart.setOption(option);
            // console.log(response.data.data)       //请求成功返回的数据
            }).catch((error) =>{
                console.log(error,"疫情digit读取失败")       //请求失败返回的数据
            })
    }

  }
}
</script>
<style>
#chinaVaccineLineChart{
    width: 400px;
    height: 300px;
}
</style>