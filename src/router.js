import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//导入相关的组件
import  Home from "./components/home.vue"
import  Cart from "./components/Cart.vue"
import  User from "./components/children/user.vue"
import  Zhuce from "./components/children/zhuce.vue"



let router=new VueRouter({
    routes:[
        {path:'/',redirect:'/Home'},
        {path:'/home',component:Home},
        {path:'/cart',component:Cart,children:[
                {path:'user',component:User},
                {path:'zhuce',component:Zhuce}
            ]},
    ]
});



//es6 语法 暴露路由对象
export default router;