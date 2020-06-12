<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe6bc;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe60e;</span>
            输入城市\景点\游玩主题
        </div>

        <router-link to='/city'>
            <div class="header-right">
                <!-- {{this.$store.state.city}} 因为用mapState映射了数据，所以不用这么麻烦了-->
                {{this.city}}
                <!-- {{this.doubleCity}} -->
                <span class="iconfont arrow-icon">&#xe695;</span>   <!--&#xe695;为iconfont里的样式 ； arrow-icon为样式类名-->   
            </div>
        </router-link>

    </div>
</template>

<script>
import { mapState } from 'vuex'
// import { mapState,mapGetters } from 'vuex'
export default {
    name: 'HomeHeader',
    // props: {   //从父组件接收数据
    //     city: String
    // }
    computed: {    //计算属性
        ...mapState(['city'])  
//mapState把vuex中的city映射到computed中的city中.['city']表示是一个数组
        // ...mapGetters(['doubleCity'])
    }
}
</script>


<style scoped lang="stylus">  
// scoped确保样式只用于此组件，而不影响其他组件
//stylus为css辅助工具，同等的还有Less、Sass
//stylus不能被vscode识别是因为vscode没有下载stylus插件
/*移动端布局一般用rem为单位：
        1rem = html font-size = 50px 
        86px/100 = 0.86rem  (此项目设计图是2倍屏；html font-size在src\assets\styles\reset.css中可看到，设置的是50px)*/
   


/* 定义变量，使全局通用，并在style中引用（创建.styl文件）：此项目中为varibles.styl*/  
//方法一   @import '../../../assets/styles/varibles.styl'  
/*方法二   @import '~@/assets/styles/varibles.styl'
            @表示的是src目录，在css中引用其他的css要用@引用的话，要在前面加~，即写为~@   
*/
    @import '~styles/varibles.styl' 
/*方法三   在build目录下的webpack.base.config.js中可以配置路径简写，如：（引用的时候用~引用）
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),  //即表示@代表的src目录
            'styles': resolve('src/assets/styles'),  //即styles代表的是src/assets/styles
            }
        },
修改webpack.base.config.js必须重新启动项目（编码过程中报错可以先不管），且在修改了webpack.base.config.js后要注意其他地方的引用有没有问题
*/



    .header
        display: flex   //Flex是Flexible Box的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。
        line-height : $headerHeight
        background: $bgColor    /*varibles.styl中的$bgColor*/
        color : #fff

        .header-left
            width: .64rem
            float: left 
            .back-icon
                text-align: center
                font-size: .4rem

        .header-input
            flex: 1   //flex-shrink,即如果空间不足，该项目将缩小。
            height: .64rem
            line-height: .64rem 
            margin-top: .12rem
            margin-left: .2rem 
            padding-left: .2rem
            background : #fff
            border-radius : .1rem   //0.1rem*50px=5px
            color: #ccc

        .header-right
            min-width: 1.04rem    //最小为1.04rem
            padding 0 .1rem 
            float: right   //如果没有定义.header-input则float: right不会生效
            text-align : center
            color: #fff
            .arrow-icon
                margin-left: -.04rem  //向左移2px，因为可能两个inline元素中有2px的间距（或者给父级设置font-size：0，然后给每个元素font-size：.24rem应该也可）
                font-size: .28rem
</style>