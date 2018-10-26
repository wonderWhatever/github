<template>
    <div>
        <div class="mui-numbox" data-numbox-min="1" :data-numbox-max='200'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" :value="count" @change="changes" ref="numBox">
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui'
    export default {
        name: "shuru1",
        mounted(){
            mui(".mui-numbox").numbox();//初始化数字选择框
        },
        props:["count","id"],
        methods:{
            changes(){
                //调用修改数据的方法
                let num= parseInt(this.$refs.numBox.value);
                this.$store.commit("changeNum",{count:num,id:this.id});
               //   let num1 =this.$store.commit("addCar",{a:1,b:2});
            }
        },

    }

</script>

<style scoped>
    .mui-numbox{
        height: 27px;
    }
</style>