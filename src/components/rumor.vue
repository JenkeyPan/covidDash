<template>
  <div>
    <NavMenu/>
     
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <li v-for="i in count" class="infinite-list-item"><RumorCube :rumorUnit = 'rumors[i]' /></li>
    </ul>
   
  </div>
</template>
<script>
import RumorCube from './rumors/rumorCube'
import NavMenu from './NavMenu'
export default {
  name:'Rumor',
  data(){
    return {
      rumors:[],
      count : 0
    }
  },
  mounted(){
    this.getRumorData()
  },
  components:{
    RumorCube,
    NavMenu
  },
  methods:{
    getRumorData(){
       this.$axios({
                method:'get',
                url:'https://file1.dxycdn.com/2020/0130/454/3393874921745912507-115.json?t=26996103',
            }).then((response) =>{          //这里使用了ES6的语法
                //console.log(response.data.data)
                let allRumor = response.data.data;
                for(let i = 0; i < allRumor.length; i++){
                  let tag = ['谣言', '可信','尚无定论']
                  let rumor = {
                    title: allRumor[i].title,
                    mainSummary: allRumor[i].mainSummary,
                    body: allRumor[i].body,
                    rumorType: allRumor[i].rumorType,
                    tag:tag[allRumor[i].rumorType]
                  }
                  this.rumors.push(rumor)
                }
              
            }).catch((error) =>{
                console.log(error,"疫情rumor读取失败")       //请求失败返回的数据
            })
    
    },
     load () {
       if(this.count < 190){
         this.count += 1
       }
      }
    
  }
}
</script>
<style>

</style>