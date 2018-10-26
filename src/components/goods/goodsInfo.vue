<template>
    <div class="goodsInfo">
        <!--小球-->
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="ball" v-show="flag" id="ball">

        </div>
        </transition>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swipe :list="lunboList" :isFull="false"></swipe>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodsList.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p><span>市场价:<del>￥{{goodsList.market_price}}</del></span><span>畅销价：<span class="price">￥{{goodsList.sell_price}}</span></span>
                    </p>
                    <p>
                        购买数量:
                    </p>
                    <shuru @get="getnum"   :max="goodsList.stock_quantity"></shuru>
                    <p class="button">
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="showball">加入购物车</mt-button>
                        <!--按钮属于当前页面  数量属于shuru页面 子传父 父传子一个方法 子调用方法 并将数据当做参数传递回来
                        change 事件  数值改变就调用
                        -->
                    </p>
                </div>

            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:{{goodsList.goods_no}}</p>
                    <p>库存情况:{{goodsList.stock_quantity}}</p>
                    <p>上架时间:{{goodsList.add_time|dataClear}}</p>
                </div>
            </div>
            <div class="mui-card-footer" id="huanhang">
                <mt-button type="primary" size="large" plain @click="godesc">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="gocomment">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>

    import swipe from '../submitcomponent/swipe.vue'
    import shuru from '../submitcomponent/shuru.vue'

    export default {
        name: "goodsInfo",
        components: {
            swipe,
            shuru
        },
        data() {
            return {
                lunboList: [],
                id: this.$route.params.id,
                goodsList: {},
                flag:false,
                shuliang:1,
            }
        },
        methods: {
            getBanner() {
                this.$http.get('api/getthumimages/' + this.id).then(res => {
                    if (res.body.status === 0) {
                        res.body.message.forEach(item => {
                            item.img = item.src;
                        });
                        this.lunboList = res.body.message;

                    }
                })
            },
            getgoodsList() {
                this.$http.get('api/goods/getinfo/' + this.id).then(res => {
                    if (res.body.status === 0) {
                        this.goodsList = res.body.message[0];
                    }
                })
            },
            godesc(){
                this.$router.push({ path: `/home/goodsDesc/${this.id}`});
            },
            gocomment(){
                this.$router.push({ path: `/home/goodsComment/${this.id}`});
            },
            showball(){
                this.flag=!this.flag;
                //点击 要 id 数量 单价 选中状态 最大存到一个对象里面去
                let obj={
                    id:this.id,
                    count:this.shuliang,
                    price:this.goodsList.sell_price,
                    selected:true,
                    max:this.goodsList.stock_quantity
                };
                this.$store.commit("addCar",obj);
            },
            beforeEnter(el){
                el.style.transform='translate(0,0)';
            },
            enter(el,done){
                const ball =el.getBoundingClientRect();
                //因为这个组件中没有span小红点 但是没关系
                const span=document.querySelector(".mui-badge").getBoundingClientRect();
                let x=span.left-ball.left;
                let y=span.top-ball.top;
                el.offsetWidth;
                /*el.style.transform='translate('+x+'px,'+y+'px)';*/
                el.style.transform=`translate(${x}px,${y}px)`;
                el.style.transition="all 0.8s cubic-bezier(1,-0.61,.5,1.2)";
                done();
            },
            afterEnter(el){
                this.flag=!this.flag;
            },
            //小球的优化  每个球的位置都不同  解决 得到两个小红点的坐标
            //怎么获取坐标 domObj.getBoundingClientRect()


            getnum(data){
                this.shuliang=data.num;
                console.log(this.shuliang);
            }
        },
        created() {
            this.getBanner();
            this.getgoodsList();
        },
    }

</script>

<style scoped lang="scss">
    .goodsInfo {
        background: #eeeeee;
        overflow: hidden;
        position: relative;
    }

    .price {
        color: red;
        font-weight: bold;
        font-size: 19px;
    }
    .button{
        margin-top: 5px;
    }
    #huanhang{
        flex-wrap: wrap;
        button{
            margin:  2px 5px;
        }
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        top: 423px;
        left: 148px;
        z-index: 999;
    }

</style>