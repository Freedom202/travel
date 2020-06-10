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
                        <div class="button-wrapper" v-for="item of hot" :key="item.id">
                            <div class="button">{{item.name}}</div>
                        </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key">    
<!--对象用v-for的方法，第二项是key不是index;  key值就用key，即A、B等，它确保不会重名，所以可行； 父级与子级key值重复没有关系，只要同级不重复就行-->
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">    <!--或者用ul写-->
                    <div 
                        class="item border-bottom"
                        v-for="innerItem of item"
                        :key="innerItem.id"
                    >
                    {{innerItem.name}}
                    </div>   <!--border-bottom添加下边框，只是默认颜色很浅-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'  //随着手指滑动滚动
export default {
    name: 'CityList',
    props: {
        hot: Array,
        cities: Object  //对象数据类型
    },
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