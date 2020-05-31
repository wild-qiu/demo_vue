<template>
<div class="porfile">
        <nav-bar class="navbar">
            <div class="left-img" slot="left" @click="back"><img src="~assets/img/nav-bar/fan.png" /></div>
            <div slot="center" class="center-text">账号</div>
            <div class="right-img" slot="right"><img src="~assets/img/nav-bar/shezhi.png" /></div>
        </nav-bar>
        <div class="denglu">
            <div class="tou"><img src="~assets/img/profile/l.jpg"></div>
            <div><p>点击登录</p></div>
            <div class="fan"><img src="~assets/img/profile/fanhui.png"></div>
        </div>
        <div class="caidan"><img class="left" src="~assets/img/profile/zuozhe.png"><p>创作者平台</p><img  class="right" src="~assets/img/profile/fanhui.png"></div>
        <div class="caidan" style="margin-top:10px"><img class="left" src="~assets/img/profile/xiaoxi.png"><p>消息中心</p><img  class="right" src="~assets/img/profile/fanhui.png"></div>
        <div class="caidan"  ><img class="left" src="~assets/img/profile/huiyuan.png"><p>会员中心</p><img  class="right" src="~assets/img/profile/fanhui.png"></div>
        <div class="caidan" ><img class="left" src="~assets/img/profile/liuliang.png"><p>流量包月</p><img  class="right" src="~assets/img/profile/fanhui.png"></div>
        <div class="caidan"  style="border-bottom:none"><img class="left" src="~assets/img/profile/lingsheng.png"><p>铃声彩铃</p><img  class="right" src="~assets/img/profile/fanhui.png"></div>
        <div class="caidan" style="margin-top:10px" ><img class="left" src="~assets/img/profile/guanyuwomen.png"><p>关于我们</p><img  class="right" src="~assets/img/profile/fanhui.png"></div>
        <div class="caidan" style="border-bottom:none" ><img class="left" src="~assets/img/profile/fankui.png"><p>用户反馈</p><img  class="right" src="~assets/img/profile/fanhui.png"></div>

</div>
</template>

<script>
import NavBar from "components/navbar/NavBar"
export default {
    name:'porfile',
components: {
    NavBar
},
data() {
return {

};
},
methods:{
         back(){
             this.$router.replace('/home')
        },
}

}
</script>
<style scoped>
.porfile{
    height: 100vh;
    width: 100%;
    background-color:#F7D6D1;
}
.navbar{
    background-color: rgb(219, 70, 72);
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
.denglu{
    display: flex;
    justify-content : center;
    margin: 10px 0;
    background-color:rgb(233, 170, 161);
    text-align: center;
    color: rgb(219, 72, 74);
}
.denglu div{
    padding: 20px;
}

.tou img{
    width: 60px;
    height:60px;
    border-radius: 50%;
    border:3px solid whitesmoke;
    vertical-align: middle;
}
.fan img{
    width: 30px;
    height: 30px;
    padding: 10px;
    vertical-align: middle;
}
.caidan{
    height:45px;
    background-color:rgb(233, 170, 161);
    border-bottom: 1px solid rgb(216, 143, 144);
}
.caidan p{
    display: inline-block;
    color: rgb(192, 49, 51);
    margin-left: 6px;
    margin-top: 10px;
}
.left{
    width: 25px;
    height: 25px;
    padding: 8px;
    float: left;
    margin-left: 5px;
    vertical-align: middle;
}
.right{
    width: 25px;
    height: 25px;
    padding: 10px;
    float: right;
    vertical-align: middle;
}
</style>