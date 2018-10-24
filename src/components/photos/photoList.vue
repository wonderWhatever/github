<template>
    <div>

        <div id="slider" class="mui-slider" data-slider="4">
            <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control
                     mui-segmented-control-inverted mui-segmented-control-negative mui-scroll-wrapper">

                <div class="mui-scroll">
                    <!--这里放置真实显示的DOM内容-->

                    <a :class="['mui-control-item',item.id===0?'mui-active':'']" href="javascript:"
                       v-for="item in navList" :key="item.id">
                        {{item.title}}
                    </a>

                </div>
            </div>
        </div>

        <ul class="photos">
            <li class="photo">
                <img alt="" src="http://ofv795nmp.bkt.clouddn.com//upload/201504/18/thumb_201504181230434303.jpg">
                <div class="Img_text">
                    <h4>十年生死两茫茫</h4>
                    <span>不思量，自难忘，千里孤坟，无处话凄凉</span>
                </div>
            </li>
            <li class="photo">
                <img alt="" src="http://ofv795nmp.bkt.clouddn.com//upload/201504/18/thumb_201504181237019134.jpg">
                <div class="Img_text">
                    <h4>夜来幽梦忽还乡</h4>
                    <span>小轩窗，正梳妆，相顾无言，惟有泪千行</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import Mui from '../../lib/mui/js/mui.js'
    //报错 webpack打包的时候使用了严格模式 所以会报错
    //解决 禁用webpack打包时的严格模式
    export default {
        name: "photoList",
        data() {
            return {
                navList: []
            }
        },
        mounted() {
            Mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
                scrollX: true, //是否横向滚动
                indicators: false, //是否显示滚动条
                bounce: true //是否启用回弹
            });
        },
        created() {
            this.getNav();
        },
        methods: {
            getNav() {
                this.$http.get("api/getimgcategory").then(res => {
                    if (res.body.status === 0) {

                        this.navList = res.body.message;
                        this.navList.unshift({title: "全部", id: 0});
                        console.log(this.navList);
                    }
                })
            }
        }
    }


</script>

<style scoped lang="scss">
    * {
        touch-action: none;
        margin: 0;
        padding: 0;
    }

    .photos{
        list-style: none;
        width: 100%;
        text-align: center;
        .photo{
            margin-bottom: 10px;
            width: 100%;
            position: relative;
            background-color: #cccccc;
            .Img_text{
                position: absolute;
                left: 0;
                bottom:0;
                color: white;
                text-align: left;
                background-color: rgba(0, 0, 0, 0.4);
                max-height: 84px;
                width: 100%;
                h4{
                    font-size: 14px;
                }
                span{
                    font-size: 13px;
                }
            }
            img{
                width: 100%;
                height: 100%;
                display: block;
            }
        }
    }
</style>