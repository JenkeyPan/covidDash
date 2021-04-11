<template>
  <div class="all">
    <div class = "add">
      <span>较昨日</span>
      <span>{{info.addNum}}</span>
    </div >
    <div class = "number">
      <span></span>
      {{info.num}}
    </div>
    <div class = "text">
      {{info.txt}}
    </div> 
  </div>
</template>
<script>
export default {
  name: "Cube",
  props:['info']
}
</script>
<style>

.all{
  color: aliceblue;
}
</style>