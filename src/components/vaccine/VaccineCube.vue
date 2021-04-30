<template>
  <div class="all"> 
    <div class = "text">
      {{info.txt}}
    </div> 
    <div class = "number">
      {{info.addNum}}{{info.unit}}
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

.add{
  color: rgba(240, 248, 255, 0.356);
}
.number{
  color:aliceblue;
  font-size:xx-large ;
}
.text{
  color: aliceblue;
}
</style>