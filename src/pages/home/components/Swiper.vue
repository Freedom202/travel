<template>
    <div class="wrapper">  <!--用div包裹，防止页面加载过程的“抖动”-->
    <swiper :options="swiperOption" v-if="showSwiper">
    <!-- <swiper :options="swiperOption" v-if="list.length">  可以就这样写，但是最好避免把计算属性放在dom里，所以在下面重新创建了一个计算属性-->
        <!-- v-if="list.length"确保当list数组值传递进来后才创建swiper，效果就是显示的默认图片是第一张，否则，会显示最后一张图作为默认图片，因为list数组一开始是空数组，但是swiper会创建，所以会显示最后一张 -->
    <!-- slides -->
        <swiper-slide v-for="item of list" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
    
    <!-- Optional controls  /  slot向swiper传值，相当于插槽-->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!--轮播图的左右箭头 
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <!--轮播图的滚动条
    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    }, 
    //data: function()的简写    子组件中使用data，data必须是一个函数
    data () {
        return {
            swiperOption: {
                autoplay: true,   //控制轮播图自动滚动，一般默认为false
                pagination: {
                    el: '.swiper-pagination',  //swiper5官网    https://www.swiper.com.cn/api/pagination/299.html
                },
                loop: true    //实现左右无缝循环轮播
             },
            // swiperList: [{
            //     id: '0001',
            //     imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20206/514291e615bd16b1b0a943db75fb69b9.png_750x200_acd12a5d.png"
            // }, {
            //     id: '0002',
            //     imgUrl: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20206/514291e615bd16b1b0a943db75fb69b9.png_750x200_acd12a5d.png"
            // }] //两个图大小要一样
             
        }
    },
    computed: {   //计算属性
        showSwiper () {
            return this.list.length
        }
    }
}
</script>

<style scoped lang="stylus">
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff !important     //使样式不受scoped影响，可以穿透到别的组件，从wrapper到swiper

    .wrapper
        overflow: hidden     //隐藏多余
        width: 100%
        height: 0
        padding-bottom: 31.25%  //图片宽高比自适应：保证高宽比（200/750）始终是26.67
        /*或者写成：但是这样写有些浏览器不兼容
            width: 100%
            height: 26.67vw*/ 
        background: #eee  //图片未加载出来时显示灰色背景

        .swiper-img
            width: 100%
    
</style>