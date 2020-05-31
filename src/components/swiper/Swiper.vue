<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="content">
    <swiper-slide>   
      <a><img src="~assets/img/banner/q1.jpg"></a>
    </swiper-slide>
    <swiper-slide>
      <a ><img src="~assets/img/banner/q2.jpg"></a>
    </swiper-slide>
    <swiper-slide>
      <a><img src="~assets/img/banner/q3.jpg"></a>
    </swiper-slide>
    <!-- 分页器 -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
          pagination: {//分页器
            el: '.swiper-pagination'
            // type:'fraction'按钮变数字
          },
         
          // Some Swiper option/callback...
          autoplay: {
            disableOnInteraction: false,
            delay: 2500,
          },
          loop: true,
      　　navigation: {
      　　　　nextEl: '.swiper-button-next',
      　　　　prevEl: '.swiper-button-prev'
      　　}
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    methods:{
      imgsrc(){
        alert('没有数据支持')
      }
    }
  }
</script>
<style scoped>
img{
width: 100%;
height: 100%;
}
.content{
  height: 100%;
  width: 100%;
}
a:hover{
  pointer-events: all;
}
</style>