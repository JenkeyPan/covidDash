<template>
   <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
</template>
<script>
export default {
  name: 'VaccineTable',
  mounted(){
    this.getVaccineTableData()
  },
  methods:{
    getVaccineTableData(){
      this.$axios({
                method:'get',
                url:'http://v.qq.com/cache/wuji_public/object?appid=yimiao&schemaid=vaccine_progress_foreign&schemakey=1091e06cbb704b40963accd816770461&size=500&sort=rank&order=asc',
            }).then((response) =>{          //这里使用了ES6的语法
                console.log(response)       //请求成功返回的数据
            }).catch((error) =>{
                console.log(error,"疫情digit读取失败")       //请求失败返回的数据
            })
      }
    }
  
}
</script>
<style>

</style>