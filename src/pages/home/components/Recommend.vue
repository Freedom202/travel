<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">   <!--border-bottom让li有1px的边框-->
                    <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
     name: 'HomeRecommend',
     props: {
         list: Array
     }
}







// export default {
//     name: 'HomeRecommend',
//     data () {
//         return {
//             recommendList: [{
//                 id: '001',
//                 imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
//                 title: '深圳野生动物园',
//                 desc: '放养式动物园让你和动物们“零距离”放养式动物园让你和动物们“零距离”放养式动物园让你和动物们“零距离”'
//             },{
//                 id: '002',
//                 imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
//                 title: '深圳野生动物园',
//                 desc: '放养式动物园让你和动物们“零距离”放养式动物园让你和动物们“零距离”放养式动物园让你和动物们“零距离”'
//             },{
//                 id: '003',
//                 imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
//                 title: '深圳野生动物园',
//                 desc: '放养式动物园让你和动物们“零距离”放养式动物园让你和动物们“零距离”放养式动物园让你和动物们“零距离”'
//             }]
//         }
//     }
// }
</script>

<style scoped lang="stylus">
@import '~styles/mixins.styl'
    .title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem   //文字首行缩进
    .item
        overflow hidden
        display flex
        height 1.9rem
        //background red
        
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0   //有此，ellipsis()才有用

            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color #ccc
                ellipsis()
            .item-button
                line-height .44rem
                margin-top .16rem
                background #ff9300
                padding 0 .2rem 
                border-radius .06rem  //3px
                color #fff


</style>