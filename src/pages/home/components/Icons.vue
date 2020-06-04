<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index"> 
<!--key值最好不要用index，因为index是变量，变化后可能有问题，但是此处index不会变更，所以还好； 轮播页面由pages确定-->
                <div 
                    class="icon"
                    v-for="item of page"
                    :key="item.id"
                >
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>  <!--插值表达式-->
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',

    data () {
        return {
            iconsList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc: '景点门票景点门票景点门票景点门票'
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                desc: '一日游'
            },{
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
                desc: '踏青赏花'
            },{
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
                desc: '主题乐园'
            },{
                id: '0005',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                desc: '深圳必游'
            },{
                id: '0006',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png',
                desc: '海滨广岛'
            },{
                id: '0007',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
                desc: '泡温泉'
            },{
                id: '0008',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
                desc: '城市观光'
            },{
                id: '0009',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                desc: '一日游'
            }]
        }
    },
    computed: {     //(计算属性，自带缓存机制）实现两页轮播
        pages () {
            const pages = []     //数组，从0开始，0即第一页
            this.iconsList.forEach((item, index) => {   //forEach两个参数，循环项item和循环项对应的下标index
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
/*当文字过多时，显示"..."   以下*/
@import '~styles/mixins.styl'  
    // .icons 
    //     width 100%
    //     overflow hidden
    //     height 0
    //     padding-bottom 50%  //宽为100%，高为0，此代码表示高为宽的一半
    //     // background green
    //原本.swiper-slide的高度只有图标的高度，并不是整个.icons的高度，且.swiper-slide自带hidden属性
    .icons >>> .swiper-slide
        height 0
        padding-bottom 50%

    .icon
        position relative 
        overflow hidden
        float left 
        width 25%
        height 0
        padding-bottom 25% //表示宽高都为25%
        // background red

        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            box-sizing border-box
            padding .1rem 
            // background blue

            .icon-img-content
                display block
                margin 0 auto  //图片居中
                height 100%

        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem 
            line-height .44rem
            text-align center
            color $darkTextColor
            ellipsis()    //使用mixins.styl中的ellipsis方法
</style>