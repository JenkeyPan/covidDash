<template>
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark">
    <el-timeline id = "chinaNews" >
      <el-timeline-item v-for="{title,time,summary} in data"  :key="time">
        <el-card style="width: 350px; height: 100px">
          <h4>{{title}}</h4>
          <!-- <p class = "text">{{summary}}</p> -->
        </el-card>
      </el-timeline-item>
  </el-timeline>
    </div></el-col>
</el-row>
  
</template>
<script>
export default {
  name: 'ChinaNews',
  mounted () {
    this.getChinaNews()
  },
  data: function() {
    return {
      data: []
    }
  },
  methods:{
    getChinaNews() {
      var that = this
       $.ajax({
                type: 'GET',
                dataType: "json",
                url: 'https://lab.isaaclin.cn/nCoV/api/news',
                success: function(result) {
                  let news = []
                  for(let i = 0; i < 5; i++){// result.results.length
                    let temp = {
                      "source": result.results[i].infoSource,
                      "time": that.timestampToTime(result.results[i].pubDate),
                      "summary": result.results[i].summary,
                      "title": result.results[i].title
                    }
                    news.push(temp)
                  }
                  that.data = news
                  console.log(result)
                },
                error: function() {
                  console.warn("读取新闻失败")
                }
       })
    },
    timestampToTime (timestamp) {
            var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var D = date.getDate() + ' ';
            var h = date.getHours() + ':';
            var m = date.getMinutes() + ':';
            var s = date.getSeconds();
            return Y + M + D + h + m ;
        }

  }
  
}
</script>
<style>
#localAddLineChart{
   width: 400px;
    height: 300px;
}
.text{
    overflow: hidden; 
  text-overflow: ellipsis; 
  display: -webkit-box; 
  -webkit-box-orient: vertical; 
  -webkit-line-clamp: 2;
}
</style>