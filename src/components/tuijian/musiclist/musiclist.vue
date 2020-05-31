<template>
<div class='musiclist'>
    <div class="list" >
        <div v-for="(item,index) in list " :key="index" :title="item.title">
            <a @click="musiclist"><img :src="item.img" />
            {{item.name}}
            </a>
        </div> 
    </div>
    
</div>
</template>

<script>

export default {
    name:'musiclist',
    data(){
        return{
            list:[
                {img:require('../../../assets/img/musiclist/list1.jpg'),name:'温差感',title:'易烊千玺——温差感'},
                {img:require('../../../assets/img/musiclist/list2.jpg'),name:'冷静和热情之间',title:'易烊千玺——冷静和热情之间'},
                {img:require('../../../assets/img/musiclist/list3.jpg'),name:'念想',title:'易烊千玺——念想'},
                {img:require('../../../assets/img/musiclist/list4.jpg'),name:'I Adore You',title:'易烊千玺——I Adore You'},
                {img:require('../../../assets/img/musiclist/list5.jpg'),name:'Fall',title:'易烊千玺——Fall'},
                {img:require('../../../assets/img/musiclist/list6.jpg'),name:'陷落美好',title:'易烊千玺——陷落美好'},
                {img:require('../../../assets/img/musiclist/list7.jpg'),name:'Nothing to lose',title:'易烊千玺——Nothing to lose'},
                {img:require('../../../assets/img/musiclist/list8.jpg'),name:'精彩才刚刚开始',title:'易烊千玺——精彩才刚刚开始'},
                {img:require('../../../assets/img/musiclist/list9.jpg'),name:'灾',title:'易烊千玺——灾'},
                {img:require('../../../assets/img/musiclist/list10.jpg'),name:'丹青千里',title:'易烊千玺——丹青千里'},
                {img:require('../../../assets/img/musiclist/list11.jpg'),name:'离骚',title:'易烊千玺——离骚'},
                {img:require('../../../assets/img/musiclist/list12.jpg'),name:'千玺翻唱锦集',title:'千玺翻唱锦集'},
            ]
        }
    },
    methods:{
        musiclist(){
            this.$router.replace('/home/gedan')
        }
    }
}
</script>
<style  scoped>
.list {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    font-size: 12px;
}
.list div{
    width: 90px;
    height: 100px;
    margin: 7px;
}
.list img{
    height: 90%;
    width:100%;
    vertical-align: middle;
}
</style>