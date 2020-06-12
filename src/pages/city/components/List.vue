<template>
    <div class="list" ref="wrapper">   <!--ref可以获取dom: https://blog.csdn.net/weixin_41646716/article/details/80455506     https://www.cnblogs.com/goloving/p/9404099.html-->
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                        <!-- <div class="button">{{this.$store.state.city}}</div> 因为用mapState映射了数据，所以不用这么麻烦了-->
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                    <div class="button-list">
                        <div 
                            class="button-wrapper" 
                            v-for="item of hot" 
                            :key="item.id"
                            @click="handleCityClick(item.name)"
                        >
                            <div class="button">{{item.name}}</div>
                        </div>
                </div>
            </div>
            <div 
                class="area" 
                v-for="(item, key) of cities" 
                :key="key"
                :ref="key"
            >    
<!--对象用v-for的方法，第二项是key不是index;  key值就用key，即A、B等，它确保不会重名，所以可行； 父级与子级key值重复没有关系，只要同级不重复就行-->
<!--  1.ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上，就比如我们想访问子组件的一些数据和方法，就可以使用ref为子组件指定一个引用的id,调用方式为
            const child = parent.$refs.id
      2.一般来讲，获取DOM元素，需document.querySelector（".input1"）获取这个dom节点，然后在获取input1的值。但是用ref绑定之后，我们就不需要在获取dom节点了，直接在上面的input上绑定input1，然后$refs里面调用就行。然后在javascript里面这样调用：this.$refs.input1  这样就可以减少获取dom节点的消耗了.
      即，ref是dom向组件传值的，refs是配套的，组件接收ref的传值-->
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">    <!--或者用ul写-->
                    <div 
                        class="item border-bottom"
                        v-for="innerItem of item"
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                    >
                    {{innerItem.name}}
                    </div>   <!--border-bottom添加下边框，只是默认颜色很浅-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'  //随着手指滑动滚动
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'CityList',
    props: {
        hot: Array,
        cities: Object,  //对象数据类型
        letter: String   //接收父组件City.vue的传值
    },
    methods: {
        handleCityClick (city) {
            //this.$store.dispatch('changeCity', city)  //vuex官方文档，dispatch
            //alert(city)
           //用了vuex传值，就可以不这么写，而是用下面的方法 this.$store.commit('changeCity', city)
           this.changeCity(city)
           this.$router.push('/')  //跳转到首页。vue路由的编程式导航
        },
        ...mapMutations(['changeCity'])   //把mapMutations中的changeCity映射到这个组件里叫changeCity的方法里
    },
    computed: {    //计算属性
        ...mapState({
                currentCity: 'city'   //映射vuex中的city取名为currentCity，且为对象类型
        })
//        ...mapState(['city'])   //['city']为数组。mapState把vuex中的city映射到computed中的city中
    },
    watch: {         //监听器
        letter() {
            // console.log(this.letter)
            if(this.letter){
                const element = this.$refs[this.letter][0]   //element是循环输出的，得到的是一个数组，即element的类型是数组，但是csroll函数只能引用dom元素或者dom选择器类型,所以必须加"[0]"
                            // refs-->通过为每个循环绑定ref ref的值对应的是每个key 也就是每个字母
                            // [0]-->取到的是一个数组，具体的元素dom节点为数组的第一项
                this.scroll.scrollToElement(element)  //scroll插件的一个方法，滚动到指定位置
            }
        }
    },
    mounted() {   //生命周期函数，挂载
        this.scroll = new BScroll(this.$refs.wrapper,{
            click: true    //better_scroll中默认click为false，所以必须修改为true，不然会click无效
        })  //实例，要接收dom元素或dom选择器
    }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.border-topbottom   //移动端设置1px边框颜色
    &:before    //伪元素，可用于在某个元素之前插入某些内容
        border-color #ccc
    &:after     
        border-color #ccc
.border-bottom   
    &:before   
        border-color #ccc

.list
    overflow hidden   //隐藏多余
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    // background red     

    .title
        line-height .54rem
        background #eee
        padding-left .2rem
        color #666
        font-size .26rem
    .button-list
        overflow hidden  //overflow:hidden的作用（溢出隐藏、清除浮动、解决外边距塌陷等等）
        padding .1rem .6rem .1rem .1rem

        .button-wrapper
            float left 
            width 33.33%

            .button
                margin .1rem 
                padding .1rem 0 
                text-align center
                border .02rem solid #ccc
                border-radius .06rem  //.06rem = 3px = 0.06*100\2
    .item-list
        .item
            line-height .76rem
            padding-left .2rem
</style>