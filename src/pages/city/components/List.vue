<template>
    <div class="list" ref="wrapper">   <!--ref可以获取dom: https://blog.csdn.net/weixin_41646716/article/details/80455506     https://www.cnblogs.com/goloving/p/9404099.html-->
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                    <div class="button-list">
                        <div class="button-wrapper">
                            <div class="button">北京</div>
                        </div>
                        <div class="button-wrapper">
                            <div class="button">北京</div>
                        </div>
                        <div class="button-wrapper">
                            <div class="button">北京</div>
                        </div>
                        <div class="button-wrapper">
                            <div class="button">北京</div>
                        </div>
                        <div class="button-wrapper">
                            <div class="button">北京</div>
                        </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">    <!--或者用ul写-->
                    <div class="item border-bottom">阿拉尔</div>   <!--border-bottom添加下边框，只是默认颜色很浅-->
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                </div>
                <div class="title border-topbottom">A</div>
                <div class="item-list">    <!--或者用ul写-->
                    <div class="item border-bottom">阿拉尔</div>   <!--border-bottom添加下边框，只是默认颜色很浅-->
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                </div>
                <div class="title border-topbottom">A</div>
                <div class="item-list">    <!--或者用ul写-->
                    <div class="item border-bottom">阿拉尔</div>   <!--border-bottom添加下边框，只是默认颜色很浅-->
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                    <div class="item border-bottom">阿拉尔</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'  //随着手指滑动滚动
export default {
    name: 'CityList',
    mounted () {   //生命周期函数，挂载
        this.scroll = new BScroll(this.$refs.wrapper)  //实例，要接收dom元素或dom选择器
    }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.border-topbottom   //移动端设置1px边框颜色
    &:before    //伪元素，可用于在某个元素之前插入某些内容
        border-color #ccc
    &:after     
        border-color #ccc
.border-bottom   
    &:before   
        border-color #ccc

.list
    overflow hidden   //隐藏多余
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    // background red     

    .title
        line-height .54rem
        background #eee
        padding-left .2rem
        color #666
        font-size .26rem
    .button-list
        overflow hidden  //overflow:hidden的作用（溢出隐藏、清除浮动、解决外边距塌陷等等）
        padding .1rem .6rem .1rem .1rem

        .button-wrapper
            float left 
            width 33.33%

            .button
                margin .1rem 
                padding .1rem 0 
                text-align center
                border .02rem solid #ccc
                border-radius .06rem  //.06rem = 3px = 0.06*100\2
    .item-list
        .item
            line-height .76rem
            padding-left .2rem
</style>