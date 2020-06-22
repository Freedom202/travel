<template>
    <div>  <!--Vue只允许模板里存在一个根节点。解决方案：在 <template> 中添加一个 <div>标签，之后所有的组件全部加在 <div>即可解-->
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {  //递归组件
        return {
            list: [{
                title: '成人票',
                children: [{
                    title: '成人三馆联票',
                    children: [{
                        title: '成人三馆联票-某一连锁店销售'
                    }]
                },{
                    title: '成人五馆联票'
                }]
            },{
                title: '学生票'
            },{
                title: '儿童票'
            },{
                title: '特惠票'
            }]
        }
    }
}
</script>

<style scoped lang="stylus">
    .content
        height 50rem
</style>