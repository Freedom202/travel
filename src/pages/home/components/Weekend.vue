<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" 
                v-for="item of list"
                :key="item.id"
            >   <!--border-bottom让li有1px的边框-->
                <div class="item-img-wrapper">  <!--wrapper中文是包装的意思-->
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        list: Array
    }
}


// export default {
//     name: 'HomeWeekend',
//     data () {
//         return {
//             recommendList: [{
//                 id: '001',
//                 imgUrl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
//                 title: '深圳周边游',
//                 desc: '远离城市拥堵，去周边开启清新假期吧。'
//             },{
//                 id: '002',
//                 imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
//                 title: '清远周边逛',
//                 desc: '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'
//             },{
//                 id: '003',
//                 imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
//                 title: '浮在海上的绿洲',
//                 desc: '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'
//             }]
//         }
//     }
// }
</script>

<style scoped lang="stylus">
@import '~styles/mixins.styl'
    .title
        // margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem   //文字首行缩进
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 37.09%    //得看图片的宽高比
        
        .item-img
            width 100%

    .item-info
        padding .1rem

        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
</style>