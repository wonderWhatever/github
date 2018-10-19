import Vue from 'vue'
import app from  './App.vue'

//引入mint ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);


//导入mui
import './lib/mui/css/mui.css'
import  './lib/mui/css/icons-extra.css'













let vm= new Vue({
	el:"#app",
	render:c=>c(app),

});