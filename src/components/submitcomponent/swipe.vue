<template>
    <div>
        <div class="home-swipe">
        <mt-swipe :auto="4000">

            <mt-swipe-item v-for="(item,i) in list" :key="i">
                <img :src='item.img' alt="" :class="{'full':isFull}">
            </mt-swipe-item>

        </mt-swipe>
        </div>
    </div>
</template>

<script>

    export default {
        name: "swipe",
        props: ['list','isFull'],

    }
</script>

<style scoped lang="scss">
    .full{
            width: 100%;
    }
    .home-swipe {
        text-align: center;
        height: 200px;
        img {
            height: 100%;
        }
    }
</style>