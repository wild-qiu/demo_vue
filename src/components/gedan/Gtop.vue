<template>
<div class='gtop'>
    <div class="top">
        <img src="~assets/img/gedan/q5.jpg">
        <a href="https://baike.baidu.com/item/%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA/221450?fr=aladdin" v-html="time">{{time}}</a>
    </div>
    <div class="but">
        <a><img src="~assets/img/gedan/like.png"/>3.6万</a>
        <a><img src="~assets/img/gedan/conversation_icon.png">1.1万</a>
        <a><img src="~assets/img/gedan/bofang_huaban.png">播放</a>
        <a><img src="~assets/img/gedan/xiazai.png">下载</a>
    </div>
</div>
</template>

<script>

export default {
    name:'gtop',
    data(){
        return{
            time:"歌手&nbsp;&nbsp;易烊千玺 &nbsp;><br>发行时间&nbsp;&nbsp;2020-01-13"
        }
    }
}
</script>
<style  scoped>
.gtop{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    background-image: url('~assets/img/gedan/q4.jpg');
    background-size:100% ;
}

.top{
    width: 100%;
    height: 148px;
    flex-grow: 2;
    display: flex;
}
.top img{
    width: 116px;
    height: 113px;
    border: 2px solid white;
    margin: 28px 0 0 7%;
}
.top a{
    display: block;
    color: whitesmoke;
    font-size: 14px;
    text-decoration:none;
    margin: 61px 0 0 15px;
    line-height: 25px;
}

.but{
    width: 100%;
    height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.but a{
    width: 40px;
    height: 47px;
    color: rgb(211, 211, 211);
    font-size: 14px;
    text-align: center;
    margin:0;
    padding: 0;
}
.but img{
    width:100%;
    height: 30px;
}
</style>