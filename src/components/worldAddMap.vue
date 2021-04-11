<template>
  <div ref="worldAddMapBox" class = "worldAddChart"></div>
</template>

<script>
import * as echarts from 'echarts'
import 'echarts/lib/chart/map/world_fix.js'//引入echarts中的中国地图
import jsonp from 'jsonp'//引入jsonp

const options = {
    title: {
        text: '世界疫情地图'
    },
    series: [{
        name: '新增确诊人数',
        type: 'map', //告诉echarts 渲染地图
        map: 'world',
        label: {
            show: false, //显示各个省份名称
            fontSize: 8,
        },
        itemStyle: {
            areaColor: '#fff' //区域的背景颜色
        },
        emphasis: {
        //控制鼠标滑过时的高亮样式
            itemStyle: {
                areaColor: '#c7fffd'
            }
        },
        data:[],
        zoom: 1, //控制地图的大小
    }],
    visualMap: [{
        type: 'piecewise',
        show: true,
        splitNumber: 6,
        pieces: [
            {min: 10000000}, // 不指定 max，表示 max 为无限大（Infinity）。
            {min: 1000000,max: 99999999},
            {min: 10000, max: 999999},
            {min: 100,max: 9999},
            {min: 1,max: 99},
            {min: 0,max: 0}
        ],
        align:'left',// 默认是left
        inRange: {
            symbol: 'rect',
            color: ['#fff', '#ffaa85', '#ff7b69', '#cc2929', '#8c0d0d', '#660208']
        },
        itemHeight: 10,
        itemWidth: 20
    }],
    tooltip:{
        trigger:'item'
    }
};
export default {
  name: 'WorldAddMap',
  mounted() {
    this.myChart = echarts.init(this.$refs.worldAddMapBox)
    this.getData()
    
  },
  methods: {
    getData() {
      jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json',{},(err,data) => {
        if(!err) {
          //请求数据成功
          console.log("世界地图")
          console.log(data)
          let list = data.data.otherlist.map(item => ({
            name: item.name,
            value: item.conadd
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
.worldAddChart{
  width: 500px;
  height: 800px;
}
</style>