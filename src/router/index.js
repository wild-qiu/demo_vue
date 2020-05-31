import Vue from 'vue'
import Router from 'vue-router'
//文件导入
const home = () => import('../views/Home/home')
const Category = () => import('../views/Category/Category')
const cart = () => import('../views/Cart/cart')
const profile = () => import('../views/Profile/profile')

Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'//默认首页
    },
    {
      path:'/home',
      component:home,
      children:[
        {
          path:'',
          redirect:'tuijian'
        },
        {
          path:'tuijian',
          component:()=> import('../views/Home/home-nav/tuijian')
        },
        {
          path:'gedan',
          component:()=> import('../views/Home/home-nav/gedan')
        },
        {
          path:'zhubo',
          component:()=> import('../views/Home/home-nav/zhubo')
        },
        {
          path:'paihang',
          component:()=> import('../views/Home/home-nav/paihang')
        },
        {
          path:'musicplay',
          component:()=> import('../views/Home/home-nav/musicplay')
        },


      ]
    },
    {
      path:'/Category',
    component:Category
  },
    {
      path:'/cart',
      component:cart
    },
    {
      path:'/Profile',
      component:profile
    }
  ],
  mode:'history'//设置hashi
})