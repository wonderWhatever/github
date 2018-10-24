<template>
    <div class="comment">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入BB内容 最多120字" maxlength="120" v-model="message"></textarea>
        <mt-button type="primary" size="large" @click="postcomment" >发表评论</mt-button>
        <div class="list">
            <div class="item" v-for="(item,index) in comments" :key="item.id">
                <div class="title">
                    第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dataClear}}
                </div>
                <div class="com_body">
                    {{item.content}}
                </div>
            </div>
        </div>


        <mt-button type="danger" size="large" plain @click="getMoreComment">加载更多</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    export default {
        name: "comment",
        props: ["id"],
        data() {
            return {
                page: 1,//默认展示第一页的数据
                comments: [],
                message:''
            }
        },
        methods: {
            getcomments() {
                this.$http.get('api/getcomments/' + this.id + '?pageindex=' + this.page).then(result => {
                    if (result.body.status === 0) {
                        console.log(result.body);
                        this.comments = result.body.message;
                    }
                });
            },
            getMoreComment() {
                this.page++;
                this.$http.get('api/getcomments/' + this.id + '?pageindex=' + this.page).then(result => {
                    if (result.body.status === 0) {
                        this.comments = this.comments.concat(result.body.message);
                    }
                });
            },
            postcomment(){
                //先校验
                if(this.message.trim().length===0){
                    Toast("评论不可为空");
                    return false;
                }
                this.$http.post('api/postcomment/'+this.id,{content:this.message.trim()}).then(res=>{
                    if (res.body.status === 0) {
                        console.log(res.body.message);
                        //拼接一个评论对象
                        let cmt={
                            add_time:Date().now,
                            user_name:"匿名用户",
                            content:this.message.trim(),
                        };
                        this.comments.unshift(cmt);
                        this.message='';
                    }
                })
            }
        },
        created() {
            this.getcomments();
        }
    }
</script>

<style scoped lang="scss">
    textarea {
        margin: 0;
        font-size: 14px;
        height: 85px;
    }

    .comment {
        h3 {
            font-size: 13px;
        }
        .list {
            margin: 5px 1px;
            .item {
                font-size: 13px;
                .title {
                    background-color: #cccccc;
                    line-height: 30px;
                }
                .com_body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>