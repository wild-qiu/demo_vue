<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :class="{active:isActive}"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
    name:"TabBarItem",
    props:{
        path:String
    },
    data(){
        return{
            //isActive:true
        }
    },
    computed:{
        isActive(){
            //判断哪个路由（页面）处于活跃状态，并判断path
            //indexOf!== -1为true
            return this.$route.path.indexOf(this.path) !== -1
        }
    },
    methods:{
        itemClick(){
            // console.log('++++');
            //跳转
            this.$router.replace(this.path)
        }
    }
}
</script>
<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-top: 3px;
}
.active{
    color: red;
}
</style>