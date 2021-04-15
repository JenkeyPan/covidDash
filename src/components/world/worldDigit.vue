<template>
<el-row >
  <el-col :span="6">
    <div class="grid-content bg-purple">
        <Cube v-bind:info = "information.nowConfirm"></Cube>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="grid-content bg-purple">
        <Cube v-bind:info = "information.confirm"></Cube>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="grid-content bg-purple">
        <Cube v-bind:info = "information.heal"></Cube>
    </div>
  </el-col>
  <el-col :span="6">
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
    name: 'WorldDigit',
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
                url: 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_foreign',
                success: function(result) {
                    let all = JSON.parse(result.data)
                    console.log("世界疫情数据")
                    console.log(all)
                  
                    let dead = {
                        txt: '累计死亡',
                        addNum: all.globalStatis.deadAdd,
                        num : all.globalStatis.dead
                    }
                    let nowConfirm = {
                        txt : '现有确诊',
                        addNum: all.globalStatis.nowConfirmAdd,
                        num: all.globalStatis.nowConfirm
                    }
                    let confirm = {
                        txt: '累计确诊',
                        addNum: all.globalStatis.confirmAdd,
                        num: all.globalStatis.confirm
                    }
                    let heal = {
                        txt: '累计治愈',
                        addNum: all.globalStatis.healAdd,
                        num: all.globalStatis.heal
                    }
                    //将获取的信息存取到information中
                    that.$set(that.information,"dead", dead)
                    that.$set(that.information,"heal", heal)
                    that.$set(that.information,"nowConfirm", nowConfirm)
                    that.$set(that.information,"confirm", confirm)
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