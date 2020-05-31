import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'plugin/swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
