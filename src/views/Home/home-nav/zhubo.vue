<template>
<div class='zhubo'>
    <bswiper></bswiper>
    <div class="menu"><img src="~assets/img/zhubo/f.jpg" ></div>
    <div class="menu"><img src="~assets/img/zhubo/h.jpg" ></div>
    <div class='footer'>
     <p>我也是有底线的~</p>
    </div>
</div>
</template>

<script>
import Bswiper from 'components/swiper/Bswiper'
export default {
    name:"zhubo",
components: {Bswiper},
data() {
return {

};
}
}
</script>
<style scoped>
.zhubo{
    background-color:#F7D6D1;
}
.menu{
    width: 100%;
    height: 100%;
}
.menu img{
    width: 100%;
    height: 100%;
}
.footer{
    height: 90px;
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
</style>