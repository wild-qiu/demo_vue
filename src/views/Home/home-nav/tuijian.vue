<template>
<div class='tuijian'>
    <swiper></swiper>
    <tmenu></tmenu>
    <div class="tui">推荐歌单</div>
    <musiclist></musiclist>
   <div class='footer'>
     <p>我也是有底线的~</p>
    </div>
</div>
</template>

<script>
import Swiper from 'components/swiper/Swiper'
import Tmenu from 'components/tuijian/T-menu/tmenu'
import Musiclist from 'components/tuijian/musiclist/musiclist'
export default {
    name:"tuijian",
components: {
    Swiper,
    Tmenu,
    Musiclist
},
data() {
return {

};
}
}
</script>
<style scoped>
.tui{
    border-left: 3px solid red;
    margin: 5px;
    padding: 0 0 0 6px;
}
.footer{
    height: 70px;
    width: 100%;
    background-color: white;
}
.footer p{
    margin:5px;
    padding: 0;
    font-size: 14px;
    color:rgba(112, 110, 110, 0.8);
    text-align: center;
}
</style>