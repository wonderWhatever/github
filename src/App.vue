<template>
    <div class="container">

        <transition>
            <!--占坑-->
            <router-view></router-view>
        </transition>

        <!--头部-->
        <mt-header fixed title="随便买"></mt-header>



        <!--身体-->
        <div class="body">

        </div>





        <!--尾部-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>

</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .foot {
        width: 100%;
        background-color: #66ccff;
        height: 45px;
        text-align: center;
        font-size: 18px;
        line-height: 45px;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 1;
    }

    .container {
        padding-top: 40px;
        overflow: hidden;
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