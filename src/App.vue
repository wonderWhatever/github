<template>
    <div class="container">
        <mt-header fixed title="随便买"></mt-header>
        <h1>123241231</h1>
        <div class="body">

        </div>
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </a>
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
    }
</style>