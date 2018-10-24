<template>
    <div>

        <div id="slider" class="mui-slider" data-slider="4">
            <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control
                     mui-segmented-control-inverted mui-segmented-control-negative mui-scroll-wrapper">

                <div class="mui-scroll">
                    <!--这里放置真实显示的DOM内容-->

                    <a :class="['mui-control-item',item.id===0?'mui-active':'']" href="javascript:"
                       v-for="item in navList" :key="item.id" @click="getPhotoList(item.id)">
                        {{item.title}}
                    </a>

                </div>
            </div>
        </div>

        <ul class="photos">
            <router-link :to="'/home/photoInfo/'+item.id" class="photo" v-for="item in photoList" :key="item.id" tag="li">

                <img alt="" v-lazy='item.img_url'>
                <div class="Img_text">
                    <h4>{{item.title}}</h4>
                    <span>{{item.zhaiyao}}</span>
                </div>

            </router-link>
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
                navList: [],
                photoList:[]
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
            this.getPhotoList(0);
        },
        methods: {
            getNav() {
                this.$http.get("api/getimgcategory").then(res => {
                    if (res.body.status === 0) {
                        this.navList = res.body.message;
                        this.navList.unshift({title: "全部", id: 0});
                    }
                })
            },
            getPhotoList(id){
                this.$http.get('api/getimages/'+id).then(res=>{
                    if (res.body.status === 0) {
                        console.log(id);
                        this.photoList = res.body.message;
                        console.log(this.photoList);
                    }
                })
            },
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
        padding: 10px;
        width: 100%;
        text-align: center;
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        .photo{
            margin-bottom: 10px;
            width: 100%;
            position: relative;
            background-color: #cccccc;
            box-shadow: 0 0 9px #999;
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