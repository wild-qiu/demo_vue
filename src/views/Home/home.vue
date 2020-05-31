<template>
<div id="Home">
     
   <nav-bar>
       <div class="left-img" slot="left"><img src="~assets/img/nav-bar/yuying.png" /></div>
       <div class="search" slot="center">
	      <search></search>
        </div>
   </nav-bar>

   <minnav>
       <navitem path='/home/tuijian'>
           <div slot="text">个性推荐</div>
       </navitem>
       <navitem path='/home/gedan'>
           <div slot="text">歌单</div>
       </navitem>
       <navitem path='/home/zhubo'>
           <div slot="text">主播电台</div>
       </navitem>
       <navitem path='/home/paihang'>
           <div slot="text">排行榜</div>
       </navitem>
   </minnav>
   <router-view></router-view>
    </div>
</template>

<script>

import {getHomeMultidata} from "network/home"
import NavBar from "components/navbar/NavBar"
import Search from "components/search/search"
import Minnav from 'components/minnav/minnav'
import Navitem from 'components/minnav/navitem'
export default {
    name:'home',
    components:{
       NavBar,
       Search,
       Minnav,
       Navitem
    },
    data(){
        return {
            banner:[],
        }
    },
    created(){
        //请求多个数据
        getHomeMultidata().then(res=>{
            console.log(res);
            // this.imgsrc = res.data[0].imgsrc
        })
    },
    methods:{
    }
}
</script>
<style scoped>
.home-nav{
    box-shadow: 0 1px rgba(100, 100, 100, .1);
    background-color: #ff5777;
    color: white;
}
img{
    width: 100%;
    height: 100%;
}
.item-box{
    background-color: rosybrown;
    height: 100%;
}
.left-img img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-left: 8px;
}

</style>
