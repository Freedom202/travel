<template>
    <div>  <!--Vue只允许模板里存在一个根节点。解决方案：在 <template> 中添加一个 <div>标签，之后所有的组件全部加在 <div>即可解-->
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader
    }
}
</script>

<style scoped lang="stylus">
    .content
        height 50rem
</style>