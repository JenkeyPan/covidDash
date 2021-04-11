
<template>
 <el-row>
        <el-col :span="4">
            <div class="grid-content">
                <div class="info">
                    <a href="index.html">中国地图</a>
                    &nbsp;|&nbsp;
                    <a href="worldMap.html">世界地图</a>
                    <br>
                    <span>数据来源：新浪</span>
                </div>
            </div>
        </el-col>
        <el-col :span="16">
            <div class="grid-content">
                <div class="title">
                    国内疫情总览
                </div>
                 <div class="title-bottom">
                    <div class="bottom-sidebar"></div>
                </div>
            </div>
        </el-col>
        <el-col :span="4">
           <h4>{{date}}</h4>
        </el-col>
</el-row>
</template>
<script>
export default {
  name: 'Header',
  data: function () {
    return {
      date: ''
    }
  },
  mounted () {
    let _this = this
    this.date = setInterval(() => {
      _this.date = new Date().toLocaleString()
    }, 1000)
  },
  beforeDestory () {
    if (this.date) {
      clearInterval(this.date)
    }
  }
}
</script>
<style scoped>
.info {
    font-size: 16px;
    color: #fff;
    text-decoration: none;
    display: inline;
}
.title{
    font-size: 24px;
    color: #fff;
    text-align: center;
    margin: 5px;
}
.title-bottom {
        height: 30px;
        justify-content: center;
        display: flex;
}
.bottom-sidebar {
        width: 100%;
        height: 100%;
        opacity: 1;
        background-image: url("~@/assets/bottombar.gif");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center center;
        width: 400px;
}
h4{
    color:#fff;
}
</style>
