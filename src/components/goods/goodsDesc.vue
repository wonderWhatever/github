<template>
    <div>
        <h3>{{desc.title}}</h3>
        <hr>
        <div class="goodsDesc_content" v-html="desc.content"></div>
    </div>
</template>

<script>
    export default {
        name: "goodsDesc",
        data(){
            return {
                desc:{}
            }
        },
        methods:{
            getdesc(){
                this.$http.get('api/goods/getdesc/' +this.$route.params.id).then(res => {
                    if (res.body.status === 0) {
                        this.desc=res.body.message[0];
                        console.log(this.desc);
                    }
                })
            }
        },
        created(){
            this.getdesc();
        }
    }
</script>

<style  lang="scss">
    .goodsDesc_content{
        img{
            width: 100%;
        }
    }
</style>