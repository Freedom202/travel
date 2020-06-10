<template>
    <div>
        <home-header :city="city"></home-header>   <!--父组件向子组件传值用的是属性的方法-->
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'  //引入局部组件
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
    name: 'Home',
    components: {   //引用局部组件
        HomeHeader,
        //或者 HomeHeader: HomeHeader
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data () {
        return {
            city: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    methods: {     //方法
        getHomeInfo () {
            axios.get('/api/index.json')     //在config下的index.js中的proxyTable中已经进行修改了、、、返回的是一个promise对象（代表了未来将要发生的事件），后面使用then
                .then(this.getHomeInfoSucc)   //获取成功执行getHomeInfoSucc函数
        },
        getHomeInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.city = data.city
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
    mounted () {   //vue的生命周期函数，挂载
        this.getHomeInfo()  //页面挂载好执行这个方法ajax获取数据
    },
}
</script>

<style scoped>

</style>











<!--<template>
<!-- 一个模板里只能有一个根目录，所以必须用一个大的div把它们都包裹着 
    <div>
        <div class='home'>home</div>
        <router-link to="/list" class='home'>列表页</router-link> <!--等同于a标签
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
    .home{
        font-size: 50px;
    }
</style>
-->

