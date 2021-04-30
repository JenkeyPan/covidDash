<template>
  <el-row >
  <el-col :span="8">
    <div class="grid-content bg-purple">
        <VaccineCube v-bind:info = "information.worldTotalvaccinations"></VaccineCube>
    </div>
  </el-col>
  <el-col :span="8">
    <div class="grid-content bg-purple">
        <VaccineCube v-bind:info = "information.worldNewVaccinations"></VaccineCube>
    </div>
  </el-col>
  <el-col :span="8">
    <div class="grid-content bg-purple">
        <VaccineCube v-bind:info = "information.worldTotalVaccinationsPerHundred"></VaccineCube>
    </div>
  </el-col>
  <el-col :span="8">
    <div class="grid-content bg-purple">
        <VaccineCube v-bind:info = "information.chinaTotalvaccinations"></VaccineCube>
    </div>
  </el-col>
  <el-col :span="8">
    <div class="grid-content bg-purple">
        <VaccineCube v-bind:info = "information.chinaNewVaccinations"></VaccineCube>
    </div>
  </el-col>
  <el-col :span="8">
    <div class="grid-content bg-purple">
        <VaccineCube v-bind:info = "information.chinaTotalVaccinationsPerHundred"></VaccineCube>
    </div>
  </el-col>
</el-row>
</template>
<script>
import worldAddLineChartVue from '../world/worldAddLineChart.vue'
import VaccineCube from './VaccineCube'
import $ from 'jquery'
export default {
   name: 'VaccineDigit',
    components: { //方块中的数据
        VaccineCube 
    },
    mounted() {
        this.getVaccineDigit()
    },
    data: function() {
        return {
            information:{}
        }
    },
    methods: {
         getVaccineDigit() {    
            var that = this
            this.$axios({
                method:'get',
                url:'https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=VaccineTopData',
            }).then((response) =>{
              let chinaNewVaccinations = {
                txt: '中国昨日新接种',
                addNum: (response.data.data.VaccineTopData['中国'].new_vaccinations / 10000).toFixed(2) ,
                unit: '万剂'
              }
              let chinaTotalvaccinations = {
                txt: '中国累计接种',
                addNum: (response.data.data.VaccineTopData['中国'].total_vaccinations / 100000000 ).toFixed(2),
                unit:'亿剂'
              }
              let chinaTotalVaccinationsPerHundred = {
                txt: '中国每百人接种',
                addNum: response.data.data.VaccineTopData['中国'].total_vaccinations_per_hundred,
                unit: '剂'
              }
              let worldNewVaccinations = {
                txt: '全球昨日新接种',
                addNum: (response.data.data.VaccineTopData['全球'].new_vaccinations / 10000 ).toFixed(2),
                unit: '万剂'
              }
              let worldTotalvaccinations = {
                txt: '全球累计接种',
                addNum: (response.data.data.VaccineTopData['全球'].total_vaccinations / 100000000 ).toFixed(2),
                unit:'亿剂'
              }
              let worldTotalVaccinationsPerHundred = {
                txt: '全球每百人接种',
                addNum: response.data.data.VaccineTopData['全球'].total_vaccinations_per_hundred,
                unit: '剂'
              }
            
                that.$set(that.information,"chinaNewVaccinations",chinaNewVaccinations)  
                that.$set(that.information,"chinaTotalvaccinations",chinaTotalvaccinations)  
                that.$set(that.information,"chinaTotalVaccinationsPerHundred",chinaTotalVaccinationsPerHundred)  
                that.$set(that.information,"worldNewVaccinations",worldNewVaccinations)  
                that.$set(that.information,"worldTotalvaccinations",worldTotalvaccinations)  
                that.$set(that.information,"worldTotalVaccinationsPerHundred",worldTotalVaccinationsPerHundred)   
                 
                       
            }).catch((error) =>{
                console.log(error)       
            })
    }
            
         
    }
}
</script>
<style>

</style>