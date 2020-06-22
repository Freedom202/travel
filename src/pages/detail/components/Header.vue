<template>
    <div>
        <router-link 
            tag="div" 
            to="/" 
            class="header-abs"
            v-show="showAbs"
        >
            <div class="iconfont header-abs-back">&#xe6bc;</div>
        </router-link>
        <div 
            class="header-fixed" 
            v-show="!showAbs"
            :style="opacityStyle"
        >
            <router-link to="/">   <!--回到根目录，即首页-->
                <div class="iconfont header-fixed-back">&#xe6bc;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll() { 
            //console.log(document.documentElement.scrollTop)
            //console.log('scroll')
            const top = document.documentElement.scrollTop
            //console.log(top)
            if(top > 60) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity   //opacity最大值只能是1
                this.opacityStyle = {
                    opacity: opacity  //可以写成opacity就可
                }
                this.showAbs = false
                //console.log(this.showAbs)  
            } else {
                this.showAbs = true
                //console.log(this.showAbs)
            }
        }
    },
    activated () {   //页面展示的时候绑定scroll事件
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () {    //页面隐藏或者换页的时候解除scroll事件
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style scoped lang="stylus"> 
@import '~styles/varibles.styl'

    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        line-height .8rem
        border-radius .4rem
        text-align center
        background rgba(0, 0, 0, .8)

        .header-abs-back
            color #fff
            font-size .4rem

    .header-fixed
        z-index 2
        position absolute
        left 0
        right 0
        top 0
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        font-size .32rem

        .header-fixed-back
            position absolute
            top 0
            left 0
            width .64rem
            text-align: center
            font-size: .4rem
            color #fff   //使链接样式为白色
</style>