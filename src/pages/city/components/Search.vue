<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音" />  <!--placeholder是h5的新属性-->
    </div>
</template>

<script>
export default {
    name: 'CitySearch'
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.search
    height .72rem
    padding 0 .1rem
    background $bgColor

    .search-input
        box-sizing border-box   //当输入内容很多时，样式设置
        width 100%
        height .62rem
        padding 0 .1rem
        line-height .62rem
        text-align center
        border-radius .06rem
        color #666
</style>
