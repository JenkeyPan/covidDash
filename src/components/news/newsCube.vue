<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item>
        <template slot="title">
          {{newsUnit.title}}
        </template>
      <div @click="getid">{{newsUnit.article}}</div>
    </el-collapse-item>
</el-collapse>
</template>
<script>
export default {
  name:'NewsCube',
  props:['newsUnit'],
  data() {
    return {
      activeName: '1'
    };
  },
  methods:{
      getid(){
        let url = 'https://view.inews.qq.com/k/' + this.newsUnit.article_id +'?cratype=vaccineh5'
        window.location.href = url
      }
  }

}
</script>
<style>

</style>