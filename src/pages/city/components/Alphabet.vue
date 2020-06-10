<template>
    <ul class="list">
        <!-- <li 
            class="item" 
            v-for="(item, key) of cities" 
            :key="key"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
        >
        {{key}}
        </li>   需要循环的是li而不是ul，key代表A,B,C等 -->

        <li 
            class="item" 
            v-for="item of letters" 
            :key="item"
            :ref="item"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick"
        >
        {{item}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object 
    },
    computed :{
        letters() {
            const letters = []
            for(let i in this.cities) {
                letters.push(i)
            }
            return letters    // 返回的结果['A','B','C'...]
        }
    },
    data() {
        return {
            touchStatus: false ,    //标识位，确认三个touch事件的运行时间
            startY: 0,  
            timer: null
        }
    },
    updated () {       //生命周期钩子，更新
        this.startY = this.$refs['A'][0].offsetTop    // startY的值是固定的.A元素距离顶部的高度
    },
    methods: {
        handleLetterClick (e) {     //括号内的值可随意，就是个传参而已
            this.$emit('change', e.target.innerText)   //向外触发事件,子组件向父组件City.vue传值
            // console.log(e.target.innerText)  /* 点击什么在console就打印什么*/
        },
        //滑动右侧字母表，list跟着滑动到对应的位置
        handleTouchStart () {    //顶端
            this.touchStatus = true
        },
        handleTouchMove (e) {      //将计算出的滑到哪个字母$emit传递给父元素。
            if(this.touchStatus) {
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {     //函数节流：手指在屏幕上滑动的时候，函数执行的次数是非常高的，我们可以采用函数节流，通过定义一个定时器，来大大提高我们代码性能
                        //const startY = this.$refs['A'][0].offsetTop      写在这里，每次执行这个方法都要运算一次，性能不好
                        //console.log(startY)  //74rem
                    const touchY = e.touches[0].clientY - 79     //手指（即鼠标点击点）距离最顶端的距离
                        //console.log(touchY)      //向下拖动字母表可在console得距离顶端的距离
                    const index = Math.floor((touchY - this.startY) / 20)   //index是滑动到的字母的下标，A为1，20为每个字母的高度，floor是取整
                        //console.log(index)    //打印字母下标
                    if (index >= 0 && index < this.letters.length){
                        this.$emit('change' , this.letters[index])
                    }
                },16)
            }
        },
        handleTouchEnd () {     //尾端
            this.touchStatus = false
        }
    }
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
