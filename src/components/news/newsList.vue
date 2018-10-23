<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <router-link :to="'/home/newsinfo/'+item.id" v-for="item in newsList" :key="item.id">
                    <img :src="item.img_url" class="mui-media-object mui-pull-left">
                    <div class="mui-media-body">
                        <h4>{{item.title}}</h4>
                        <p class="mui-ellipsis"><span>发表时间:{{item.add_time|dataClear('YYYY-MM-DD')}}</span><span>点击数:{{item.click}}</span></p>
                    </div>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "newsList",
        data(){
            return {
                newsList:[]
            }
        },
        methods:{
            getnewsList(){
                this.$http.get("api/getnewslist").then(result=>{
                    if (result.body.status === 0) {
                        this.newsList = result.body.message;
                    }
                });
            }
        },
        created(){
            this.getnewsList();
        }
    }
</script>

<style scoped>
    h4{
        font-size: 14px;
    }
    .mui-ellipsis{
        display: flex;
        justify-content: space-between;
        color: #226aff;
        font-size: 12px;
    }
</style>