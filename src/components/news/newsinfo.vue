<template>
    <div>
        <div class="newsinfo_header">
            <h3>{{newsinfo.title}}</h3>
            <p><span>发表时间:{{newsinfo.add_time|dataClear}}</span><span>点击量:{{newsinfo.click}}</span></p>
        </div>
        <hr style="width: 98%;margin: 0 auto;">
        <div class="content" v-html="newsinfo.content">

        </div>
        <div class="pinglun">
            <comment :id="id"></comment>
        </div>
    </div>
</template>

<script>
    import Comment from "../submitcomponent/comment.vue"
    export default {
        name: "newsinfo",
        data(){
          return{
              id:this.$route.params.id,
              newsinfo:{}
          }
        },
        methods:{
            getNewsinfo(){
                this.$http.get('api/getnew/'+this.id).then(result=>{
                    if (result.body.status === 0) {
                        console.log(result.body.message[0]);
                        this.newsinfo=result.body.message[0];
                    }
                });
            }
        },
        created(){
            this.getNewsinfo();
        },
        components:{
            comment:Comment
        }
    }
</script>

<style  lang="scss">
    .newsinfo_header{
        h3{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        p{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
    .content{
        img{
            width: 100%;
        }
    }
    .pinglun{
        padding-bottom: 50px;
    }
</style>