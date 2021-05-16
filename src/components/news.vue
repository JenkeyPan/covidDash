<template>
  <div>
    <NavMenu/>
     <el-tabs tab-position="left" style="height: 800px;">
    <el-tab-pane label="焦点关注"> 
      <div v-for="o in 10">
        <NewsCube :newsUnit = 'jiaodian[o]' />
      </div>
    </el-tab-pane>
    <el-tab-pane label="我国疫苗现状">
      <div v-for="o in 10">
        <NewsCube :newsUnit = 'currentVaccine[o]' />
      </div>
    </el-tab-pane>
    <el-tab-pane label="全球各地进展">
       <div v-for="o in 10">
        <NewsCube :newsUnit = 'worldProgress[o]' />
      </div>
    </el-tab-pane>
  </el-tabs>
   
  </div>
</template>
<script>
import NavMenu from './NavMenu'
import NewsCube from './news/newsCube'
export default {
  name: 'News',
  mounted(){
    this.getNewsData()
    console.log(this.jiaodian)
  },
  components:{
    NavMenu,
    NewsCube
  },
  data: function(){
    return {
      jiaodian:[],
      currentVaccine:[],
      worldProgress:[]
    }
  },
  methods:{
    getNewsData(){
       this.$axios({
                method:'get',
                url:'https://view.inews.qq.com/share/topic_news?id=TWF202011100035496L',
            }).then((response) =>{          //这里使用了ES6的语法
                let allNews = response.data.cells
                console.log(response)      
                for(let i = 0; i < allNews.length; i++){
                  if(allNews[i].topic_info.tag == "焦点关注"){
                    for(let j = 0; j < allNews[i].topic_info.article_list.length; j++){
                      let news1 = {
                        title:  allNews[i].topic_info.article_list[j].title,
                        article:  allNews[i].topic_info.article_list[j].breif_info,
                        article_id : allNews[i].topic_info.article_list[j].article_id
                      }
                      console.info()
                      this.jiaodian.push(news1)
                    }
                  }
                  if(allNews[i].topic_info.tag == "全球各地进展"){
                    for(let j = 0; j < allNews[i].topic_info.article_list.length; j++){
                      let news2 = {
                        title:  allNews[i].topic_info.article_list[j].title,
                        article:  allNews[i].topic_info.article_list[j].breif_info,
                        article_id : allNews[i].topic_info.article_list[j].article_id
                      }
                      this.worldProgress.push(news2)
                    }
                  }
                  if(allNews[i].topic_info.tag == "我国疫苗现状"){
                    for(let j = 0; j < allNews[i].topic_info.article_list.length; j++){
                      let news3 = {
                        title:  allNews[i].topic_info.article_list[j].title,
                        article:  allNews[i].topic_info.article_list[j].breif_info,
                        article_id : allNews[i].topic_info.article_list[j].article_id
                      }
                      this.currentVaccine.push(news3)
                    }
                  }

                }
            }).catch((error) =>{
                console.log(error,"疫情news读取失败")       //请求失败返回的数据
            })
    }
  }
}
</script>
<style>
.el-tabs__item{
  color: white;
}
</style>