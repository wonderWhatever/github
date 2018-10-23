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


//时间插件
import Moment from 'moment'
//配置全局的过滤器
//参数1 格式化的数据  参数二 数据格式
Vue.filter("dataClear",function (data,pattern='YYYY-MM-DD HH:MM:SS') {
   return Moment(data).format(pattern);
});





let vm= new Vue({
	el:"#app",
	render:c=>c(app),
	router,

});