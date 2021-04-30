<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item>
        <template slot="title">
          {{rumorUnit.title}} <span :class="tagClass">{{rumorUnit.tag}}</span>
        </template>
      <div class="summary">{{rumorUnit.mainSummary}}</div>
      <div>{{rumorUnit.body}}</div>
    </el-collapse-item>
</el-collapse>
</template>
<script>
export default {
  name:'RumorCube',
  props:['rumorUnit'],
  mounted(){
    this.getTagClass();
  },
  data() {
    return {
      activeName: '1',
      tagClass:''
    };
  },
  methods:{
      getTagClass(){
        this.tagClass = 'tag' + this.rumorUnit.rumorType;
      }
  }

}
</script>
<style>
.tag0{
  color: red;
}
.tag1{
  color: green;
}
.tag2{
  color: grey;
}
.summary{
  font-size: 16px;
}
</style>