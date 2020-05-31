<template>
  <div id="app">
     <router-view></router-view>
    <tab-bar>
    <tab-bar-item path='/home'>
        <img slot="item-icon" src="~assets/img/tabbar/faxianchaxun.png" >
        <img slot="item-icon-active" src="~assets/img/tabbar/shou.png" >
        <div slot="item-text">发现音乐</div>
      </tab-bar-item>
      <tab-bar-item path='/Category'>
        <img slot="item-icon" src="~assets/img/tabbar/music.png" >
        <img slot="item-icon-active" src="~assets/img/tabbar/yinle.png" >
        <div slot="item-text">我的音乐</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img slot="item-icon" src="~assets/img/tabbar/friend.png" >
         <img slot="item-icon-active" src="~assets/img/tabbar/pengyou.png" >
        <div slot="item-text">动态</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img slot="item-icon" src="~assets/img/tabbar/wode2.png" >
        <img slot="item-icon-active" src="~assets/img/tabbar/wode.png" >
        <div slot="item-text">账号</div>
      </tab-bar-item>
</tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/tabbar/TabBar'
import TabBarItem from 'components/tabbar/TabBarItem'
export default {
    name:"app",
    components:{
    TabBar,
    TabBarItem
  }
}
</script>
<style>
@import "./assets/css/Tabbar-base.css";
</style>
