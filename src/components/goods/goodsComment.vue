<template>
    <div>
        <comment :id="this.$route.params.id"></comment>
    </div>
</template>

<script>
    import comment from '../submitcomponent/comment.vue'
    export default {
        name: "goodsComment",
        components:{
            comment
        }
    }
</script>

<style scoped>

</style>