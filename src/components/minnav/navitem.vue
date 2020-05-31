<template>
<div class='nav-item' @click="textClick">
    <div :class="{active:navActive}">
        <slot name="text"></slot>
    </div>
</div>
</template>
<script>

export default {
    name:'navitem',
    data(){
        return{
        }
    },
    props:{
        path:String
    },
    methods:{
        textClick(){
            //跳转
            this.$router.replace(this.path)
           
        }
    },
    computed:{
        navActive(){
             //indexOf!== -1为true
            //判断哪个路由（页面）处于活跃状态，并判断path
              return this.$route.path.indexOf(this.path) !== -1
        }
    }
}
</script>
<style scoped>
.active{
      border-bottom: 2px solid #FC3737;
      color: #FC3737;
      padding-bottom: 4px;
}
</style>