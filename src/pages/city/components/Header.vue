<template>
    <div class="header">
        城市选择
        <router-link to="/">   <!--回到根目录，即首页-->
            <div class="iconfont header-back">&#xe6bc;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.header
    position relative
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size .32rem

    .header-back
        position absolute
        top 0
        left 0
        width .64rem
        text-align: center
        font-size: .4rem
        color #fff   //使链接样式为白色
</style>
