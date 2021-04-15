<template>
<el-row >
  <el-col :span="8">
    <div class="grid-content bg-purple">
        <Cube v-bind:info = "information.localConfirm"></Cube>
    </div>
  </el-col>
  <el-col :span="8">
    <div class="grid-content bg-purple">
        <Cube v-bind:info = "information.nowConfirm"></Cube>
    </div>
  </el-col>
  <el-col :span="8">
    <div class="grid-content bg-purple">
        <Cube v-bind:info = "information.confirm"></Cube>
    </div>
  </el-col>
  <el-col :span="8">
    <div class="grid-content bg-purple">
        <Cube v-bind:info = "information.noInfect"></Cube>
    </div>
  </el-col>
  <el-col :span="8">
    <div class="grid-content bg-purple">
        <Cube v-bind:info = "information.importedCase"></Cube>
    </div>
  </el-col>
  <el-col :span="8">
    <div class="grid-content bg-purple">
        <Cube v-bind:info = "information.dead"></Cube>
    </div>
  </el-col>
</el-row>
</template>
<script>
import Cube from './Cube'
import $ from 'jquery'
import jsonp from 'jsonp'

export default {
    name: 'Digit',
    components: { //方块中的数据
        Cube 
    },
    mounted() {
        this.getDigit()

    },
    data: function() {
        return {
            information:{}
        }
    },
    watch: {

    },
    methods: {
         getDigit() {    
            var that = this
            $.ajax({
                type: 'GET',
                dataType: "jsonp",
                url: 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5',
                success: function(result) {
                    let all = JSON.parse(result.data)
                    console.log(all)
                    let localConfirm = {
                        txt : '本土现有确诊',
                        addNum : all.chinaAdd.localConfirm,
                        num : all.chinaTotal.localConfirm
                    }
                    let dead = {
                        txt: '累计死亡',
                        addNum: all.chinaAdd.dead,
                        num : all.chinaTotal.dead
                    }
                    let noInfect = {
                        txt : '无症状感染者',
                        addNum: all.chinaAdd.noInfect,
                        num: all.chinaTotal.noInfect
                    }
                    let nowConfirm = {
                        txt : '现有确诊',
                        addNum: all.chinaAdd.nowConfirm,
                        num: all.chinaTotal.nowConfirm
                    }
                    let confirm = {
                        txt: '累计确诊',
                        addNum: all.chinaAdd.confirm,
                        num: all.chinaTotal.confirm
                    }
                    let importedCase = {
                        txt: '输入病例',
                        addNum: all.chinaAdd.importedCase,
                        num: all.chinaTotal.importedCase
                    }
                    //将获取的信息存取到information中
                    that.$set(that.information,"localConfirm",localConfirm)
                    that.$set(that.information,"dead", dead)
                    that.$set(that.information,"noInfect", noInfect)
                    that.$set(that.information,"nowConfirm", nowConfirm)
                    that.$set(that.information,"confirm", confirm)
                    that.$set(that.information,"importedCase", importedCase)
                },
                error: function(){
                    console.log("读取数据失败，digit.js")
                }
            })  
         }
    }
}
     
</script>
<style>

</style>