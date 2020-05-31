<template>
<div class='paihang'>
    <div class="banner"><img src="~assets/img/paihang/s.jpg"></div>
    <div class="singlist">
        <div class="danqu">音乐榜</div>
        <div style="color:black">热搜榜</div>
    </div>
    <div>
        <div class="text-img" style="font-weight: bold;color: rgb(235, 50, 59);"><p>1、</p><img @click="go" src="~assets/img/dongtai/music1.png" ><p>6869184</p></div>
        <div class="text-img" style="font-weight: bold;color: rgb(235, 50, 59);"><p>2、</p><img @click="go" src="~assets/img/dongtai/music2.png" ><p>4557379</p></div>
        <div class="text-img" style="font-weight: bold;color: rgb(235, 50, 59);"><p>3、</p><img @click="go" src="~assets/img/dongtai/3.png" ><p>3857379</p></div>
        <div class="text-img" ><p>4、</p><img @click="go" src="~assets/img/dongtai/4.png" ><p>2557379</p></div>
        <div class="text-img" ><p>5、</p><img @click="go" src="~assets/img/dongtai/5.png" ><p>2357379</p></div>
        <div class="text-img" ><p>6、</p><img @click="go" src="~assets/img/dongtai/6.png" ><p>1957379</p></div>
        <div class="text-img" ><p>7、</p><img @click="go" src="~assets/img/dongtai/7.png" ><p>1557379</p></div>
        <div class="text-img" ><p>8、</p><img @click="go" src="~assets/img/dongtai/8.png" ><p>1357379</p></div>
        <div class="text-img" ><p>9、</p><img @click="go" src="~assets/img/dongtai/9.png" ><p>1257379</p></div>
    </div>
        <div class='footer'>
     <p>我也是有底线的~</p>
    </div>
</div>
</template>

<script>

export default {
    name:"paihang",
components: {},
data() {
return {

};
},methods:{
    go(){
            this.$router.replace('/home/gedan')
        },
}
}
</script>
<style scoped>
.banner{
    width: 100%;
    height: 100%;
}
.banner img{
    width: 100%;
    height: 100%;
}
.footer{
    height: 75px;
    width: 100%;
    background-color: white;
   
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
    text-align: center;
    color: rgb(235, 50, 59);
    display: flex;
    justify-content:center;
    background-color: white;
}
.singlist div{
    margin:0 40px ;
}
.danqu{
    width: 80px;
    border-bottom: 2px solid #E54047;
}
.text-img{
    display:flex;
    width: 97%;
    margin: 10px auto;
    
}
.text-img img {
    width: 60%;
    height: 30%;
    
}
</style>