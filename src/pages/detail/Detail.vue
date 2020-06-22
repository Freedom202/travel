<template>
    <div>  <!--Vue只允许模板里存在一个根节点。解决方案：在 <template> 中添加一个 <div>标签，之后所有的组件全部加在 <div>即可解-->
        <detail-banner 
            :sightName="sightName"
            :bannerImg="bannerImg"
            :gallaryImgs="gallaryImgs"
        ></detail-banner>
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
import axios from 'axios'

export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {  //递归组件
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            list: []
        }
    },
    methods: {
        getDetailInfo() {
            //axios.get('/api/detail.json?id=' + this.$route.params.id)
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleGatDataSucc)
        },
        handleGatDataSucc(res) {
            res = res.data
            if(res.ret && res.data) {
                const data = res.data
               //console.log(data)
               this.sightName = data.sightName
               this.bannerImg = data.bannerImg
               this.gallaryImgs = data.gallaryImgs
               this.list = data.categoryList
            }
        }
    },
    mounted () {
        this.getDetailInfo()
    }
}
</script>

<style scoped lang="stylus">
    .content
        height 50rem
</style>