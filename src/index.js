import Vue from 'vue'
import app from  './App.vue'

//引入mint ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);


//导入mui
import './lib/mui/css/mui.css'
import  './lib/mui/css/icons-extra.css'

//导入router.js
import router from './router.js'

//导入vue-resource
import vueResource from 'vue-resource'
Vue.use(vueResource);

//全局配置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';

//导入vue-preview
import VuePreview from 'vue-preview'
Vue.use(VuePreview);

//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex);

/*
* state中的数据不能直接修改 想修改通过mutations
* 获取数据 this.$store.state.xxx
* 组件调用仓库中的方法 this.$store.commit("方法名","唯一一个参数")
* 调用getters里面的方法类似
*
*/

//全局配置
Vue.http.options.emulateJSON = true;


//时间插件
import Moment from 'moment'
//配置全局的过滤器
//参数1 格式化的数据  参数二 数据格式
Vue.filter("dataClear",function (data,pattern='YYYY-MM-DD HH:mm:ss') {
   return Moment(data).format(pattern);
});


let car=JSON.parse(localStorage.getItem("car")||'[]');
let store=new Vuex.Store({
	state:{
		car
	},
	mutations: {
		//	点击购物车
		addCar(state,obj){
			let flag=false;
			//若之前没有商品，加上商品  有的话 加数量
			//怎么比 ID
			state.car.some(item=>{
				if(item.id===obj.id){
					item.count+=parseInt(obj.count);
					flag=true;
					return true;
				}
			});
			//没找到
			if(!flag){
				state.car.push(obj);
			}
			//将car存到localstrong里面
			localStorage.setItem("car",JSON.stringify(state.car));
		},
		//更新数据
        changeNum(state,obj){
            state.car.forEach(item=>{
            	item.id=parseInt(item.id);
				if(item.id===obj.id){
                    item.count=parseInt(obj.count);
					return true;
				}
			});
            localStorage.setItem("car",JSON.stringify(state.car));
		},
		//删除数据
		delNum(state,id){
            state.car.forEach((item,i)=>{
                if(item.id===id){
					car.splice(i,1);
					return true;
                }
            });
            localStorage.setItem("car",JSON.stringify(state.car));
		},
		//修改
        updateS(state,obj){
            state.car.forEach((item)=>{
                if(item.id===obj.id){
                    item.selected=obj.selected;
                    return true;
                }
            });
            localStorage.setItem("car",JSON.stringify(state.car));
		}
	},
	getters:{
		//获取微标的数量
		getallNum(state){
			let c=0;
			state.car.forEach(item=>{
				c+=item.count;
			});
			return c;
		},
		//获取商品数量
		getgoodsCount(state){
			let obj={};
			state.car.forEach(item=>{
				obj[item.id]=item.count;
			});
			return obj;
		},
		getgoodsSelected(state){
			let sel={};
			state.car.forEach(item=>{
				sel[item.id]=item.selected;
			});
			return sel;
		},
		//计算总价
		getgoodsPrice(state){
			let obj={
				count:0,
				amount:0,
			};
			state.car.forEach(item=>{
				if(item.selected){
					obj.count+=item.count;
					obj.amount+=(item.count*item.price);
				}
			});
			return obj;
		}
	}
});

let vm= new Vue({
	el:"#app",
	render:c=>c(app),
	router,
	store,
});