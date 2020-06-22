<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg"/>
            <div class="banner-info">
                <div class="banner-title"> 
                    {{this.sightName}}
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe64a;</span>
                    {{this.gallaryImgs.length}}
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallary 
                :imgs="gallaryImgs" 
                v-show="showGallary"
                @close="handleGallaryClose"
            ></common-gallary>
            <!--common-gallary代表的就是slot-->
        </fade-animation>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation';
export default {
    name: 'DetailBanner',
    props: {
        sightName: String,
        bannerImg: String,
        gallaryImgs: Array,
    },
    data () {
        return {     //return一个对象
            showGallary: false,
        }
    },
    methods: {
        handleBannerClick() {
            this.showGallary = true
        },
        handleGallaryClose() {   //点击页面返回上一页
            this.showGallary = false
        }
    },
    components: {
        CommonGallary,
        FadeAnimation
    }
}
</script>

<style scoped lang="stylus">
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom  55%

        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))   //渐变效果

            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem 
            .banner-number
                height .32rem
                line-height .32rem
                margin-top .14rem
                padding 0 .4rem
                border-radius .2rem
                font-size .24rem
                background rgba(0,0,0,.8)  
                        /*RGBA(R,G,B,A)     R：红色值。正整数 | 百分数
                                            G：绿色值。正整数 | 百分数
                                            B：蓝色值。正整数 | 百分数
                                            A：Alpha透明度,取值0~1之间。*/
                .banner-icon
                    font-size .24rem
</style>