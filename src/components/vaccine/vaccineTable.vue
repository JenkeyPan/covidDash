<template>
   <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="country"
        label="国家"
        width="240">
      </el-table-column>
      <el-table-column
        prop="content"
        label="使用疫苗情况"
         :formatter="wrapText">
      </el-table-column>
    </el-table>
</template>
<script>
import data from '@/assets/vaccineCountry.json'
export default {
  name: 'VaccineTable',
  mounted(){
    this.getVaccineTableData()
  },
  data(){
    return{
      tableData:[

      ]
    }
  },
  methods:{
    getVaccineTableData(){
        for(let i = 0; i < data.data.length; i++){
           let tableUnit = {
             country: data.data[i].country,
             src: data.data[i].flag,
             content: data.data[i].content
          }
          this.tableData.push(tableUnit)
        }
       
      },
      wrapText: function(row, column, cellValue){
        return cellValue.replace(",","\n");
      },
    }

  
}
</script>
<style>
.el-table .cell{
  white-space: pre-line;
}
</style>