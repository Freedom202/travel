<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet'
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.list
    display flex
    flex-direction column    //css3，灵活的项目将垂直显示，正如一个列一样。
    justify-content center   //css3，项目位于容器的中心。
    //以上三行代码，实现竖直居中
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    // background red

    .item
        line-height .4rem   //最好与滚动框每一项等高
        text-align center   //水平居中
        color $bgColor
</style>
