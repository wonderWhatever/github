<template>
    <div class="shopcar">
        <div class="mui-card" v-for="(item,i) in goods" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch v-model="$store.getters.getgoodsSelected[item.id]"
                               @change="seleted(item.id,$store.getters.getgoodsSelected[item.id])"
                    ></mt-switch>
                    <img :src="item.thumb_path" alt="">
                    <div class="info">
                        <h3>{{item.title}}</h3>
                        <p><span class="price">￥{{item.sell_price}}</span>
                            <shuru1 :count="$store.getters.getgoodsCount[item.id]" :id="item.id"></shuru1>
                            <a @click.prevent="del(i,item.id)">删除</a></p>
                        <!--怎么从strong中的car获取数量
                        创建一个空对象 遍历商品数据 通过id拿到对应的数量
                        -->
                    </div>
                </div>
            </div>
        </div>


        <!--计算-->
        <div class="mui-card computed">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div data-v-31cd8f90="" class="left"><p>总计（不含运费）</p>
                        <p>已勾选商品
                            <span class="red">{{$store.getters.getgoodsPrice.count}}</span> 件，
                            总价 <span class="red">￥{{$store.getters.getgoodsPrice.amount}}</span>
                        </p>
                    </div>
                    <mt-button type="danger" class="mui-pull-right">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import shuru1 from '../submitcomponent/shopcar_shuru.vue'

    export default {
        name: "shopcar",
        components: {
            shuru1,
        },
        data() {
            return {
                goods: [],
            }
        },
        created() {
            this.getgoods();
        },
        methods: {
            getgoods() {
                let idArr = [];
                this.$store.state.car.forEach(item => {
                    idArr.push(item.id);
                });
                //若购物车中没有商品 直接返回 不休要接口 直接报错
                if (idArr <= 0) {
                    return
                }
                this.$http.get("api/goods/getshopcarlist/" + idArr.toString()).then(res => {
                    if (res.body.status === 0) {
                        this.goods = res.body.message;
                    }
                })
            },
            //删除两个
            del(index, id) {
                this.goods.splice(index, 1);
                this.$store.commit("delNum", id);
            },
            //点击开关修改状态,
            seleted(id, zt) {
                this.$store.commit("updateS", {id: id, selected: zt});
            }
        }
    }
</script>

<style scoped lang="scss">
    .shopcar {
        overflow: hidden;
        background-color: #eeeeee;
    }

    .mui-card-content-inner {
        display: flex;
        img {
            width: 60px;
            height: 60px;
        }
        h3 {
            font-size: 13px;
        }
        .info {

            p {
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span {
                    margin-right: 10px;
                    color: red;
                    font-weight: bold;
                }
                a {
                    margin-left: 10px;
                }
            }
        }
    }
    .computed{
        padding-top: 10px;
    }
    .red{
        color: red;
        font-weight: bold;
        font-size: 18px;
    }
    .mui-pull-right{
        margin-left: 25px;
        margin-top: 8px;
    }
</style>