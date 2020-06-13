<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
            <swiper-slide 
                v-for="(item, index) in imgs"
                :key="index"
            >
                <img class="gallary-img" :src="item" />  <!--:即为绑定的形式-->
            </swiper-slide>    
            <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props: {
        imgs: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination', 
                    type: 'fraction'
                },   //swiper5官网    https://www.swiper.com.cn/api/pagination/299.html
                observer:true,   //当Swiper的父元素变化时，例如window.resize，Swiper更新。解决v-show的影响
                observeParents:true,
            }
        }
    },
    methods: {
        handleGallaryClick () {
            this.$emit('close')
        }
    }
}
</script>

<style scoped lang="stylus">
    .container >>> .swiper-container    //.swiper-container在检查中key看到它有overflow hidden的默认属性
        overflow inherit   //规定应该从父元素继承 overflow 属性的值，默认是scroll。overflow中visible和hidden对立，scroll和auto对立
    .container
        display flex
        flex-direction column
        justify-content center
        z-index 99
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background #000

        .wrapper
            //overflow hidden    //把高度限制死了
            height 0
            width 100%
            padding-bottom 100%

            .gallary-img
                width 100%
            .swiper-pagination
                height .5rem
                width 100%
                color white
                bottom -1rem
</style>