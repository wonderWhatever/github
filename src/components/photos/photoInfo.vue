<template>
    <div>
        <div class="photoinfo_header">
            <h3>{{photoinfo.title}}</h3>
            <p><span>发表时间:{{photoinfo.add_time|dataClear}}</span><span>点击量:{{photoinfo.click}}</span></p>
        </div>
        <hr style="width: 98%;margin: 0 auto;">
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        <div class="photoinfo_content" v-html="photoinfo.content">

        </div>
        <div class="photoinfo_pinglun">
            <comment :id="id"></comment>
        </div>
    </div>
</template>

<script>
    import Comment from "../submitcomponent/comment.vue"
    export default {
        name: "photoInfo",
        data(){
            return {
                photoinfo:{},
                id:this.$route.params.id,
                slide1:[],
            }
        },
        methods:{
            getphotoinfo(){
                this.$http.get('api/getimageInfo/'+this.id).then(result=>{
                    if (result.body.status === 0) {
                        console.log(result.body.message[0]);
                        this.photoinfo=result.body.message[0];
                    }
                });
            },
            handleClose () {
                console.log('close event')
            },
            getsltu(){
                this.$http.get('api/getthumimages/'+this.id).then(result=>{
                    if (result.body.status === 0) {
                        console.log(result.body.message);
                        //遍历每个图片 补全图片的宽高 小图片
                        result.body.message.forEach(item=>{
                            item.msrc=item.src;
                            item.w=600;
                            item.h=400;
                        });
                        this.slide1=result.body.message;
                    }
                });
            }
        },
        created(){
          this.getphotoinfo();
          this.getsltu();
        },
        components: {
            Comment
        }
    }
</script>

<style  lang="scss">
    .photoinfo_header{
        h3{
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
            color: #26a2ff;
        }
        p{
            font-size: 13px;
            color: #cccccc;
            display: flex;
            justify-content: space-between;
        }
    }
    .photoinfo_content{
        font-size: 13px;
        line-height: 30px;
        img{
            width: 100%;
        }
    }
    .photoinfo_pinglun{
        padding-bottom: 50px;
    }
    figure{
        display: inline-block;
        img{
            width: 88px;
            height: 58px;
        }
    }
</style>