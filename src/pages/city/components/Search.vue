<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />  <!--placeholder是h5的新属性-->
        </div>
        <div class="search-content" ref="search" v-show="keyword">   <!--展示搜索内容///v-show="keyword"有值的时候显示，没值的时候隐藏-->
            <ul>
                <li 
                    class="search-item border-bottom" 
                    v-for="item of list" 
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                >
                    {{item.name}}
                </li>
                <li 
                    class="search-item border-bottom" 
                    v-show="hasNoData" 
                >
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    methods: {
        handleCityClick (city) {
            //this.$store.dispatch('changeCity', city)  //vuex官方文档，dispatch
            //alert(city)
            //this.$store.commit('changeCity', city)
            this.changeCity(city)
            this.$router.push('/')  //跳转到首页。vue路由的编程式导航
        },
         ...mapMutations(['changeCity'])
    },
    computed: {    //判断list长度是否为空、、、最好把逻辑运算都放在script里，不要放在模板（template）里
        hasNoData() {
            return !this.list.length
        }
    },
    watch: {   //在watch中监听keyword的变化，使用循环遍历，通过筛选把符合的city追加到list数组
        keyword () {  // keyword 关键词
            if(this.timer) {
                clearTimeout(this.timer)
            }
            if(!this.keyword){    //没有匹配到关键字则数组清零，同时返回最初
                this.list = []
                return
            }
            this.timer = setTimeout(() => {   //节流函数
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {    //遍历
                        if(value.spell.indexOf(this.keyword) > -1 ||
                            value.name.indexOf(this.keyword) >-1 ) {
                                result.push(value)   //把value值提交到result数组中
                            }
                    })
                }
                this.list = result  //list数组==result数组
            },100)
        }
    },
    mounted () {  //生命周期钩子，挂载
        this.scroll = new Bscroll(this.$refs.search,{
            click: true
        })    //实现触摸滚动
    }
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

.search-content
    z-index 1
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee

    .search-item
        line-height .62rem
        padding-left .2rem
        background #fff
        color #666
</style>
