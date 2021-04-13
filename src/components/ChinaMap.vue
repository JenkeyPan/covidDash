<template>
<el-row>
    <el-col>
        <div class="grid-content">
            <div class="map">
              <!-- <div class="map1"></div>
              <div class="map2"></div>
              <div class="map3"></div> -->
              
            </div>
            <div ref="mapbox" class="chart">
     </div>
        </div>
    </el-col>
</el-row>
     
</template>
<script>
import * as echarts from 'echarts'
import 'echarts/lib/chart/map/china.js'//引入echarts中的中国地图
import jsonp from 'jsonp'//引入jsonp

const options = {
  series: [{
    type: 'map',//地图
    // name: '确诊人数',//用于tooltip的显示{a}
    map: 'china',//中国地图
    label: {
      show: true,//显示对应地区名字
      color: '#660208',//地区名字颜色
      fontSize: 10//地区名字大小
    },
    left: -60,
    itemStyle: {
      //areaColor: '#10aeb5',//对应地区颜色
      borderColor: 'rgba(50, 50, 50, 0.7)'//地区边框颜色
    },
    zoom:0.8,
    emphasis: {
      label: {
        color: '#660208',//高亮状态下字体颜色
        fontSize: 12//高亮状态下字体大小
      },
      itemStyle: {
        areaColor: '#c7fffd'//高亮状态下对应地区的颜色
      }
    },
    data: []//显示后台数据
  }],
  visualMap: [{
    type: 'piecewise',//分段型视觉映射组件
    pieces: [//定义每一段的范围
      {min:10000},
      {min:1000,max:9999},
      {min:100,max:999},
      {min:10,max:99},
      {min:1,max:9}
    ],
    inRange: {//定义每一段的颜色，从下到上
      color: ['#ffaa85','#ff7b69','#cc2929','#8c0d0d','#660208']
    }
  }],
  tooltip: {//高亮数据显示
    trigger: 'item',
    formatter: '地区：{b}<br />确诊：{c}'//高亮数据显示格式
  }
}
export default {
  name: 'ChinaMap',
  mounted() {
    this.getData()
    this.myChart = echarts.init(this.$refs.mapbox)
  },
  methods: {
    getData() {
      jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',{},(err,data) => {
        if(!err) {
          //请求数据成功
          let list = data.data.list.map(item => ({
            name: item.name,
            value: item.value
          }))
          options.series[0].data = list
          this.myChart.setOption(options);
        }
      })
    }
  }
}
</script>
<style>
.map {
  position: relative; 
  width: 800px;
  height: 400px;
}
.chart {
  width: 800px;
  height: 600px;
}
.map  {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  height: 10.125rem;
  width: 100%;
}
.map .map1,
.map .map2,
.map .map3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 26.475rem;
  height: 26.475rem;
  background: url(../assets/map.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0.1;
}
.map .map2 {
  width: 28.0375rem;
  height: 28.0375rem;
  background-image: url(../assets/lbx.png);
  opacity: 0.3;
  animation: rotate 15s linear infinite;
  z-index: 2;
}
.map .map3 {
  width: 29.075rem;
  height: 29.075rem;
  background-image: url(../assets/jt.png);
  animation: rotate1 10s linear infinite;
}
@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
@media screen and (max-width: 1024px) {
  html {
    font-size: 42px !important;
  }
}
@media screen and (min-width: 1920) {
  html {
    font-size: 80px !important;
  }
}
</style>
