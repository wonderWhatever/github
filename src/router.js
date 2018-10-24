import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//导入相关的组件
import  Home from "./components/tapbar/home.vue"
import  Shopcar from "./components/tapbar/shopcar.vue"
import  Member from "./components/tapbar/member.vue"
import  Search from "./components/tapbar/search.vue"
import  NewList from "./components/news/newsList.vue"
import  Newsinfo from "./components/news/newsinfo.vue"
import  Photo from "./components/photos/photoList.vue"
import  PhotoInfo from "./components/photos/photoInfo.vue"
import  Good from "./components/goods/goodsList.vue"
import  GoodsInfo from "./components/goods/goodsInfo.vue"



let router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/shopcar',component:Shopcar},
        {path:'/member',component:Member},
        {path:'/search',component:Search},
        {path:'/home/newsList',component:NewList},
        {path:'/home/newsinfo/:id',component:Newsinfo},
        {path:'/home/photoList',component:Photo},
        {path:'/home/photoInfo/:id',component:PhotoInfo},
        {path:'/home/goodsList',component:Good},
        {path:'/home/goodsInfo/:id',component:GoodsInfo},
    ],
    linkActiveClass:"mui-active",

});



//es6 语法 暴露路由对象
export default router;