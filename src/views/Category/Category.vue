<template>
<div class="Category">
    <nav-bar class="navbar">
        <div class="left-img" slot="left" @click="back"><img src="~assets/img/nav-bar/fan.png" /></div>
        <div slot="center" class="center-text">我的音乐</div>
         <div class="right-img" slot="right" @click="show=!show" ><img src="~assets/img/nav-bar/caidan.png" /></div>
    </nav-bar>
    <div :class="{comfirm: !show,change: show}" ><comfirm ></comfirm></div>
    <div class="singlist">
        <div class="danqu">单曲/30</div>
        <div>歌单</div>
        <div>歌手</div>
        <div>MV</div>
        </div>
    <glist></glist>
    <div class='footer'>
     <p>我也是有底线的~</p>
    </div>
</div> 
</template>

<script>
import NavBar from 'components/navbar/NavBar'
import comfirm from 'components/tanchuang/comfirm'
import Glist from 'components/gedan/Glist'
export default {
    name:'Category',
components: {
    NavBar,
    comfirm,
    Glist
},
data() {
return {
    show:true
};
},methods:{
        back(){
             this.$router.replace('/home')
        },
       
        }
}
</script>
<style scoped>
.footer{
    height: 75px;
    width: 100%;
    background-color: rgb(247, 214, 209);
   
}
.footer p{
    margin:0px;
    padding: 0;
    font-size: 14px;
    color:rgba(112, 110, 110, 0.8);
    text-align: center;
}
.singlist{
    width: 100%;
    height: 25px;
    padding: 5px 0 5px 0;
    background-color: rgb(247, 214, 209);
    text-align: center;
    color: rgb(235, 50, 59);
    display: flex;
    justify-content:space-between;
}
.singlist div{
    margin:0 10px 0 10px;
}
.danqu{
    width: 80px;
    border-bottom: 2px solid #E54047;
}
.navbar{
    background-color: #D94143;
    }
.left-img img{
    width: 30px;
    height: 23px;
    vertical-align: middle;
    margin-left: 8px;
}
.center-text{
    color: whitesmoke;
}
.right-img img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 8px;
}
.change{
    display: none;
}
.comfirm{
    width: 100%;
}
</style>