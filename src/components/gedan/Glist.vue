<template>
<div class='glist'>
    <div class="listplay">
    <ul >
        <li @click="musicplay"><img @click="clickimg" src="~assets/img/gedan/jia.png">再一，再二，再三<p>易烊千玺</p></li>
        <li @click="musicplay"><img src="~assets/img/gedan/jia.png">舒适圈<p>易烊千玺</p></li>
        <li @click="musicplay"><img src="~assets/img/gedan/jia.png">灾<p>易烊千玺</p></li>
        <li @click="musicplay"><img src="~assets/img/gedan/jia.png">I Adore you<p>易烊千玺</p></li>
        <li @click="musicplay"><img src="~assets/img/gedan/jia.png">离骚<p>易烊千玺</p></li>
        <li @click="musicplay"><img src="~assets/img/gedan/jia.png">Nothing to lose<p>易烊千玺</p></li>
        <li @click="musicplay"><img src="~assets/img/gedan/jia.png">你说<p>易烊千玺</p></li>
        <li @click="musicplay"><img src="~assets/img/gedan/jia.png">Fall<p>易烊千玺</p></li>
        <li @click="musicplay"><img src="~assets/img/gedan/jia.png">念想<p>易烊千玺</p></li>
        <li @click="musicplay"><img src="~assets/img/gedan/jia.png">宝贝<p>易烊千玺</p></li>
        <li @click="musicplay"><img src="~assets/img/gedan/jia.png">精彩才刚刚开始<p>易烊千玺</p></li>
        <li @click="musicplay"><img src="~assets/img/gedan/jia.png">陷落美好<p>易烊千玺</p></li>
    </ul>
    </div>
  
</div>
</template>

<script>
export default {
    name:'glist',
    data(){
        return{
        }
    },
    methods:{
        musicplay(){
            this.$router.replace('/home/musicplay')
        },
        clickimg(){
            alert('已添加')
        }
    }
}
</script>
<style  scoped>
.glist{
    background-color: rgb(247, 214, 209);
}

.listplay ul{
    width: 100%;
    margin: 0;
    padding: 0;
}
.listplay li{
    padding: 6px 0 6px 0;
    width: 100%;
    height: 46px;
    list-style: none;
    color: rgb(184, 38, 46);
   
}
.listplay li img{
    width: 15px;
    height: 15px;
    vertical-align: middle;
    margin-right: 20px;
    margin-left: 5px;
}
.listplay li p{
    margin-top: 5px;
    padding-bottom: 5px;
    font-size: 12px;
    margin-left: 43px;
    border-bottom: 1px solid rgb(223, 140, 144);
}
</style>