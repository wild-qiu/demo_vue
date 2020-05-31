<template>
<div class='tmenu'>
    <div class="one" @click="oneClick">
        <img src="~assets/img/tmenu/FM_weixuanze.png" />
        <p>私人FM</p>
    </div>
    <div class="two" @click="twoClick">
        <img src="~assets/img/tmenu/calendar.png"/>
        <p>每日歌曲推荐</p>
    </div>
    <div class="three" @click="threeClick">
        <img src="~assets/img/tmenu/paixing.png"/>
        <p>音乐热歌榜</p>
    </div>
</div>

</template>
<script>

export default {
    name:'tmenu',
    methods:{
        oneClick(){
            //跳转
            this.$router.replace('/home/zhubo') 
        },
        twoClick(){
            //跳转
            this.$router.replace('/home/gedan') 
        },
        threeClick(){
            //跳转
            this.$router.replace('/home/paihang') 
        },
    }
}
</script>
<style scoped>
.tmenu{
    display: flex;
    flex-direction: row;
    justify-content : space-between;
    margin-top: 4%;
}
.tmenu div{
    border-bottom: 1px solid #ccc;
    height: 100px;
    width: 120px;
    text-align: center;
}
.tmenu p{
    margin: 5px;
    padding: 0;
    text-align: center;
    font-size: 14px;
}
.tmenu img{
    width: 60%;
    height: 60%;
    border: 1px solid red;
    vertical-align: middle;
    border-radius: 50%;
}
</style>