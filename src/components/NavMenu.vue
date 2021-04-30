<template>
  <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color='transparent'
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1" disabled>首页</el-menu-item>

  <el-menu-item index="2"><router-link to="/">中国地图</router-link></el-menu-item>
  <el-menu-item index="3"><router-link to="/world">世界地图</router-link></el-menu-item>
  <el-menu-item index="4"><router-link to="/news">新闻</router-link></el-menu-item>
  <el-menu-item index="5"><router-link to="/rumors">辟谣</router-link></el-menu-item>
  <el-menu-item index="6"><router-link to="/vaccine">疫苗</router-link></el-menu-item>
</el-menu>
</template>
<script>
export default {
  name: 'NavMenu'
}
</script>
<style>
.router-link{
  text-decoration: none;
}
</style>