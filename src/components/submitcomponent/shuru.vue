<template>
    <div>
        <div class="mui-numbox" data-numbox-min="1" :data-numbox-max='max'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" @change="change" ref="numBox">
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui'
    export default {
        name: "shuru",
        mounted(){
            mui(".mui-numbox").numbox();//初始化数字选择框
            console.log(this.max);
        },
        props:["max"],
        methods:{
            change(){
                //给当前元素设置ref属性 再通过this.$refs.属性名 拿到dom对象
                this.$emit("get",{num:parseInt(document.getElementById("test").value)});
            }
        },
        watch:{
            //监听最大值（max）只要值改变就设置为最大值
            max:function (newVal) {
                mui(".mui-numbox").numbox().setOption('max',newVal);
            }
        }
    }

</script>

<style scoped>

</style>