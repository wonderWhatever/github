<template>
    <div class="container">

        <transition>
            <!--占坑-->
            <router-view></router-view>
        </transition>

        <!--头部-->
        <mt-header title="Vue" fixed>
            <span @click="goback" slot="left" v-show="flag">
                <mt-button icon="back">返回</mt-button>
            </span>
        </mt-header>



        <!--身体-->
        <div class="body">

        </div>





        <!--尾部-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item1" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item1" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item1" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.getallNum}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item1" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>

</template>

<script>
    export default {
        name: "App",
        methods:{
            goback(){
                //点击后退
                this.$router.go(-1);
            }
        },
        data(){
            return{
                flag:false
            }
        },
        created(){

        },
        watch:{
            '$route.path':function (newVal) {
                if(newVal==='/home'){
                    this.flag=false;
                }else {
                    this.flag=true;
                }
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .mui-bar-tab .mui-tab-item1.mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item1 {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item1 .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .container {
        padding-top: 40px;
        overflow: hidden;
        padding-bottom: 40px;
    }

    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    .v-enter-active,.v-leave-active{
        transition: all 0.8s ease;

    }
</style>