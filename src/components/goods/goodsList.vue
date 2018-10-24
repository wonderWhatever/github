<template>
    <div class="goods-list">
     <!--   <router-link :to="'/home/goodsInfo/'+item.id" class="goods-item" v-for="item in goodsList" tag="div">
            <img  :src="item.img_url" alt="">
            <h1  class="title">{{item.title}}</h1>
            <div  class="info">
                <p  class="price"><span  class="now">￥{{item.sell_price}}</span><span  class="old"><del>￥{{item.market_price}}</del></span></p>
                <p  class="sell"><span >热卖中</span><span >剩{{item.stock_quantity}}件</span></p>
            </div>
        </router-link>-->

        <div  class="goods-item" v-for="item in goodsList" :key="item.id"  @click="goInfo(item.id)">
            <img  :src="item.img_url" alt="" >
            <h1  class="title">{{item.title}}</h1>
            <div  class="info">
                <p  class="price"><span  class="now">￥{{item.sell_price}}</span><span  class="old"><del>￥{{item.market_price}}</del></span></p>
                <p  class="sell"><span >热卖中</span><span >剩{{item.stock_quantity}}件</span></p>
            </div>
        </div>

        <button  class="mint-button mint-button--danger mint-button--large" @click="getMoregoods">
            <label class="mint-button-text">加载更多</label>
        </button>
    </div>


    <!--
    在网页中有两种跳转方式 第一种 使用a标签 跳转 叫标签跳转  还一种window.localtion.href跳转 叫做编程式导航跳转
    -->
</template>

<script>
    export default {
        name: "goodsList",
        data(){
            return{
                goodsList:[],
                pageindex:1
            }
        },
        methods:{
            getgoodsList(){
                    this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result => {
                        if (result.body.status === 0) {
                            this.goodsList = result.body.message;
                        }
                    });
            },
            getMoregoods(){
                this.pageindex++;
                this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result => {
                    if (result.body.status === 0) {
                        this.goodsList = this.goodsList.concat(result.body.message);
                    }
                });
            },
            goInfo(id){
                console.log(this);
                /*
                *this.$route  是路由的参数对象
                *
                * this.$router 是路由的导航对象  可以方便的使用JS代码 可以实现路由的前进后退 跳转 等等
                *
                */
                this.$router.push({ path: `/home/goodsInfo/${id}`});
            }
        },
        created(){
            this.getgoodsList();
        }
    }
</script>

<style scoped lang="scss">
 .goods-list{
     display: flex;
     justify-content: space-between;
     flex-wrap:wrap;
     padding: 7px;
     .goods-item{
         border: 1px solid #cccccc;
         width: 49%;
         box-shadow: 0 0 7px #cccccc;
         margin: 3px 0;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         img{
             width: 100%;
             margin: 5px auto;
         }
         h1{
             font-size: 14px;
         }
         .info{
             background-color: #eee;
             p{
                 padding: 5px;
                 margin: 0;
                 font-size: 13px;
                 .now{
                     color: red;
                     font-weight: bold;
                 }
                 .old{
                     font-size: 12px;
                     margin-left: 10px;
                 }
             }
             .sell{
                 display: flex;
                 justify-content: space-between;
             }
         }
     }
 }
</style>